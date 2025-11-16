// --- server.js ---
// This is a simple Node.js Express server.
// DO NOT run this in the browser. Run it from your terminal: node server.js

const express = require('express');
const multer = require('multer');
const FormData = require('form-data');
const fetch = require('node-fetch'); // Use node-fetch v2 for CommonJS
const { poppler } = require('pdf-poppler');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// --- CONFIGURATION ---
// !! PUT YOUR SECRET API KEY HERE. DO NOT SHARE THIS FILE. !!
// You can also use environment variables: process.env.OCR_API_KEY
const OCR_SPACE_API_KEY = 'K89620932088957'; 

// Multer setup for handling file uploads in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve the static files (index.html, style.css, script.js)
// This tells Express to serve your frontend files from the root directory
app.use(express.static(path.join(__dirname)));

/**
 * Sends a single image file (as a buffer) to the OCR.space API
 */
async function sendToOcrApi(fileBuffer, language) {
  const formData = new FormData();
  formData.append('apikey', OCR_SPACE_API_KEY);
  formData.append('OCREngine', '2');
  formData.append('language', language);
  formData.append('file', fileBuffer, { filename: 'image.png' });

  try {
    const response = await fetch('https://api.ocr.space/parse/image', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    
    if (result.IsErroredOnProcessing) {
      throw new Error(result.ErrorMessage.join(', '));
    }
    
    if (result.ParsedResults && result.ParsedResults[0]) {
      return result.ParsedResults[0].ParsedText;
    }
    return ''; // No text found
  } catch (error) {
    console.error('OCR API Error:', error);
    throw error;
  }
}

/**
 * Handles the main /api/ocr endpoint
 */
app.post('/api/ocr', upload.single('file'), async (req, res) => {
  const { language, url } = req.body;
  const file = req.file;

  try {
    let allText = '';

    if (file) {
      // --- PDF Processing Logic ---
      if (file.mimetype === 'application/pdf') {
        // Create a unique temp file name
        const tempPdfPath = path.join(__dirname, `temp_${Date.now()}.pdf`);
        fs.writeFileSync(tempPdfPath, file.buffer);

        const options = {
          format: 'png', // Convert to PNG
          out_dir: path.join(__dirname), // Output to the same directory
          out_prefix: `page_${Date.now()}`, // Unique prefix for output files
          dpi: 300 // Use good quality
        };

        // 1. Convert PDF to images
        await poppler.pdfToImg(tempPdfPath, options);
        
        // 2. Read all generated image files
        const files = fs.readdirSync(__dirname)
          .filter(f => f.startsWith(options.out_prefix) && f.endsWith('.png'))
          .sort((a, b) => {
            // Sort files numerically by page number
            const aNum = parseInt(a.split('-').pop().replace('.png', ''));
            const bNum = parseInt(b.split('-').pop().replace('.png', ''));
            return aNum - bNum;
          });

        // 3. OCR each image one by one
        for (const imgFile of files) {
          const imgPath = path.join(__dirname, imgFile);
          const imgBuffer = fs.readFileSync(imgPath);
          
          const pageText = await sendToOcrApi(imgBuffer, language);
          allText += pageText + '\n\n';
          
          fs.unlinkSync(imgPath); // Delete image after processing
        }
        
        fs.unlinkSync(tempPdfPath); // Delete temp PDF

      } else {
        // --- Single Image Processing Logic ---
        allText = await sendToOcrApi(file.buffer, language);
      }

    } else if (url) {
      // --- URL Processing Logic ---
      const formData = new FormData();
      formData.append('apikey', OCR_SPACE_API_KEY);
      formData.append('OCREngine', '2');
      formData.append('language', language);
      formData.append('url', url);

      const response = await fetch('https://api.ocr.space/parse/image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.IsErroredOnProcessing) {
        throw new Error(result.ErrorMessage.join(', '));
      }
      if (result.ParsedResults && result.ParsedResults[0]) {
        allText = result.ParsedResults[0].ParsedText;
      }
      
    } else {
      return res.status(400).json({ error: 'No file or URL provided.' });
    }

    // Success! Send the combined text back to the client
    res.json({ text: allText.trim() });

  } catch (error) {
    console.error('Server-side processing error:', error);
    // Send a JSON error response to the client
    res.status(500).json({ error: error.message || 'An internal server error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Serving static files from:', __dirname);
});
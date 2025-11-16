// Translation system
const translations = {
  en: {
    header_title: 'Extract Text and Convert to Dynamic JSON',
    header_subtitle:
      'Upload an image or PDF file to extract text and convert it to structured data',
    file_upload_label: 'Upload Image or PDF File:',
    upload_text: 'Click to upload or drag and drop here',
    upload_hint: 'PNG, JPG, JPEG, WEBP, PDF',
    divider: 'OR',
    url_input_label: 'Or Enter Image URL:',
    url_placeholder: 'https://example.com/image.jpg',
    language_selector_label: 'Select Language:',
    language_auto: 'Auto-Detect',
    language_eng: 'English',
    language_ara: 'Arabic',
    button_start: 'Start Conversion',
    button_start_loading: 'Processing...',
    button_clear: 'Clear',
    button_download_txt: 'Download as TXT', // This key is no longer used by a button but kept for reference
    button_download_json: 'Download as JSON', // This key is no longer used by a button but kept for reference
    button_save_json: 'Save as JSON',
    button_save_csv: 'Save as CSV',
    button_copy: 'Copy to Clipboard',
    form_heading: 'Extracted Information',
    not_found: 'Not Found',
    copied_success: 'Copied to clipboard!',
    saved_success: 'File saved successfully!',
    cert_info: 'Certificate Information',
    basic_info: 'Basic Information',
    validity_period: 'Validity Period',
    financial_info: 'Financial Information',
    manager_info: 'Manager Information',
    issuing_authority: 'Issuing Authority',
    certificate_type: 'Certificate Type',
    city: 'City',
    issue_date: 'Issue Date',
    receipt_number: 'Receipt Number',
    unified_number: 'Unified Number',
    establishment_number: 'Establishment Number',
    company_name: 'Company Name',
    company_nationality: 'Company Nationality',
    start_date: 'Start Date',
    expiry_date: 'Expiry Date',
    invested_capital: 'Invested Capital',
    manager_name: 'Manager Name',
    passport_id: 'Passport/ID Number',
    extracted_text_heading: 'Extracted Text:',
    dynamic_json_heading: 'Dynamic JSON:',
    no_text_found: 'No text found.',
    processing: 'Processing...', // Generic processing
    error_message: 'An error occurred during processing.',
    error_select_file: 'Please upload a file or enter an image URL.',
    file_selected: 'File selected: ',
    alert_clear: 'All data cleared.',
    alert_success: 'Text extracted successfully!',
    alert_no_text: 'No text found in the image.',
    alert_extraction_failed: 'Failed to extract text from the image.',
    pdf_converting: 'Processing PDF, this may take a moment...',
    pdf_processing_page: 'Processing page',
    pdf_of: 'of',
    pdf_success: 'PDF processed successfully.',
    pdf_error: 'Error processing PDF file.',
    api_error: 'API Error: ',
  },
  ar: {
    header_title: 'استخراج النص وتحويله إلى JSON ديناميكي محسّن',
    header_subtitle:
      'قم برفع صورة أو ملف PDF لاستخراج النص وتحويله إلى بيانات منظمة',
    file_upload_label: 'رفع صورة أو ملف PDF:',
    upload_text: 'اضغط لرفع ملف أو اسحبه هنا',
    upload_hint: 'PNG, JPG, JPEG, WEBP, PDF',
    divider: 'أو',
    url_input_label: 'أو أدخل رابط الصورة:',
    url_placeholder: 'https://example.com/image.jpg',
    language_selector_label: 'اختر اللغة:',
    language_auto: 'كشف تلقائي',
    language_eng: 'الإنجليزية',
    language_ara: 'العربية',
    button_start: 'ابدأ التحويل',
    button_start_loading: 'جاري المعالجة...',
    button_clear: 'مسح',
    button_download_txt: 'تحميل النص', // This key is no longer used by a button but kept for reference
    button_download_json: 'تحميل JSON', // This key is no longer used by a button but kept for reference
    button_save_json: 'حفظ JSON',
    button_save_csv: 'حفظ CSV',
    button_copy: 'نسخ إلى الحافظة',
    form_heading: 'المعلومات المستخرجة',
    not_found: 'غير محدد',
    copied_success: 'تم النسخ إلى الحافظة!',
    saved_success: 'تم حفظ الملف بنجاح!',
    cert_info: 'معلومات الشهادة',
    basic_info: 'المعلومات الأساسية',
    validity_period: 'فترة الصلاحية',
    financial_info: 'المعلومات المالية',
    manager_info: 'معلومات المدير',
    issuing_authority: 'جهة الإصدار',
    certificate_type: 'نوع الشهادة',
    city: 'المدينة',
    issue_date: 'تاريخ الإصدار',
    receipt_number: 'رقم الإيصال',
    unified_number: 'الرقم الموحد',
    establishment_number: 'رقم المنشأة',
    company_name: 'اسم الشركة',
    company_nationality: 'جنسية الشركة',
    start_date: 'تاريخ البداية',
    expiry_date: 'تاريخ الانتهاء',
    invested_capital: 'مقدار المال المستثمر',
    manager_name: 'اسم المدير',
    passport_id: 'رقم الجواز أو الحفيظة',
    extracted_text_heading: 'النص المستخرج:',
    dynamic_json_heading: 'JSON ديناميكي محسّن:',
    no_text_found: 'لم يتم العثور على نص.',
    processing: 'جاري المعالجة...',
    error_message: 'حدث خطأ أثناء المعالجة.',
    error_select_file: 'يرجى رفع ملف أو إدخل رابط الصورة.',
    file_selected: 'الملف المختار: ',
    alert_clear: 'تم مسح جميع البيانات.',
    alert_success: 'تم استخراج النص بنجاح!',
    alert_no_text: 'لم يتم العثور على نص في الصورة.',
    alert_extraction_failed: 'فشل استخراج النص من الصورة.',
    pdf_converting: 'جاري معالجة PDF، قد يستغرق هذا بعض الوقت...',
    pdf_processing_page: 'معالجة الصفحة',
    pdf_of: 'من',
    pdf_success: 'تم معالجة ملف PDF بنجاح.',
    pdf_error: 'خطأ في معالجة ملف PDF.',
    api_error: 'خطأ في الواجهة البرمجية: ',
  },
};

let currentLang = 'ar';
let extractedText = '';
let generatedJson = {};

function switchLanguage(lang) {
  currentLang = lang;
  const htmlRoot = document.getElementById('htmlRoot');
  const t = translations[lang];

  // Update HTML attributes
  htmlRoot.setAttribute('lang', lang);
  htmlRoot.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update all text content
  document.getElementById('headerTitle').textContent = t.header_title;
  document.getElementById('headerSubtitle').textContent = t.header_subtitle;
  document.getElementById('fileUploadLabel').textContent = t.file_upload_label;
  document.getElementById('uploadText').textContent = t.upload_text;
  document.getElementById('uploadHint').textContent = t.upload_hint;
  document.getElementById('dividerText').textContent = t.divider;
  document.getElementById('urlInputLabel').textContent = t.url_input_label;
  document.getElementById('urlInput').placeholder = t.url_placeholder;
  document.getElementById('languageSelectorLabel').textContent =
    t.language_selector_label;
  document.getElementById('langOptAuto').textContent = t.language_auto;
  document.getElementById('langOptEng').textContent = t.language_eng;
  document.getElementById('langOptAra').textContent = t.language_ara;
  document.getElementById('startBtnText').textContent = t.button_start;
  document.getElementById('clearBtn').textContent = t.button_clear;
  document.getElementById('extractedTextHeading').textContent =
    t.extracted_text_heading;
  document.getElementById('formHeading').textContent = t.form_heading;
  document.getElementById('dynamicJsonHeading').textContent =
    t.dynamic_json_heading;
  document.getElementById('saveJsonText').textContent = t.button_save_json;
  document.getElementById('saveCsvText').textContent = t.button_save_csv;
  document.getElementById('copyText').textContent = t.button_copy;

  // Update toggle button text to show opposite language
  document.getElementById('langToggleText').textContent =
    lang === 'ar' ? 'English' : 'العربية';
}

function showAlert(message, type = 'info', isSticky = false) {
  const alertContainer = document.getElementById('alertContainer');
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;

  const icon =
    type === 'error'
      ? '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
      : type === 'success'
      ? '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
      : '<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

  alert.innerHTML = icon + '<span>' + message + '</span>';
  alertContainer.appendChild(alert);

  if (!isSticky) {
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}

// NEW: setStatus function
function setStatus(message, isLoading) {
  const statusText = document.getElementById('statusText');
  if (message) {
    statusText.textContent = message;
    statusText.classList.remove('hidden');
  } else {
    statusText.classList.add('hidden');
  }

  // Also update the main button
  setLoading(isLoading, message);
}

// UPDATED: setLoading function
function setLoading(isLoading, loadingMessage = '') {
  const startBtn = document.getElementById('startBtn');
  const startBtnText = document.getElementById('startBtnText');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const t = translations[currentLang];

  if (isLoading) {
    startBtn.disabled = true;
    startBtnText.textContent = loadingMessage || t.button_start_loading;
    loadingSpinner.classList.remove('hidden');
  } else {
    startBtn.disabled = false;
    startBtnText.textContent = t.button_start;
    loadingSpinner.classList.add('hidden');
  }
}

// HEAVILY UPDATED: runOCR function
async function runOCR(file, url, language) {
  const t = translations[currentLang];
  const formData = new FormData();
  formData.append('language', language);

  if (file) {
    formData.append('file', file);
    // Show PDF-specific message
    if (file.type === 'application/pdf') {
      setStatus(t.pdf_converting, true);
    } else {
      setStatus(t.processing, true);
    }
  } else if (url) {
    formData.append('url', url);
    setStatus(t.processing, true);
  } else {
    showAlert(t.error_select_file, 'error');
    return null;
  }

  try {
    // Send to OUR server, not ocr.space
    const response = await fetch('/api/ocr', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      // Show the specific error message from our server
      throw new Error(result.error || t.error_message);
    }

    return result; // Server will return the final, combined text
  } catch (error) {
    console.error('OCR request error:', error);
    throw new Error(error.message);
  }
}

function normalizeArabicNumbers(str) {
  const arabicNums = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
  };
  return str.replace(/[٠-٩]/g, (d) => arabicNums[d]);
}

function extractField(text, patterns) {
  for (let pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }
  return 'غير محدد';
}

function buildDynamicJson(text) {
  // Normalize Arabic numbers FIRST
  text = normalizeArabicNumbers(text);

  // Extract Unified Number with multiple patterns
  const unifiedNumberPatterns = [
    /الرقم\s+الموحد[:\s]+([0-9]+)/,
    /الموحد[:\s]+([0-9]+)/,
    /موحد[:\s]+([0-9]+)/,
  ];
  const unifiedNumber = extractField(text, unifiedNumberPatterns);

  // Extract Establishment Number with multiple patterns
  const establishmentNumberPatterns = [
    /رقم\s+المنشأة[:\s]+([0-9]+)/,
    /المنشأة[:\s]+([0-9]+)/,
    /منشأة[:\s]+([0-9]+)/,
  ];
  const establishmentNumber = extractField(text, establishmentNumberPatterns);

  // Extract Company Name with multiple patterns
  const companyNamePatterns = [
    /(?:اسم\s+)?(?:الشركة|الشركة\s+الأجنبية)[:\s]+(.+?)(?=\n|رقم|$)/,
    /الشركة[:\s]+([^\n]+)/,
    /فرع\s+(.+?)(?=\n|رقم|$)/,
  ];
  const companyName = extractField(text, companyNamePatterns);

  // Extract all dates
  const dates = text.match(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/g) || [];

  // Extract Invested Capital
  const investedCapitalPatterns = [
    /مقدار\s+المال\s+المستثمر[:\s]+([0-9,]+)/,
    /المال\s+المستثمر[:\s]+([0-9,]+)/,
  ];
  const investedCapital = extractField(text, investedCapitalPatterns);

  // Extract Passport Number
  const passportNumberPatterns = [
    /(?:رقم\s+)?(?:الحفيظة|الجواز)[:\s]+([0-9]+)/,
    /الجواز[:\s]+([0-9]+)/,
    /الحفيظة[:\s]+([0-9]+)/,
  ];
  const passportNumber = extractField(text, passportNumberPatterns);

  // Extract Manager Name
  const managerNamePatterns = [
    /(?:مدير|المدير)[:\s]+(.+?)(?=\n|رقم|$)/,
    /المدير[:\s]+([^\n]+)/,
  ];
  const managerName = extractField(text, managerNamePatterns);

  // Extract Receipt Number
  const receiptNumberPatterns = [
    /الإيصال\s+رقم[:\s]+([0-9]+)/,
    /إيصال[:\s]+([0-9]+)/,
  ];
  const receiptNumber = extractField(text, receiptNumberPatterns);

  return {
    certificate: {
      issuing_authority: 'وزارة التجارة',
      certificate_type: 'شهادة تسجيل فرع شركة أجنبية',
      city: text.includes('الرياض') ? 'الرياض' : 'غير محدد',
      issue_date:
        dates.length >= 2
          ? dates[1]
          : dates.length >= 1
          ? dates[0]
          : 'غير محدد',
      receipt_number: receiptNumber,
    },
    basic_information: {
      unified_number: unifiedNumber,
      establishment_number: establishmentNumber,
      company_name: companyName,
      company_nationality: text.includes('لبناني') ? 'لبناني' : 'غير محدد',
    },
    validity_period: {
      start_date: dates.length >= 1 ? dates[0] : 'غير محدد',
      expiry_date:
        dates.length >= 3
          ? dates[dates.length - 1]
          : dates.length >= 2
          ? dates[dates.length - 1]
          : 'غير محدد',
    },
    financial_information: {
      invested_capital: investedCapital,
    },
    manager_information: {
      name: managerName,
      passport_or_id_number: passportNumber,
    },
  };
}

function renderFormDisplay(jsonData) {
  const t = translations[currentLang];
  const formDisplay = document.getElementById('formDisplay');
  const notFound = t.not_found;

  const sections = [
    {
      title: t.cert_info,
      fields: [
        {
          label: t.issuing_authority,
          value: jsonData.certificate.issuing_authority,
        },
        {
          label: t.certificate_type,
          value: jsonData.certificate.certificate_type,
        },
        { label: t.city, value: jsonData.certificate.city },
        { label: t.issue_date, value: jsonData.certificate.issue_date },
        { label: t.receipt_number, value: jsonData.certificate.receipt_number },
      ],
    },
    {
      title: t.basic_info,
      fields: [
        {
          label: t.unified_number,
          value: jsonData.basic_information.unified_number,
        },
        {
          label: t.establishment_number,
          value: jsonData.basic_information.establishment_number,
        },
        {
          label: t.company_name,
          value: jsonData.basic_information.company_name,
        },
        {
          label: t.company_nationality,
          value: jsonData.basic_information.company_nationality,
        },
      ],
    },
    {
      title: t.validity_period,
      fields: [
        { label: t.start_date, value: jsonData.validity_period.start_date },
        { label: t.expiry_date, value: jsonData.validity_period.expiry_date },
      ],
    },
    {
      title: t.financial_info,
      fields: [
        {
          label: t.invested_capital,
          value: jsonData.financial_information.invested_capital,
        },
      ],
    },
    {
      title: t.manager_info,
      fields: [
        { label: t.manager_name, value: jsonData.manager_information.name },
        {
          label: t.passport_id,
          value: jsonData.manager_information.passport_or_id_number,
        },
      ],
    },
  ];

  let html = '';
  sections.forEach((section) => {
    html += `<h4>${section.title}</h4><div class="form-grid">`;
    section.fields.forEach((field) => {
      const isEmpty =
        !field.value ||
        field.value === 'غير محدد' ||
        field.value === 'Not Found';
      html += `
        <div class="form-field">
          <div class="form-field-label">${field.label}</div>
          <div class="form-field-value ${isEmpty ? 'empty' : ''}">${
        isEmpty ? notFound : field.value
      }</div>
        </div>
      `;
    });
    html += '</div>';
  });

  formDisplay.innerHTML = html;
}

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[:.-]/g, '').substring(0, 15);
}

function convertToCSV(jsonData) {
  const rows = [];
  rows.push(['Section', 'Field', 'Value']);

  const addSection = (sectionName, data) => {
    Object.entries(data).forEach(([key, value]) => {
      rows.push([sectionName, key.replace(/_/g, ' '), value]);
    });
  };

  addSection('Certificate', jsonData.certificate);
  addSection('Basic Information', jsonData.basic_information);
  addSection('Validity Period', jsonData.validity_period);
  addSection('Financial Information', jsonData.financial_information);
  addSection('Manager Information', jsonData.manager_information);

  return rows.map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n');
}

// Language toggle button
document.getElementById('langToggleBtn').addEventListener('click', function () {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  switchLanguage(newLang);
});

// Start Button
document
  .getElementById('startBtn')
  .addEventListener('click', async function () {
    const t = translations[currentLang];
    const file = document.getElementById('fileInput').files[0];
    const url = document.getElementById('urlInput').value.trim();
    const language = document.getElementById('language').value;

    document.getElementById('resultContainer').classList.add('hidden');
    document.getElementById('alertContainer').innerHTML = ''; // Clear old alerts

    try {
      const data = await runOCR(file, url, language);

      if (data && data.text) {
        extractedText = data.text.trim();

        if (extractedText) {
          document.getElementById('resultText').textContent = extractedText;
          generatedJson = buildDynamicJson(extractedText);
          renderFormDisplay(generatedJson);
          document.getElementById('jsonOutput').innerHTML =
            '<pre>' + JSON.stringify(generatedJson, null, 2) + '</pre>';

          document.getElementById('resultContainer').classList.remove('hidden');
          showAlert(t.alert_success, 'success');
        } else {
          showAlert(t.alert_no_text, 'error');
        }
      } else {
        // This handles cases where the API returns OK but no text
        showAlert(t.alert_extraction_failed, 'error');
      }
    } catch (error) {
      // This will show the specific error from runOCR()
      showAlert(error.message, 'error');
      console.error(error);
    } finally {
      setStatus('', false); // Clear status text and reset button
    }
  });

// Clear Button
document.getElementById('clearBtn').addEventListener('click', function () {
  const t = translations[currentLang];
  document.getElementById('fileInput').value = '';
  document.getElementById('urlInput').value = '';
  document.getElementById('resultContainer').classList.add('hidden');
  document.getElementById('fileNameDisplay').classList.add('hidden');
  document.getElementById('fileNameDisplay').textContent = '';
  document.getElementById('alertContainer').innerHTML = '';
  document.getElementById('statusText').classList.add('hidden');
  extractedText = '';
  generatedJson = {};
  showAlert(t.alert_clear, 'info');
});

// File name display
document.getElementById('fileInput').addEventListener('change', function (e) {
  const t = translations[currentLang];
  const fileDisplay = document.getElementById('fileNameDisplay');
  if (e.target.files.length > 0) {
    const fileName = e.target.files[0].name;
    fileDisplay.textContent = t.file_selected + fileName;
    fileDisplay.classList.remove('hidden');
    // Clear URL input if a file is selected
    document.getElementById('urlInput').value = '';
  } else {
    fileDisplay.classList.add('hidden');
    fileDisplay.textContent = '';
  }
});

// Clear file input if URL is typed
document.getElementById('urlInput').addEventListener('input', function (e) {
  if (e.target.value) {
    document.getElementById('fileInput').value = '';
    document.getElementById('fileNameDisplay').classList.add('hidden');
    document.getElementById('fileNameDisplay').textContent = '';
  }
});

// Save buttons event listeners
document.getElementById('saveJsonBtn').addEventListener('click', function () {
  const t = translations[currentLang];
  const timestamp = getTimestamp();
  const filename = `OCR_Data_${timestamp}.json`;
  const content = JSON.stringify(generatedJson, null, 2);
  downloadFile(content, filename, 'application/json');
  showAlert(t.saved_success, 'success');
});

document.getElementById('saveCsvBtn').addEventListener('click', function () {
  const t = translations[currentLang];
  const timestamp = getTimestamp();
  const filename = `OCR_Data_${timestamp}.csv`;
  const content = convertToCSV(generatedJson);
  downloadFile(content, filename, 'text/csv');
  showAlert(t.saved_success, 'success');
});

document.getElementById('copyBtn').addEventListener('click', function () {
  const t = translations[currentLang];
  const content = JSON.stringify(generatedJson, null, 2);
  navigator.clipboard
    .writeText(content)
    .then(() => {
      showAlert(t.copied_success, 'success');
    })
    .catch((err) => {
      console.error('Failed to copy:', err);
      showAlert(t.error_message, 'error');
    });
});

// Initialize with default language (Arabic)
switchLanguage('ar');

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   Akramul islam | Doctor Utpol | Portfolio Data
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Main JavaScript
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const menuBtn     = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
// Scope nav lookup to the fixed header so the overlay's inner <nav> is ignored.
const menuNav     = menuBtn?.closest('.site-nav') || document.querySelector('.site-nav');

const LANGUAGE_STORAGE_KEY = 'doctor-utpol-language';
const LANGUAGE_OPTIONS = ['en', 'bn'];
const TRANSLATIONS = {
  en: {
    langModalTitle: 'আপনার ভাষা নির্বাচন করুন',
    langModalDesc: 'Select your preferred language to continue browsing the website.',
    langModalNote: 'Your choice will be remembered for future visits.',
    langOptionEnglish: 'English',
    langOptionBangla: 'বাংলা (Bangla)',
    navHome: 'Home',
    navServices: 'Services',
    navJourney: 'Care Journey',
    navPractice: 'Practice',
    navFaq: 'FAQ',
    navBook: 'Book',
    heroTitlePrefix: 'Hi, I&rsquo;m',
    heroSub: 'My commitment is to provide safe, compassionate, and high-quality medical care for every child and family through accurate diagnosis, clear guidance, and dedicated treatment.',
    heroCta: '📞 Contact Now',
    heroTrustPrefix: 'Trusted by',
    heroTrustSuffix: 'patients and families',
    chamberInfoTitle: '🏥 Chamber Information',
    chamberSectionTitle: '🏥 Chamber',
    chamberName: 'Al-Araf Medical Center',
    chamberAddressLabel: '📍 Address',
    chamberAddressLine1: 'Beside the Santahar Microcar Stand,',
    chamberAddressLine2: 'Next to Dental Care,',
    chamberAddressLine3: 'Santahar Pourashava, Bogura, Bangladesh',
    chamberPlusCodeLabel: 'Plus Code:',
    chamberVisitingHoursLabel: '🕒 Visiting Hours',
    chamberVisitingHoursLine1: 'Saturday – Thursday',
    chamberVisitingHoursLine2: '8:00 AM – 9:00 PM',
    chamberAppointmentLabel: '📞 Appointment',
    chamberMapLabel: '🗺️ Google Maps',
    chamberMapLinkLabel: 'View Location',
    whyTag: 'Why Patients Choose Me',
    whyTitleLine1: 'Compassionate Care',
    whyTitleLine2: 'You Can Trust',
    whyDesc: 'Quality healthcare is about more than treating illness—it’s about listening, understanding, and providing the right care with compassion. My goal is to ensure every patient feels informed, comfortable, and confident throughout their healthcare journey.',
    whyItem1: 'Compassionate, patient-centered care',
    whyItem2: 'Accurate diagnosis and personalized treatment',
    whyItem3: 'Clear communication and medical guidance',
    whyItem4: 'Modern, evidence-based healthcare',
    whyItem5: 'Ongoing support and follow-up care',
    whyItem6: 'Respectful care for individuals and families',
    servicesTitle: 'My Services',
    servicePrimaryCare: 'General Consultation',
    serviceGeneralConsultation: 'General Consultation',
    serviceGeneralDesc: 'Personalized medical consultation for common health concerns, wellness guidance, and treatment recommendations.',
    servicePrevention: 'Preventive Healthcare',
    servicePreventiveCare: 'Preventive Healthcare',
    servicePreventiveDesc: 'Stay healthy with regular check-ups, health screenings, and preventive care designed to detect problems early.',
    serviceLongTermSupport: 'Chronic Disease Management',
    serviceChronicCare: 'Chronic Disease Management',
    serviceChronicDesc: 'Comprehensive care, treatment planning, medication review, and regular follow-up for long-term health conditions.',
    serviceFamilyCare: 'Family Healthcare',
    serviceFamilySupport: 'Family Healthcare',
    serviceFamilyDesc: 'Compassionate and personalized healthcare services for individuals and families of all ages.',
    serviceBookVisit: '📞 Contact Now',
    step01Label: 'Step 01',
    step01Title: 'Consultation',
    step01Desc: 'Every visit begins by listening carefully to your concerns, understanding your medical history, and discussing your healthcare goals.',
    step02Label: 'Step 02',
    step02Title: 'Assessment',
    step02Desc: 'A thorough evaluation is performed to identify your condition, assess potential risks, and determine the most appropriate course of care.',
    step03Label: 'Step 03',
    step03Title: 'Personalized Treatment Plan',
    step03Desc: 'A tailored treatment plan is developed, including medication guidance, lifestyle recommendations, and clear next steps for your recovery.',
    step04Label: 'Step 04',
    step04Title: 'Follow-Up Care',
    step04Desc: 'Your progress is monitored through regular follow-up appointments, allowing adjustments to your treatment whenever necessary.',
    step05Label: 'Step 05',
    step05Title: 'Ongoing Support',
    step05Desc: 'Our commitment continues beyond your appointment, providing ongoing guidance and support to help you maintain better health with confidence.',
    practiceTag: 'My Practice',
    practiceTitleLine1: 'Care Areas',
    practiceTitleLine2: 'We Support',
    resultsTag: 'Patient Experience',
    resultsTitleLine1: 'Before &amp; After',
    resultsTitleLine2: 'Receiving Care',
    beforeCareLabel: 'Before visiting us',
    beforeCareValue: 'Unclear guidance and delayed care',
    afterCareLabel: 'After receiving care',
    afterCareValue: 'Clear treatment plan and better follow-up',
    faqTag: 'FAQs',
    faqTitleLine1: 'Frequently Asked',
    faqTitleLine2: 'Questions',
    faqQ1: 'How can I book an appointment?',
    faqA1: 'You can book an appointment by calling us, sending a WhatsApp message, or using the online appointment form on this website.',
    faqQ2: 'What are your visiting hours?',
    faqA2: 'The chamber is open Saturday to Thursday, from 8:00 AM to 9:00 PM. Please contact us before visiting in case of schedule changes.',
    faqQ3: 'Where is your chamber located?',
    faqA3: 'Our chamber is located beside the Santahar Microcar Stand, next to Dental Care, Santahar Pourashava, Bogura, Bangladesh.',
    faqQ4: 'Do I need to bring previous medical reports?',
    faqA4: 'Yes. If you have previous prescriptions, test reports, or medical records, please bring them to help us provide the best possible care.',
    faqQ5: 'Do you provide follow-up consultations?',
    faqA5: 'Yes. Follow-up consultations are available to monitor your recovery, review your progress, and adjust treatment if necessary.',
    faqQ6: 'Can I contact the doctor for emergencies?',
    faqA6: 'For medical emergencies, please visit the nearest emergency department immediately. For appointment-related inquiries, you can contact us during chamber hours.',
    contactTag: 'Let\'s Talk Care',
    contactTitleLine1: 'Book Your Visit',
    contactTitleLine2: 'With',
    contactTitleLine3: 'Trusted Medical Support',
    contactNameLabel: 'YOUR NAME *',
    contactEmailLabel: 'EMAIL',
    contactPhoneLabel: 'PHONE NUMBER *',
    contactServiceLabel: '',
    contactPreferenceLabel: '',
    contactMessageLabel: 'TELL ME ABOUT YOUR HEALTH CONCERN',
    contactSubmit: 'Send Request',
    whatsappActionLabel: 'Book via WhatsApp',
    callActionLabel: 'Call Now',
    stagesTitle: 'Care Journey',
    stagesIntro: 'A Simple and Patient-Focused Care Process',
    counterLabel: 'Patient Support',
    counterSub: 'For Every Visit',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms &amp; Conditions',
    footerCopyright: 'All Rights Reserved.',
    footerName: 'Dr. Akramul Islam Utpol'
  },
  bn: {
    langModalTitle: 'আপনার ভাষা নির্বাচন করুন',
    langModalDesc: 'ওয়েবসাইট ব্রাউজ করতে আপনার প্রিয় ভাষা নির্বাচন করুন।',
    langModalNote: 'আপনার পছন্দ ভবিষ্যতের ভিজিটের জন্য মনে রাখা হবে।',
    langOptionEnglish: 'ইংরেজি',
    langOptionBangla: 'বাংলা',
    navHome: 'হোম',
    navServices: 'সেবা',
    navJourney: 'সেবার পথ',
    navPractice: 'চর্চা',
    navFaq: 'প্রশ্নোত্তর',
    navBook: 'অ্যাপয়েন্টমেন্ট',
    heroTitlePrefix: 'হ্যালো, আমি',
    heroSub: 'প্রতিটি শিশু ও পরিবারের জন্য নিরাপদ, আন্তরিক এবং মানসম্মত চিকিৎসাসেবা নিশ্চিত করাই আমার অঙ্গীকার। সঠিক রোগ নির্ণয়, স্পষ্ট পরামর্শ এবং যত্নশীল চিকিৎসার মাধ্যমে আপনাদের পাশে থাকতে চাই।',
    heroCta: '📞 এখনই যোগাযোগ করুন',
    heroTrustPrefix: 'বিশ্বাস করেছেন',
    heroTrustSuffix: 'রোগী ও পরিবার',
    chamberInfoTitle: '🏥 চেম্বার তথ্য',
    chamberSectionTitle: '🏥 চেম্বার',
    chamberName: 'আল-আরাফ চিকিৎসালয়',
    chamberAddressLabel: '📍 ঠিকানা',
    chamberAddressLine1: 'সান্তাহার মাইক্রোকার স্ট্যান্ডের পাশে,',
    chamberAddressLine2: 'ডেন্টাল কেয়ারের পাশে,',
    chamberAddressLine3: 'সান্তাহার পৌরসভা, বগুড়া, বাংলাদেশ',
    chamberPlusCodeLabel: 'প্লাস কোড:',
    chamberVisitingHoursLabel: '🕒 রোগী দেখার সময়',
    chamberVisitingHoursLine1: 'শনিবার – বৃহস্পতিবার',
    chamberVisitingHoursLine2: 'সকাল ৮:০০টা – রাত ৯:০০টা',
    chamberAppointmentLabel: '📞 অ্যাপয়েন্টমেন্ট',
    chamberMapLabel: '🗺️ গুগল ম্যাপ',
    chamberMapLinkLabel: 'লোকেশন দেখুন',
    whyTag: 'কেন রোগীরা আমাকে বেছে নেন',
    whyTitleLine1: 'আন্তরিক সেবা',
    whyTitleLine2: 'নির্ভরযোগ্য চিকিৎসা',
    whyDesc: 'ভালো চিকিৎসা শুধু রোগের চিকিৎসার মধ্যেই সীমাবদ্ধ নয়; এটি রোগীর কথা মনোযোগ দিয়ে শোনা, সঠিকভাবে বোঝা এবং আন্তরিকতার সঙ্গে সর্বোত্তম চিকিৎসাসেবা প্রদান করার একটি অঙ্গীকার। প্রতিটি রোগী যেন চিকিৎসার প্রতিটি ধাপে স্বস্তি, আস্থা এবং সঠিক দিকনির্দেশনা পান—সেই লক্ষ্যেই আমি কাজ করি।',
    whyItem1: 'রোগীকেন্দ্রিক আন্তরিক চিকিৎসাসেবা',
    whyItem2: 'সঠিক রোগ নির্ণয় ও ব্যক্তিগত চিকিৎসা পরিকল্পনা',
    whyItem3: 'সহজ ও স্পষ্ট চিকিৎসা পরামর্শ',
    whyItem4: 'আধুনিক ও প্রমাণভিত্তিক চিকিৎসা',
    whyItem5: 'নিয়মিত ফলো-আপ ও প্রয়োজনীয় সহায়তা',
    whyItem6: 'প্রতিটি রোগী ও পরিবারের প্রতি সম্মানজনক আচরণ',
    servicesTitle: 'আমার সেবাসমূহ',
    servicePrimaryCare: 'সাধারণ চিকিৎসা ও পরামর্শ',
    serviceGeneralConsultation: 'সাধারণ চিকিৎসা ও পরামর্শ',
    serviceGeneralDesc: 'সাধারণ স্বাস্থ্য সমস্যা, শারীরিক অসুস্থতা এবং সুস্থ জীবনযাপনের জন্য ব্যক্তিগত পরামর্শ ও চিকিৎসাসেবা।',
    servicePrevention: 'স্বাস্থ্য পরীক্ষা ও প্রতিরোধমূলক সেবা',
    servicePreventiveCare: 'স্বাস্থ্য পরীক্ষা ও প্রতিরোধমূলক সেবা',
    servicePreventiveDesc: 'নিয়মিত স্বাস্থ্য পরীক্ষা, প্রয়োজনীয় স্ক্রিনিং এবং সঠিক পরামর্শের মাধ্যমে রোগ প্রতিরোধে সহায়তা করি।',
    serviceLongTermSupport: 'দীর্ঘমেয়াদি রোগের পরিচর্যা',
    serviceChronicCare: 'দীর্ঘমেয়াদি রোগের পরিচর্যা',
    serviceChronicDesc: 'ডায়াবেটিস, উচ্চ রক্তচাপ, হাঁপানি ও অন্যান্য দীর্ঘমেয়াদি রোগের নিয়মিত পর্যবেক্ষণ, চিকিৎসা পরিকল্পনা এবং ফলো-আপ সেবা।',
    serviceFamilyCare: 'পারিবারিক স্বাস্থ্যসেবা',
    serviceFamilySupport: 'পারিবারিক স্বাস্থ্যসেবা',
    serviceFamilyDesc: 'পরিবারের প্রতিটি সদস্যের জন্য আন্তরিক, নির্ভরযোগ্য এবং ব্যক্তিগত স্বাস্থ্যসেবা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।',
    serviceBookVisit: '📞 এখনই যোগাযোগ করুন',
    step01Label: 'ধাপ ০১',
    step01Title: 'পরামর্শ গ্রহণ',
    step01Desc: 'প্রথমে আপনার শারীরিক সমস্যা, চিকিৎসার ইতিহাস এবং উদ্বেগ মনোযোগ দিয়ে শুনে বিস্তারিতভাবে মূল্যায়ন করা হয়।',
    step02Label: 'ধাপ ০২',
    step02Title: 'স্বাস্থ্য মূল্যায়ন',
    step02Desc: 'প্রয়োজনীয় পরীক্ষা-নিরীক্ষা ও শারীরিক মূল্যায়নের মাধ্যমে সমস্যার কারণ নির্ণয় করে সর্বোত্তম চিকিৎসার পরিকল্পনা করা হয়।',
    step03Label: 'ধাপ ০৩',
    step03Title: 'চিকিৎসা পরিকল্পনা',
    step03Desc: 'আপনার শারীরিক অবস্থার ভিত্তিতে ওষুধ, জীবনযাপনের পরামর্শ এবং প্রয়োজনীয় চিকিৎসা পরিকল্পনা নির্ধারণ করা হয়।',
    step04Label: 'ধাপ ০৪',
    step04Title: 'ফলো-আপ সেবা',
    step04Desc: 'চিকিৎসার অগ্রগতি পর্যবেক্ষণ, প্রয়োজনে চিকিৎসা পরিকল্পনা পরিবর্তন এবং দ্রুত সুস্থতা নিশ্চিত করতে নিয়মিত ফলো-আপ প্রদান করা হয়।',
    step05Label: 'ধাপ ০৫',
    step05Title: 'দীর্ঘমেয়াদি সহায়তা',
    step05Desc: 'সুস্থতা ধরে রাখতে এবং ভবিষ্যতের স্বাস্থ্যঝুঁকি কমাতে প্রয়োজনীয় পরামর্শ ও ধারাবাহিক চিকিৎসা সহায়তা প্রদান করা হয়।',
    practiceTag: 'আমার প্র্যাকটিস',
    practiceTitleLine1: 'যেসব ক্ষেত্রেই',
    practiceTitleLine2: 'আমি সহায়তা করি',
    resultsTag: 'রোগী অভিজ্ঞতা',
    resultsTitleLine1: 'যত্নের আগে',
    resultsTitleLine2: 'এবং পরে',
    beforeCareLabel: 'যত্ন নেওয়ার আগে',
    beforeCareValue: 'অস্পষ্ট নির্দেশনা আর দেরি হওয়া সেবা',
    afterCareLabel: 'যত্ন নেওয়ার পরে',
    afterCareValue: 'স্পষ্ট পরিকল্পনা আর ঘনিষ্ঠ ফলো-আপ',
    faqTag: 'প্রশ্নোত্তর',
    faqTitleLine1: 'প্রায়শই জিজ্ঞাসিত',
    faqTitleLine2: 'প্রশ্ন',
    faqQ1: 'কীভাবে অ্যাপয়েন্টমেন্ট বুক করব?',
    faqA1: 'ফোন, WhatsApp অথবা এই ওয়েবসাইটের অনলাইন অ্যাপয়েন্টমেন্ট ফর্মের মাধ্যমে সহজেই অ্যাপয়েন্টমেন্ট বুক করতে পারবেন।',
    faqQ2: 'রোগী দেখার সময় কখন?',
    faqA2: 'চেম্বার শনিবার থেকে বৃহস্পতিবার, সকাল ৮:০০টা থেকে রাত ৯:০০টা পর্যন্ত খোলা থাকে। বিশেষ কারণে সময় পরিবর্তন হলে আগে থেকে যোগাযোগ করার অনুরোধ করা হচ্ছে।',
    faqQ3: 'চেম্বার কোথায় অবস্থিত?',
    faqA3: 'চেম্বারটি সান্তাহার মাইক্রোকার স্ট্যান্ডের পাশে, ডেন্টাল কেয়ারের পাশে, সান্তাহার পৌরসভা, বগুড়ায় অবস্থিত।',
    faqQ4: 'আগের প্রেসক্রিপশন বা রিপোর্ট নিয়ে আসতে হবে কি?',
    faqA4: 'জি। আগের প্রেসক্রিপশন, পরীক্ষা-নিরীক্ষার রিপোর্ট বা অন্যান্য চিকিৎসা নথি সঙ্গে আনলে সঠিকভাবে চিকিৎসা দিতে সুবিধা হয়।',
    faqQ5: 'ফলো-আপ সেবা কি পাওয়া যায়?',
    faqA5: 'জি। প্রয়োজন অনুযায়ী ফলো-আপের মাধ্যমে চিকিৎসার অগ্রগতি পর্যবেক্ষণ করা হয় এবং প্রয়োজনে চিকিৎসা পরিকল্পনায় পরিবর্তন আনা হয়।',
    faqQ6: 'জরুরি প্রয়োজনে কী করবেন?',
    faqA6: 'জরুরি চিকিৎসার প্রয়োজন হলে নিকটস্থ হাসপাতালের জরুরি বিভাগে দ্রুত যোগাযোগ করুন। অ্যাপয়েন্টমেন্ট বা সাধারণ তথ্যের জন্য চেম্বারের নির্ধারিত সময়ে যোগাযোগ করতে পারেন।',
    contactTag: 'চলুন কথা বলি',
    contactTitleLine1: 'আপনার ভিজিট নির্ধারণ করুন',
    contactTitleLine2: 'বিশ্বস্ত',
    contactTitleLine3: 'চিকিৎসা সেবার সঙ্গে',
    contactNameLabel: 'আপনার নাম *',
    contactEmailLabel: 'ইমেইল',
    contactPhoneLabel: 'ফোন নম্বর *',
    contactServiceLabel: '',
    contactPreferenceLabel: '',
    contactMessageLabel: 'আপনার স্বাস্থ্য সমস্যা বা প্রশ্ন লিখুন',
    contactSubmit: 'অনুরোধ পাঠান',
    whatsappActionLabel: 'WhatsApp-এ যোগাযোগ করুন',
    callActionLabel: 'এখনই কল করুন',
    stagesTitle: 'সেবার যাত্রা',
    stagesIntro: 'আপনার চিকিৎসা যাত্রার প্রতিটি ধাপে পাশে আছি',
    counterLabel: 'রোগী সহায়তা',
    counterSub: 'প্রতিটি ভিজিটে',
    footerPrivacy: 'গোপনীয়তা নীতি',
    footerTerms: 'ব্যবহারের শর্তাবলি',
    footerCopyright: 'সর্বস্বত্ব সংরক্ষিত।',
    footerName: 'ডাঃ আকরামুল ইসলাম '
  }
};

let currentLanguage = 'en';

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return LANGUAGE_OPTIONS.includes(stored) ? stored : 'en';
  } catch (error) {
    return 'en';
  }
}

function applyLanguage(lang, persist = true) {
  const effectiveLang = LANGUAGE_OPTIONS.includes(lang) ? lang : 'en';
  currentLanguage = effectiveLang;
  document.documentElement.lang = effectiveLang === 'bn' ? 'bn' : 'en';
  document.documentElement.setAttribute('data-lang', effectiveLang);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const value = TRANSLATIONS[effectiveLang][key];
    if (value) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.lang-switch-btn').forEach(button => {
    button.classList.toggle('is-active', button.dataset.langSwitch === effectiveLang);
  });

  document.querySelectorAll('.lang-option').forEach(button => {
    button.classList.toggle('is-active', button.dataset.lang === effectiveLang);
  });

  const titleEl = document.querySelector('title');
  if (titleEl) {
    titleEl.textContent = effectiveLang === 'bn'
      ? 'ডাঃ আকরামুল ইসলাম  | সহানুভূতিশীল চিকিৎসা সেবা'
      : 'Dr. Akramul Islam Utpol | Compassionate Medical Care';
  }

  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, effectiveLang);
    } catch (error) {
      // Ignore storage failures.
    }
  }
}

function showLanguageModal() {
  const modal = document.getElementById('langModal');
  if (!modal) return;
  modal.classList.add('is-open');
  document.body.classList.add('lang-modal-open');
}

function hideLanguageModal() {
  const modal = document.getElementById('langModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  document.body.classList.remove('lang-modal-open');
}

function initLanguageSystem() {
  const modal = document.getElementById('langModal');
  const storedLanguage = getStoredLanguage();
  const shouldShowModal = !storedLanguage || storedLanguage === 'en' && !localStorage.getItem(LANGUAGE_STORAGE_KEY);

  applyLanguage(storedLanguage, false);

  document.querySelectorAll('.lang-option').forEach(button => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.lang || 'en';
      applyLanguage(nextLang, true);
      hideLanguageModal();
    });
  });

  document.querySelectorAll('.lang-switch-btn').forEach(button => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.langSwitch || 'en';
      applyLanguage(nextLang, true);
    });
  });

  if (modal && shouldShowModal) {
    showLanguageModal();
  } else {
    hideLanguageModal();
  }
}

initLanguageSystem();

const SERVICE_THUMB = {
  'talking-head': 'assets/id/Why_DocTime.webp',
  'documentary': 'assets/id/Primary Care.jpg',
  'short-form': 'assets/id/Why_DocTime.webp',
  'map-animation': 'assets/id/Home Diagnostic Service.webp',
};

const DEFAULT_THUMB_ASSETS = [
  'assets/id/Primary Care.jpg',
  'assets/id/Why_DocTime.webp',
  'assets/id/DiagnosticTests.webp',
  'assets/id/Home Diagnostic Service.webp',
  'assets/id/ItServices.webp',
  'assets/id/Become a Corporate Partner.webp',
  'assets/id/Become a Premium Member.webp',
  'assets/id/post_2.png',
  'assets/id/b1noCxMoWLRrjud9WmgjmViaqERGlUaHFhI8qXUG.png',
  'assets/id/bAoQAPWmuc8P1JkM2EfdciYgMIiED3NHAnI6h6Ow.jpg',
  'assets/id/mXMszFwJEvqs4jSOgRmVUTIRVGU2Ehota0pP4ao4.jpg',
  'assets/id/pCDncOqwJWLD1qdcqfxIL6pldGHeHRQW3pMr7gP4.jpg',
  'assets/id/phfgnei6hF8oDVyeSzF2vzghb2tbRqZM49uxYsaG.png',
  'assets/id/post_2.png',
];
const AVAILABLE_THUMB_ASSETS = new Set(DEFAULT_THUMB_ASSETS);

function defaultThumbForId(id) {
  if (!id) return DEFAULT_THUMB_ASSETS[0];
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash += id.charCodeAt(i);
  }
  return DEFAULT_THUMB_ASSETS[hash % DEFAULT_THUMB_ASSETS.length];
}

function safeThumbSrc(src, id) {
  if (!src || !AVAILABLE_THUMB_ASSETS.has(src)) {
    return defaultThumbForId(id);
  }
  return src;
}

function syncMenuOverlayOffset() {
  if (!menuNav || !menuOverlay) return;
  // Align overlay top edge to the current header height (accounts for resize).
  menuOverlay.style.setProperty('--menu-offset', `${Math.ceil(menuNav.getBoundingClientRect().height)}px`);
}

function setMenuState(isOpen) {
  if (!menuBtn || !menuOverlay) return;

  menuBtn.classList.toggle('open', isOpen);
  menuOverlay.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  menuOverlay.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('menu-open', isOpen);

  if (isOpen) {
    syncMenuOverlayOffset();
    // Move focus into the menu so keyboard/screen-reader users can navigate it.
    requestAnimationFrame(() => {
      menuOverlay.scrollTop = 0;
      menuOverlay.querySelector('.menu-link')?.focus();
    });
  } else {
    // Restore focus to the button that opened the menu.
    menuBtn.focus();
  }
}

function closeMenu() {
  setMenuState(false);
}

if (menuBtn && menuOverlay) {
  syncMenuOverlayOffset();
  menuBtn.addEventListener('click', () => setMenuState(!menuOverlay.classList.contains('open')));

  // Scope listeners to the overlay â€” avoids touching unrelated .menu-link elements.
  menuOverlay.querySelectorAll('.menu-link, .menu-cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Only recalculate offset on mobile where the overlay is visible.
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) syncMenuOverlayOffset();
  });

  // Close the menu if the user scrolls while the overlay is open.
  window.addEventListener('scroll', () => {
    if (menuOverlay.classList.contains('open')) {
      closeMenu();
    }
  }, { passive: true });

  menuOverlay.addEventListener('scroll', () => {
    if (menuOverlay.classList.contains('open')) {
      closeMenu();
    }
  }, { passive: true });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMenu();
    closeAllDropdowns();
  }
});

// Note: scroll-to-top arrow removed — no related JS required.

/* â”€â”€ Stars â”€â”€ */
(function () {
  const starsRoot = document.getElementById('stars');
  if (!starsRoot) return;

  for (let i = 0; i < 90; i++) {
    const star = document.createElement('div');
    const size = Math.random() < 0.25 ? 2.5 : 1.5;

    star.className = 'star';
    star.style.cssText = [
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `width:${size}px`,
      `height:${size}px`,
      `animation-duration:${2 + Math.random() * 5}s`,
      `animation-delay:${Math.random() * 5}s`,
      `background:${Math.random() < 0.1 ? '#F5C518' : '#fff'}`,
    ].join(';');

    starsRoot.appendChild(star);
  }
})();

/* â”€â”€ Counter â”€â”€ */
let counterStarted = false;
const counterEl = document.getElementById('counterNum');
const TARGET = 5200000;

function fmtNum(n) {
  return n.toLocaleString('en-US');
}

if (counterEl) {
  const counterObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || counterStarted) return;

    counterStarted = true;

    let current = 0;
    const step = Math.ceil(TARGET / 70);
    const timer = setInterval(() => {
      current = Math.min(current + step, TARGET);
      counterEl.textContent = fmtNum(current);

      if (current >= TARGET) clearInterval(timer);
    }, 28);
  }, { threshold: 0.4 });

  counterObserver.observe(counterEl);
}

/* â”€â”€ Trust Counter â”€â”€ */
let trustCounterStarted = false;
const trustCounterEl = document.getElementById('trustCounter');
const TRUST_TARGET = 25973;
const TRUST_DURATION = 4000;

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}

if (trustCounterEl) {
  const trustObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || trustCounterStarted) return;

    trustCounterStarted = true;

    let start = null;
    const step = timestamp => {
      if (!start) start = timestamp;

      const progress = Math.min((timestamp - start) / TRUST_DURATION, 1);
      const current = Math.floor(easeOutQuart(progress) * TRUST_TARGET);

      trustCounterEl.textContent = `${current}`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        trustCounterEl.textContent = `${TRUST_TARGET}`;
      }
    };

    window.requestAnimationFrame(step);
    trustObserver.disconnect();
  }, { threshold: 0.1 });

  trustObserver.observe(trustCounterEl);
}

/* â”€â”€ Chart line animation â”€â”€ */
const redPts = '0,65 30,28 60,55 90,22 120,52 150,20 180,50 210,24 240,58 270,22 300,45';
const greenPts = '0,55 40,42 80,46 120,30 160,34 200,20 240,22 280,16 300,18';

function animateLine(lineId, fillId, pts) {
  const line = document.getElementById(lineId);
  const fill = document.getElementById(fillId);
  if (!line || !fill) return;

  line.setAttribute('points', pts);
  fill.setAttribute('points', `${pts} 300,80 0,80`);

  const length = line.getTotalLength ? line.getTotalLength() : 900;
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;

  requestAnimationFrame(() => {
    line.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)';
    line.style.strokeDashoffset = '0';
  });
}

const ctrSection = document.querySelector('.ctr-section');
if (ctrSection) {
  const chartObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    window.setTimeout(() => {
      animateLine('redLine', 'redFill', redPts);
      animateLine('greenLine', 'greenFill', greenPts);
    }, 200);

    chartObserver.disconnect();
  }, { threshold: 0.3 });

  chartObserver.observe(ctrSection);
}

/* â”€â”€ Stages wave animation on scroll â”€â”€ */
const stagesEl = document.getElementById('stages');
const stagesWave = document.getElementById('swp');

if (stagesEl && stagesWave) {
  const stagesWaveObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    stagesWave.classList.add('animate');
    stagesWaveObserver.disconnect();
  }, { threshold: 0.3 });

  stagesWaveObserver.observe(stagesEl);
}

/* â”€â”€ Stats-hero corner cards: fly-in on scroll + hover straighten â”€â”€ */
const shWrap = document.querySelector('.sh-wrap');

if (shWrap) {
  /* Populate each corner card with a random video from its service category */
  [
    { key: 'talking-head',  corner: 'sh-tl' },
    { key: 'documentary',   corner: 'sh-tr' },
    { key: 'short-form',    corner: 'sh-bl' },
    { key: 'map-animation', corner: 'sh-br' },
  ].forEach(({ key, corner }) => {
    const card = shWrap.querySelector(`.${corner}`);
    const pool = PORTFOLIO.filter(item => item.service === key && item.platform === 'youtube');
    if (!card || !pool.length) return;

    const item = pool[Math.floor(Math.random() * pool.length)];
    const meta = SERVICE_META[key];

    card.href = '#contact';
    const img = card.querySelector('.fcard-img');
    if (img) img.src = item.thumb || SERVICE_THUMB[item.service] || defaultThumbForId(item.id);
  });

  const floatAnimations = {
    'sh-tl': 'sh-floatA 5s ease-in-out infinite',
    'sh-tr': 'sh-floatB 4.5s ease-in-out infinite',
    'sh-bl': 'sh-floatC 5.5s ease-in-out infinite',
    'sh-br': 'sh-floatD 4.8s ease-in-out infinite',
  };

  const cardRotations = {
    'sh-tl': '-9deg',
    'sh-tr': '7deg',
    'sh-bl': '6deg',
    'sh-br': '-8deg',
  };

  function resumeFloatingCard(card, key) {
    // Keep the entered card visible while restarting the idle float loop.
    card.style.opacity = '1';
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = floatAnimations[key];
    card.style.transform = '';
  }

  const shWrapObserver = new IntersectionObserver(entries => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      shWrap.classList.add('sh-visible');
      return;
    }

    shWrap.classList.remove('sh-visible');
    shWrap.querySelectorAll('.sh-tl,.sh-tr,.sh-bl,.sh-br').forEach(card => {
      card.classList.remove('sh-entered');
      card.style.animation = '';
      card.style.transform = '';
      card.style.opacity = '';
    });
  }, { threshold: 0.15 });

  shWrapObserver.observe(shWrap);

  shWrap.querySelectorAll('.sh-tl,.sh-tr,.sh-bl,.sh-br').forEach(card => {
    const key = ['sh-tl', 'sh-tr', 'sh-bl', 'sh-br'].find(cls => card.classList.contains(cls));
    if (!key) return;

    card.addEventListener('animationend', event => {
      if (event.animationName.startsWith('sh-entry')) {
        card.classList.add('sh-entered');
      }
    });

    card.addEventListener('mouseenter', () => {
      if (!card.classList.contains('sh-entered')) return;

      clearTimeout(card._leaveTimer);
      card.style.animation = 'none';
      card.style.opacity = '1';
      card.style.transform = 'rotate(0deg)';
    });

    card.addEventListener('mouseleave', () => {
      if (!card.classList.contains('sh-entered')) return;

      card.style.transform = `rotate(${cardRotations[key]})`;
      card._leaveTimer = setTimeout(() => {
        resumeFloatingCard(card, key);
      }, 460);
    });
  });
}

/* â”€â”€ Custom Dropdowns â”€â”€ */
function closeAllDropdowns() {
  document.querySelectorAll('.cdd').forEach(dropdown => {
    dropdown.classList.remove('open');
    dropdown.setAttribute('aria-expanded', 'false');
  });
}

function toggleDd(id) {
  const dropdown = document.getElementById(id);
  if (!dropdown) return;

  const isOpen = dropdown.classList.contains('open');
  closeAllDropdowns();

  if (!isOpen) {
    dropdown.classList.add('open');
    dropdown.setAttribute('aria-expanded', 'true');
  }
}

function selectDd(id, value, icon, meta = {}) {
  const dropdown = document.getElementById(id);
  const valueEl = document.getElementById(`${id}-val`);
  if (!dropdown || !valueEl) return;

  const displayValue = id === 'dd-country'
    ? (value.match(/\(([^)]+)\)/)?.[1] || 'Intl')
    : value;
  const displayText = icon ? `${icon} ${displayValue}` : displayValue;
  valueEl.textContent = displayText;
  dropdown.classList.add('selected');
  dropdown.classList.remove('open');
  dropdown.setAttribute('aria-expanded', 'false');
  dropdown.dataset.selectedValue = value;
  if (meta.country) dropdown.dataset.selectedCountry = meta.country;
  if (meta.rule) dropdown.dataset.selectedRule = meta.rule;

  dropdown.querySelectorAll('.cdd-opt').forEach(option => {
    option.classList.toggle('active', option.dataset.value === value);
  });

  clearDropdownError(id, `${id}-err`);
  if (id === 'dd-country') updateWhatsappFieldForCountry();
}

function isActivationKey(event) {
  return event.key === 'Enter' || event.key === ' ';
}

function buildCountryDropdown() {
  const menu = document.getElementById('dd-country-menu');
  const dropdown = document.getElementById('dd-country');
  if (!menu || !dropdown) return;

  // Search input â€” sticky at top of menu
  const searchWrap = document.createElement('div');
  searchWrap.className = 'cdd-search-wrap';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'cdd-search-input';
  searchInput.id = 'dd-country-search';
  searchInput.placeholder = 'Search country\u2026';
  searchInput.autocomplete = 'off';
  searchInput.setAttribute('aria-label', 'Search countries');
  searchWrap.appendChild(searchInput);
  menu.appendChild(searchWrap);

  function makeOpt(country) {
    const label = `${country.name} (${country.dial})`;
    const opt = document.createElement('div');
    opt.className = 'cdd-opt';
    opt.setAttribute('role', 'option');
    opt.dataset.dropdownId = 'dd-country';
    opt.dataset.value = label;
    opt.dataset.country = country.name;
    if (country.flag) opt.dataset.icon = country.flag;
    if (country.rule) opt.dataset.rule = country.rule;
    opt.setAttribute('tabindex', '0');
    const iconHtml = country.flag ? `<span class="cdd-opt-icon" aria-hidden="true">${country.flag}</span>` : '';
    opt.innerHTML = `${iconHtml}<span>${label}</span>`;
    return opt;
  }

  const prioritySet = new Set(PRIORITY_COUNTRY_NAMES);
  const priorityCountries = PRIORITY_COUNTRY_NAMES
    .map(name => COUNTRY_LIST.find(c => c.name === name))
    .filter(Boolean);
  const restCountries = COUNTRY_LIST.filter(c => !prioritySet.has(c.name));

  priorityCountries.forEach(c => menu.appendChild(makeOpt(c)));

  const divider = document.createElement('div');
  divider.className = 'cdd-divider';
  menu.appendChild(divider);

  restCountries.forEach(c => menu.appendChild(makeOpt(c)));

  function filterCountryOptions(q) {
    const lower = q.toLowerCase();
    menu.querySelectorAll('.cdd-opt').forEach(opt => {
      opt.style.display = opt.textContent.toLowerCase().includes(lower) ? '' : 'none';
    });
    divider.style.display = q ? 'none' : '';
  }

  searchInput.addEventListener('input', () => filterCountryOptions(searchInput.value));
  // Prevent search input clicks from bubbling to the document close-all handler
  searchInput.addEventListener('click', e => e.stopPropagation());
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllDropdowns();
    e.stopPropagation();
  });

  // Focus search when dropdown opens; reset when it closes
  new MutationObserver(() => {
    if (dropdown.classList.contains('open')) {
      setTimeout(() => searchInput.focus(), 50);
    } else {
      searchInput.value = '';
      filterCountryOptions('');
    }
  }).observe(dropdown, { attributes: true, attributeFilter: ['class'] });
}

buildCountryDropdown();

function setDefaultCountrySelection() {
  const dropdown = document.getElementById('dd-country');
  if (!dropdown) return;

  const bangladeshOption = dropdown.querySelector('.cdd-opt[data-value="Bangladesh (+880)"]');
  if (!bangladeshOption) return;

  selectDd('dd-country', bangladeshOption.dataset.value, bangladeshOption.dataset.icon || '🇧🇩', {
    country: bangladeshOption.dataset.country || 'Bangladesh',
    rule: 'bd',
  });
}

document.querySelectorAll('[data-dropdown-trigger]').forEach(trigger => {
  const id = trigger.dataset.dropdownTrigger;
  if (!id) return;

  trigger.addEventListener('click', () => toggleDd(id));
  trigger.addEventListener('keydown', event => {
    if (isActivationKey(event)) {
      event.preventDefault();
      toggleDd(id);
    }
  });
});

document.querySelectorAll('.cdd-opt[data-dropdown-id]').forEach(option => {
  const { dropdownId, value } = option.dataset;
  let icon = option.dataset.icon || '';
  if (!dropdownId || !value) return;

  const selectOption = () => selectDd(dropdownId, value, icon, option.dataset);

  option.addEventListener('click', selectOption);
  option.addEventListener('keydown', event => {
    if (!isActivationKey(event)) return;
    event.preventDefault();
    selectOption();
  });
});

document.addEventListener('click', event => {
  if (!event.target.closest('.cdd')) {
    closeAllDropdowns();
  }
});

/* â”€â”€ Contact form â”€â”€ */
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const PHONE_RULES = {
  bd: {
    label: 'Bangladesh',
    placeholder: '+880 ** *** ****',
    help: 'Enter 11 digits starting with 01. Example: 01712345678',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('880')) digits = digits.slice(3);
      if (/^01\d{9}$/.test(digits)) return `+880${digits.slice(1)}`;
      if (/^1\d{9}$/.test(digits)) return `+880${digits}`;
      return null;
    },
  },
  usca: {
    label: 'United States / Canada',
    placeholder: '2015550123',
    help: 'Enter 10 digits. Example: 2015550123',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('1') && digits.length === 11) digits = digits.slice(1);
      return /^[2-9]\d{2}[2-9]\d{6}$/.test(digits) ? `+1${digits}` : null;
    },
  },
  uk: {
    label: 'United Kingdom',
    placeholder: '07123456789',
    help: 'Enter a UK mobile number. Example: 07123456789',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('44')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^7\d{9}$/.test(digits) ? `+44${digits}` : null;
    },
  },
  in: {
    label: 'India',
    placeholder: '09876543210',
    help: 'Enter 10 digits starting with 6-9. Example: 09876543210',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('91')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^[6-9]\d{9}$/.test(digits) ? `+91${digits}` : null;
    },
  },
  pk: {
    label: 'Pakistan',
    placeholder: '03123456789',
    help: 'Enter a mobile number. Example: 03123456789',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('92')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^3\d{9}$/.test(digits) ? `+92${digits}` : null;
    },
  },
  ae: {
    label: 'United Arab Emirates',
    placeholder: '0501234567',
    help: 'Enter a UAE mobile number. Example: 0501234567',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('971')) digits = digits.slice(3);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^5\d{8}$/.test(digits) ? `+971${digits}` : null;
    },
  },
  sa: {
    label: 'Saudi Arabia',
    placeholder: '0512345678',
    help: 'Enter a Saudi mobile number. Example: 0512345678',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('966')) digits = digits.slice(3);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^5\d{8}$/.test(digits) ? `+966${digits}` : null;
    },
  },
  au: {
    label: 'Australia',
    placeholder: '0412345678',
    help: 'Enter an Australian mobile number. Example: 0412345678',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('61')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^4\d{8}$/.test(digits) ? `+61${digits}` : null;
    },
  },
  nz: {
    label: 'New Zealand',
    placeholder: '0211234567',
    help: 'Enter NZ mobile number starting with 02. Example: 0211234567',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('64')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^2\d{7,9}$/.test(digits) ? `+64${digits}` : null;
    },
  },
  de: {
    label: 'Germany',
    placeholder: '015112345678',
    help: 'Enter German mobile number starting with 015/016/017. Example: 015112345678',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('49')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^1[5-7]\d{8,10}$/.test(digits) ? `+49${digits}` : null;
    },
  },
  nl: {
    label: 'Netherlands',
    placeholder: '0612345678',
    help: 'Enter Dutch mobile number starting with 06. Example: 0612345678',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('31')) digits = digits.slice(2);
      if (digits.startsWith('0')) digits = digits.slice(1);
      return /^6\d{8}$/.test(digits) ? `+31${digits}` : null;
    },
  },
  sg: {
    label: 'Singapore',
    placeholder: '91234567',
    help: 'Enter Singapore mobile number starting with 8 or 9. Example: 91234567',
    normalize(value) {
      let digits = stripPhoneDigits(value);
      if (digits.startsWith('65')) digits = digits.slice(2);
      return /^[89]\d{7}$/.test(digits) ? `+65${digits}` : null;
    },
  },
  other: {
    label: 'Other International',
    placeholder: '+4915123456789',
    help: 'Enter your full number including the country code.',
    normalize(value) {
      if (!/^\+?[0-9().\s-]+$/.test(value.trim())) return null;
      const digits = stripPhoneDigits(value);
      return /^[1-9]\d{7,14}$/.test(digits) ? `+${digits}` : null;
    },
  },
};

setDefaultCountrySelection();

function stripPhoneDigits(value) {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('00')) digits = digits.slice(2);
  return digits;
}

function getSelectedCountryRule() {
  const dropdown = document.getElementById('dd-country');
  if (!dropdown || typeof PHONE_RULES === 'undefined') return null;

  // Prefer explicit selectedRule if present
  let ruleKey = dropdown.dataset.selectedRule || '';

  // If no ruleKey, try to infer it by matching the selected country name to PHONE_RULES labels
  if (!ruleKey && dropdown.dataset.selectedCountry) {
    const countryName = dropdown.dataset.selectedCountry;
    for (const k in PHONE_RULES) {
      if (PHONE_RULES[k] && PHONE_RULES[k].label === countryName) {
        ruleKey = k;
        break;
      }
    }
  }

  // Fallback to generic 'other' rule
  if (!ruleKey || !PHONE_RULES[ruleKey]) ruleKey = 'other';

  return {
    key: ruleKey,
    label: dropdown.dataset.selectedCountry || PHONE_RULES[ruleKey].label,
    ...PHONE_RULES[ruleKey],
  };
}

function normalizeBangladeshPhone(value) {
  const digits = stripPhoneDigits(value);
  if (/^0\d{10}$/.test(digits)) return `+88${digits.slice(1)}`;
  if (/^880\d{10}$/.test(digits)) return `+${digits}`;
  if (/^\+880\d{10}$/.test(value.replace(/\s+/g, ''))) return value.trim();
  return null;
}

function normalizeWhatsappByCountry(value, ruleKey) {
  const rule = PHONE_RULES[ruleKey];
  if (!rule) return null;

  const normalized = rule.normalize(value.trim());
  if (normalized) return normalized;

  if (ruleKey !== 'bd') {
    return normalizeBangladeshPhone(value);
  }

  return null;
}

function isValidWhatsapp(value, ruleKey) {
  return Boolean(normalizeWhatsappByCountry(value, ruleKey));
}

function setDropdownError(id, errorId, message) {
  const dropdown = document.getElementById(id);
  const error = document.getElementById(errorId);
  if (dropdown) dropdown.classList.add('error');

  if (error) {
    if (message) error.textContent = message;
    error.classList.add('is-visible');
  }
}

function clearDropdownError(id, errorId) {
  const dropdown = document.getElementById(id);
  const error = document.getElementById(errorId);
  if (dropdown) dropdown.classList.remove('error');
  if (error) error.classList.remove('is-visible');
}

function updateWhatsappFieldForCountry() {
  const field = document.getElementById('cf-whatsapp');
  const help = document.getElementById('cf-whatsapp-help');
  const selectedCountry = getSelectedCountryRule();
  if (!field || !help) return;

  if (!selectedCountry) {
    field.placeholder = '+880 ** *** ****';
    help.textContent = '';
    return;
  }

  field.placeholder = selectedCountry.placeholder;
  help.textContent = selectedCountry.help;
}

function setFieldError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (!field) return;

  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');

  if (error) {
    if (message) error.textContent = message;
    error.classList.add('is-visible');
  }
}

function clearFieldError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (!field) return;

  field.classList.remove('error');
  field.removeAttribute('aria-invalid');
  if (error) error.classList.remove('is-visible');
}

function getDropdownValue(id) {
  const dropdown = document.getElementById(id);
  if (!dropdown || !dropdown.classList.contains('selected')) return 'Not selected';
  return dropdown.dataset.selectedValue || 'Not selected';
}

function resetDropdown(id, placeholder) {
  const dropdown = document.getElementById(id);
  const valueEl = document.getElementById(`${id}-val`);
  if (!dropdown || !valueEl) return;

  dropdown.classList.remove('selected', 'open');
  dropdown.setAttribute('aria-expanded', 'false');
  delete dropdown.dataset.selectedValue;
  delete dropdown.dataset.selectedCountry;
  delete dropdown.dataset.selectedRule;
  valueEl.textContent = placeholder;

  dropdown.querySelectorAll('.cdd-opt').forEach(option => option.classList.remove('active'));

  clearDropdownError(id, `${id}-err`);
  if (id === 'dd-country') {
    setDefaultCountrySelection();
  } else {
    updateWhatsappFieldForCountry();
  }
}

function validateContactForm() {
  const name = document.getElementById('cf-name')?.value.trim() || '';
  const whatsapp = document.getElementById('cf-whatsapp')?.value.trim() || '';
  const message = document.getElementById('cf-message')?.value.trim() || '';
  const selectedCountry = getSelectedCountryRule();

  clearFieldError('cf-name', 'cf-name-err');
  clearDropdownError('dd-country', 'dd-country-err');
  clearFieldError('cf-whatsapp', 'cf-whatsapp-err');
  clearFieldError('cf-message', 'cf-message-err');

  const invalidEls = [];

  if (!name) {
    setFieldError('cf-name', 'cf-name-err', 'Your name is required.');
    invalidEls.push(document.getElementById('cf-name'));
  }

  if (!whatsapp) {
    setFieldError('cf-whatsapp', 'cf-whatsapp-err', 'WhatsApp number is required.');
    invalidEls.push(document.getElementById('cf-whatsapp'));
  } else {
    let normalizedPhone = normalizeWhatsappByCountry(whatsapp, selectedCountry.key);
    if (!normalizedPhone) {
      // If no explicit country selection was made, accept Bangladeshi local input too.
      if (selectedCountry.key !== 'bd') {
        normalizedPhone = normalizeWhatsappByCountry(whatsapp, 'bd');
      }
    }
    if (!normalizedPhone) {
      setFieldError('cf-whatsapp', 'cf-whatsapp-err', `Enter a valid ${selectedCountry.label} number.`);
      invalidEls.push(document.getElementById('cf-whatsapp'));
    }
  }

  if (!message) {
    setFieldError('cf-message', 'cf-message-err', 'Please describe your concern.');
    invalidEls.push(document.getElementById('cf-message'));
  }

  if (invalidEls.length) {
    invalidEls[0]?.focus();
    return null;
  }

  const normalizedPhone = selectedCountry.normalize(whatsapp);
  return { name, phone: normalizedPhone || whatsapp, message, selectedCountry };
}

function buildWhatsAppMessage({ name, phone, message }) {
  if (currentLanguage === 'bn') {
    return `আসসালামু আলাইকুম ডাক্তার,\n\nআমি একটি অ্যাপয়েন্টমেন্ট নিতে চাই।\n\nনাম:\n${name}\n\nমোবাইল নম্বর:\n${phone}\n\nসমস্যার বিবরণ:\n${message}\n\nধন্যবাদ।`;
  }

  return `Hello Doctor,\n\nI would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\n\nHealth Concern:\n${message}\n\nThank you.`;
}

function buildWhatsAppUrl(data) {
  const encodedText = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/8801311928892?text=${encodedText}`;
}

function openWhatsAppAction() {
  const data = validateContactForm();
  if (!data) return;

  const url = buildWhatsAppUrl(data);
  const newTab = window.open(url, '_blank', 'noopener,noreferrer');
  if (!newTab) {
    window.location.href = url;
  }
}

function openCallAction() {
  // Call Now should work independently from the form.
  window.location.href = 'tel:+8801311928892';
}

function attachContactActions() {
  const whatsappAction = document.getElementById('whatsappAction');
  if (whatsappAction) {
    whatsappAction.addEventListener('click', openWhatsAppAction);
  }

  const callAction = document.getElementById('callAction');
  if (callAction) {
    callAction.addEventListener('click', openCallAction);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachContactActions);
} else {
  attachContactActions();
}

// Prevent navigation to local policy pages when user requested no redirection
document.addEventListener('click', event => {
  const anchor = event.target.closest && event.target.closest('a');
  if (!anchor) return;
  const href = anchor.getAttribute('href') || '';
  if (href.endsWith('privacy-policy.html') || href.endsWith('terms-and-conditions.html')) {
    event.preventDefault();
    // Intentionally do nothing (no redirect). Developers can hook this to open a modal if desired.
    console.log('Navigation prevented to', href);
  }
});

const nameField = document.getElementById('cf-name');
if (nameField) {
  nameField.addEventListener('input', () => {
    if (nameField.value.trim()) clearFieldError('cf-name', 'cf-name-err');
  });
}

const whatsappField = document.getElementById('cf-whatsapp');
if (whatsappField) {
  whatsappField.addEventListener('input', () => {
    const selectedCountry = getSelectedCountryRule();
    if (
      !whatsappField.value.trim() ||
      (selectedCountry && isValidWhatsapp(whatsappField.value.trim(), selectedCountry.key))
    ) {
      clearFieldError('cf-whatsapp', 'cf-whatsapp-err');
    }
  });
}

const messageField = document.getElementById('cf-message');
if (messageField) {
  messageField.addEventListener('input', () => {
    if (messageField.value.trim()) clearFieldError('cf-message', 'cf-message-err');
  });
}

updateWhatsappFieldForCountry();

/* â”€â”€ FAQ accordion â”€â”€ */
function runTypewriter(p, text) {
  if (p._twTimer) { clearTimeout(p._twTimer); p._twTimer = null; }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    p.textContent = text;
    return;
  }
  p.textContent = '';
  const n = text.length;
  function type(i) {
    p.textContent = text.slice(0, i);
    if (i >= n) { p._twTimer = null; return; }
    const t = n > 1 ? i / (n - 1) : 1;
    p._twTimer = setTimeout(() => type(i + 1), 6 + 22 * t * t);
  }
  type(1);
}

function setFaqState(item, isOpen) {
  if (!item) return;

  const button = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  const p = answer?.querySelector('p');
  if (!button || !answer) return;

  if (p && !p.dataset.fullText) p.dataset.fullText = p.textContent;

  item.classList.toggle('open', isOpen);
  button.setAttribute('aria-expanded', String(isOpen));
  answer.setAttribute('aria-hidden', String(!isOpen));

  if (!p) return;
  if (isOpen) {
    runTypewriter(p, p.dataset.fullText);
  } else {
    if (p._twTimer) { clearTimeout(p._twTimer); p._twTimer = null; }
    p.textContent = p.dataset.fullText ?? p.textContent;
  }
}

function toggleFaq(item) {
  const wasOpen = item?.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(faqItem => setFaqState(faqItem, false));
  if (!wasOpen) setFaqState(item, true);
}

document.querySelectorAll('.faq-q').forEach(button => {
  button.addEventListener('click', () => toggleFaq(button.closest('.faq-item')));
});

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PORTFOLIO â€” Video Player & Grid Builder
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

/* â”€â”€ YouTube title cache (oEmbed, no API key needed) â”€â”€ */
const ytCache = {};

async function fetchYTTitle(id) {
  if (ytCache[id]) return ytCache[id];

  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    );

    if (!response.ok) return null;

    const data = await response.json();
    ytCache[id] = data.title;
    return data.title;
  } catch {
    return null;
  }
}

/* â”€â”€ Stop all playing videos (restore thumbnails) â”€â”€ */
function stopAllVideos() {
  document.querySelectorAll('.pf-card.pf-playing').forEach(card => {
    const thumb = card.querySelector('.pf-thumb');
    if (thumb && card._origHTML !== undefined) {
      thumb.innerHTML = card._origHTML;
    }

    card.classList.remove('pf-playing');
  });
}

/* â”€â”€ Embed video inside card thumbnail area â”€â”€ */
function embedVideo(card, src, allow) {
  const thumb = card.querySelector('.pf-thumb');
  if (!thumb) return;

  card._origHTML = thumb.innerHTML;
  thumb.innerHTML = `<iframe class="pf-frame" src="${src}"
    allow="${allow || 'autoplay'}"
    allowfullscreen
    ></iframe>`;
  card.classList.add('pf-playing');
}

/* â”€â”€ Build service page grid â”€â”€ */
const PF_PAGE_SIZE = 8;

function buildPortfolioGrid(service) {
  if (typeof PORTFOLIO === 'undefined' || PORTFOLIO.length === 0) return;

  const grid = document.getElementById('pf-grid');
  if (!grid) return;

  const pool = service === 'random-core'
    ? [...PORTFOLIO.filter(i => i.service !== 'wedding-video-editing' && i.service !== 'short-form')].sort(() => Math.random() - 0.5)
    : service === 'random-no-short'
    ? [...PORTFOLIO.filter(i => i.service !== 'short-form')].sort(() => Math.random() - 0.5)
    : PORTFOLIO.filter(item => item.service === service);
  if (pool.length === 0) return;

  grid.innerHTML = '';
  document.getElementById('featured-work-load-more')?.remove();

  let shown = 0;

  function renderBatch() {
    const batch = pool.slice(shown, shown + PF_PAGE_SIZE);
    batch.forEach(item => grid.appendChild(makePfCard(item)));
    shown += batch.length;

    const btn = document.getElementById('featured-work-load-more');
    if (btn) btn.hidden = shown >= pool.length;
  }

  if (pool.length > PF_PAGE_SIZE) {
    const btn = document.createElement('button');
    btn.id        = 'featured-work-load-more';
    btn.className = 'featured-work-load-more';
    btn.textContent = 'Load More';
    grid.insertAdjacentElement('afterend', btn);
    btn.addEventListener('click', renderBatch);
  }

  // Render enough batches to include the hash-targeted video (may be beyond page 1)
  const hashId    = window.location.hash.slice(1);
  const hashIndex = hashId ? pool.findIndex(item => item.id === hashId) : -1;

  do {
    renderBatch();
  } while (hashIndex >= shown && shown < pool.length);

  scrollToHashVideo();
}

/* -- Hero card portfolio slider -- */
function initHeroPortfolioSlider() {
  if (typeof PORTFOLIO === 'undefined' || PORTFOLIO.length === 0) return;

  document.querySelectorAll('[data-hero-portfolio-slider]').forEach(slider => {
    const service = slider.dataset.heroPortfolioSlider;
    const portfolioItems = PORTFOLIO.filter(item => item.service === service && item.platform === 'youtube');
    if (portfolioItems.length < 2) return;

    const trigger = slider.querySelector('.service-profile-media-link');
    const currentImg = slider.querySelector('[data-hero-slide-current]');
    const nextImg = slider.querySelector('[data-hero-slide-next]');
    const prevBtn = slider.querySelector('[data-hero-slide-prev]');
    const nextBtn = slider.querySelector('[data-hero-slide-next-btn]');
    if (!trigger || !currentImg || !nextImg) return;

    // If page sets data-hero-initial-src, prepend it as a virtual static slide (no video).
    const initialSrc = slider.dataset.heroInitialSrc;
    const items = initialSrc
      ? [{ id: null, staticSrc: initialSrc, alt: currentImg.alt }, ...portfolioItems]
      : portfolioItems;

    let index = 0;
    let timer = null;
    let isAnimating = false;

    function thumbUrl(id) {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }

    function fallbackThumbUrl(id) {
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }

    function setImage(img, item, hideFromAT) {
      if (item.staticSrc) {
        img.src = item.staticSrc;
        img.alt = hideFromAT ? '' : (item.alt || '');
        img.onerror = null;
      } else if (item.thumb || SERVICE_THUMB[item.service]) {
        img.src = item.thumb || SERVICE_THUMB[item.service];
        img.alt = hideFromAT ? '' : getPortfolioAltText(item, item.title || '');
        img.onerror = null;
      } else {
        img.src = defaultThumbForId(item.id);
        img.alt = hideFromAT ? '' : getPortfolioAltText(item, item.title || '');
        img.onerror = null;
      }
      img.setAttribute('aria-hidden', String(hideFromAT));
    }

    function syncState(item) {
      const isStatic = !item.id;
      slider.classList.toggle('is-static', isStatic);
      trigger.dataset.videoId = item.id || '';
    }

    setImage(currentImg, items[0], false);
    syncState(items[0]);
    currentImg.style.opacity = '1';
    currentImg.style.transform = 'translateX(0)';
    nextImg.style.opacity = '0';

    function queueNextSlide() {
      timer = window.setInterval(() => showSlide(1), 3800);
    }

    function resetAutoSlide() {
      if (timer) window.clearInterval(timer);
      if (slider.classList.contains('is-playing')) return;
      queueNextSlide();
    }

    function showSlide(direction = 1) {
      if (isAnimating) return;
      isAnimating = true;
      const nextIndex = (index + direction + items.length) % items.length;
      const nextItem = items[nextIndex];
      const isPlaying = slider.classList.contains('is-playing');
      const incomingStart = direction > 0 ? '-100%' : '100%';
      const outgoingEnd = direction > 0 ? '100%' : '-100%';

      if (isPlaying) {
        stopVideo();
      }

      setImage(nextImg, nextItem, false);
      currentImg.className = 'service-profile-image is-active';
      nextImg.className = 'service-profile-image';

      currentImg.style.transition = 'none';
      nextImg.style.transition = 'none';
      currentImg.style.opacity = '1';
      currentImg.style.transform = 'translateX(0)';
      nextImg.style.opacity = '1';
      nextImg.style.transform = `translateX(${incomingStart})`;
      nextImg.offsetHeight;

      currentImg.style.transition = '';
      nextImg.style.transition = '';
      currentImg.style.opacity = '0';
      currentImg.style.transform = `translateX(${outgoingEnd})`;
      nextImg.style.opacity = '1';
      nextImg.style.transform = 'translateX(0)';

      window.setTimeout(() => {
        currentImg.className = 'service-profile-image is-active';
        nextImg.className = 'service-profile-image';
        setImage(currentImg, nextItem, false);
        setImage(nextImg, items[(nextIndex + direction + items.length) % items.length], true);
        currentImg.style.transition = 'none';
        nextImg.style.transition = 'none';
        currentImg.style.opacity = '1';
        currentImg.style.transform = 'translateX(0)';
        nextImg.style.opacity = '0';
        nextImg.style.transform = `translateX(${incomingStart})`;
        nextImg.offsetHeight;
        currentImg.style.transition = '';
        nextImg.style.transition = '';
        syncState(nextItem);
        index = nextIndex;
        isAnimating = false;
      }, 580);
    }

    queueNextSlide();

    prevBtn?.addEventListener('click', event => {
      event.stopPropagation();
      showSlide(-1);
      resetAutoSlide();
    });

    nextBtn?.addEventListener('click', event => {
      event.stopPropagation();
      showSlide(1);
      resetAutoSlide();
    });

    function stopVideo() {
      slider.querySelector('.service-profile-frame')?.remove();
      slider.classList.remove('is-playing');
    }

    function playVideo(videoId) {
      const existingFrame = slider.querySelector('.service-profile-frame');
      const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      if (existingFrame) {
        existingFrame.src = src;
        return;
      }

      if (timer) window.clearInterval(timer);
      slider.classList.add('is-playing');
      slider.insertAdjacentHTML('beforeend', `<iframe class="service-profile-frame" src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
        title="Portfolio video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`);
    }

    trigger.addEventListener('click', () => {
      const videoId = trigger.dataset.videoId;
      if (!videoId) return;
      playVideo(videoId);
    });
  });
}

/* â”€â”€ Deep-link scroll: navigate from homepage thumbnail to exact video on category page â”€â”€ */
function scrollToHashVideo() {
  const id = window.location.hash.slice(1); // strip leading '#'
  if (!id) return;

  const card = document.getElementById(id);
  if (!card) return;

  // rAF lets the grid finish painting before scroll position is calculated
  requestAnimationFrame(() => {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('pf-card--highlighted');
    setTimeout(() => card.classList.remove('pf-card--highlighted'), 2000);
  });
}

function getPortfolioAltText(item, title = '') {
  const meta = SERVICE_META[item.service] || { label: 'Video' };

  if (title) {
    return `${title} - ${meta.label} video edited by Akramul islam`;
  }

  if (item.vertical) {
    return `${meta.label} short-form video thumbnail edited by Akramul islam`;
  }

  return `${meta.label} video thumbnail edited by Akramul islam`;
}

function makePfCard(item) {
  const isYoutube = item.platform === 'youtube';
  const isDrive = item.platform === 'drive';
  const isFacebook = item.platform === 'facebook';
  const thumbClass = item.vertical ? ' pf-thumb-v' : '';
  const defaultAltText = getPortfolioAltText(item, item.title || '');
  const thumbWidth = item.vertical ? 270 : 480;
  const thumbHeight = item.vertical ? 480 : 270;

  const card = document.createElement('div');
  card.className = 'pf-card';
  card.id = item.id; // YouTube ID used as HTML id for deep-link scroll from homepage

  if (isYoutube) {
    const highQualityThumb = `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`;
    const fallbackThumb = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;

    card.innerHTML = `
      <div class="pf-thumb${thumbClass}">
        <img src="${highQualityThumb}" alt="${defaultAltText}" loading="lazy" decoding="async" width="${thumbWidth}" height="${thumbHeight}" onerror="this.src='${fallbackThumb}'">
        <div class="pf-play">â–¶</div>
      </div>
      <div class="pf-info pf-info-hidden">
        <div class="pf-name">${item.title || ''}</div>
      </div>`;

    card.addEventListener('click', () => {
      if (card.classList.contains('pf-playing')) {
        stopAllVideos();
        return;
      }

      stopAllVideos();
      embedVideo(
        card,
        `https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0&modestbranding=1`,
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      );
    });

    const nameEl = card.querySelector('.pf-name');
    const infoEl = card.querySelector('.pf-info');
    const thumbImg = card.querySelector('img');
    if (item.title && infoEl) infoEl.classList.remove('pf-info-hidden');

    fetchYTTitle(item.id).then(title => {
      if (!title || !nameEl || !infoEl) return;
      nameEl.textContent = title;
      infoEl.classList.remove('pf-info-hidden');
      if (thumbImg) thumbImg.alt = getPortfolioAltText(item, title);
    });
  } else if (isDrive) {
    card.innerHTML = `
      <div class="pf-thumb${thumbClass}">
        <div class="pf-click-ph">
          <span class="pf-click-ph-icon">ðŸ“</span>
          <span class="pf-click-ph-txt">Click to Play</span>
        </div>
      </div>
      <div class="pf-info">
        <div class="pf-name">${item.title || 'Drive Video'}</div>
      </div>`;

    card.addEventListener('click', () => {
      if (card.classList.contains('pf-playing')) {
        stopAllVideos();
        return;
      }

      stopAllVideos();
      embedVideo(card, `https://drive.google.com/file/d/${item.id}/preview`, 'autoplay');
    });
  } else if (isFacebook) {
    const encodedUrl = encodeURIComponent(item.url || '');

    card.innerHTML = `
      <div class="pf-thumb${thumbClass}">
        <div class="pf-click-ph">
          <span class="pf-click-ph-icon">â–¶</span>
          <span class="pf-click-ph-txt">Click to Play</span>
        </div>
      </div>
      <div class="pf-info">
        <div class="pf-name">${item.title || 'Facebook Video'}</div>
      </div>`;

    card.addEventListener('click', () => {
      if (card.classList.contains('pf-playing')) {
        stopAllVideos();
        return;
      }

      stopAllVideos();
      embedVideo(
        card,
        `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=0&autoplay=1`,
        'autoplay; clipboard-write; encrypted-media; picture-in-picture'
      );
    });
  }

  return card;
}

/* â”€â”€ Home page marquee: rebuild from portfolio data â”€â”€ */
(function () {
  if (typeof PORTFOLIO === 'undefined' || PORTFOLIO.length === 0) return;

  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  function interleaveByCategory(items) {
    // Group items by service category
    const groups = {};
    items.forEach(item => {
      if (!groups[item.service]) groups[item.service] = [];
      groups[item.service].push(item);
    });

    // Shuffle each category independently (Fisher-Yates)
    Object.values(groups).forEach(group => {
      for (let i = group.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [group[i], group[j]] = [group[j], group[i]];
      }
    });

    // Round-robin: pull one from each category in turn to avoid clustering
    const services = Object.keys(groups);
    const maxLen = Math.max(...services.map(service => groups[service].length));
    const result = [];
    for (let i = 0; i < maxLen; i++) {
      services.forEach(service => {
        if (groups[service][i]) result.push(groups[service][i]);
      });
    }
    return result;
  }

  const allPortfolios = PORTFOLIO;
  const interleaved = interleaveByCategory(allPortfolios);
  // Doubled so the CSS marquee animation loops seamlessly (scrolls exactly 50% then resets)
  const doubled = [...interleaved, ...interleaved];

  track.innerHTML = doubled.map(item => {
    const meta = SERVICE_META[item.service];
    const isYoutube = item.platform === 'youtube';
    const fallbackSrc = DEFAULT_THUMB_ASSETS[0];
    const thumbSrc = safeThumbSrc(item.thumb || SERVICE_THUMB[item.service], item.id);
    const thumb = isYoutube
      ? `<img class="work-thumb-media" src="${thumbSrc}" alt="${getPortfolioAltText(item)}" loading="eager" decoding="async" width="320" height="180" onerror="this.onerror=null;this.src='${fallbackSrc}'">`
      : `<span class="work-thumb-icon" aria-hidden="true">${meta.icon}</span>`;
    const verticalClass = item.vertical ? ' work-thumb-v' : '';
    const serviceClass = ` work-thumb--${item.service}`;

    return `<div class="work-thumb${serviceClass}${verticalClass}">
      <div class="work-thumb-inner">
        ${thumb}
        <div class="work-thumb-overlay"></div>
        <div class="work-thumb-label">${item.label || meta.label}</div>
      </div>
    </div>`;
  }).join('');

  track.setAttribute('aria-busy', 'false');
})();

/* â”€â”€ Service pre-selection via URL param â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Usage: link to /?service=<key>#contact from any service page.
   To add a new service: append an entry to SERVICE_PARAM_MAP below.
   Keys must match the `service` query param value in the CTA href.
   Values must match the exact `data-value` and `data-icon` on the cdd-opt.
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SERVICE_PARAM_MAP = {
  'talking-head':  { value: 'Talking Head Video Editing',              icon: 'ðŸŽ™ï¸' },
  'documentary':   { value: 'Documentary Video Editing',               icon: 'ðŸŽ¬' },
  'short-form':    { value: 'Short Form (TikTok / Reels / Shorts)',    icon: 'ðŸ“±' },
  'map-animation': { value: 'Map Animation & Geopolitical Visuals',    icon: 'ðŸ—ºï¸' },
  'wedding-video-editing': { value: 'Wedding Video Editing Services',  icon: 'ðŸ’' },
};

(function applyServiceParam() {
  const key = new URLSearchParams(window.location.search).get('service');
  if (!key) return;

  const entry = SERVICE_PARAM_MAP[key];
  if (!entry) return;

  selectDd('dd1', entry.value, entry.icon);
})();

/* Scroll-to-top removed per request */
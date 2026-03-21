function setLang(lang) {

  let title = document.getElementById("aboutTitle");
  let a1 = document.getElementById("about1");
  let a2 = document.getElementById("about2");
  let a3 = document.getElementById("about3");
  let a4 = document.getElementById("about4");

  // DEFAULT (English)
  title.textContent = "About My Secret Book";
  a1.textContent = "My Secret Book is not just a website — it’s a personal space where your secrets stay safe.";
  a2.textContent = "Everyone has something they cannot say out loud.";
  a3.textContent = "This website belongs to everyone who trusts it.";
  a4.textContent = "Simple and secure.";

  // Hindi
  if (lang === "hi") {
    title.textContent = "मेरी सीक्रेट बुक के बारे में";
    a1.textContent = "यह आपकी अपनी जगह है जहाँ आपके राज सुरक्षित रहते हैं।";
    a2.textContent = "हर किसी के पास कुछ होता है जो वो नहीं कह पाता।";
    a3.textContent = "यह वेबसाइट सभी की है।";
    a4.textContent = "सुरक्षित और व्यक्तिगत।";
  }

  // Odia
  if (lang === "od") {
    title.textContent = "ମୋ ସିକ୍ରେଟ ବୁକ ବିଷୟରେ";
    a1.textContent = "ଏହା ତୁମର ନିଜସ୍ୱ ସ୍ଥାନ।";
    a2.textContent = "ପ୍ରତ୍ୟେକଙ୍କ ପାଖରେ କିଛି ଅଛି।";
    a3.textContent = "ଏହା ସମସ୍ତଙ୍କର।";
    a4.textContent = "ସୁରକ୍ଷିତ।";
  }

  // Tamil
  if (lang === "ta") {
    title.textContent = "என் ரகசிய புத்தகம் பற்றி";
    a1.textContent = "இது உங்கள் ரகசியங்களுக்கான இடம்.";
    a2.textContent = "ஒவ்வொருவருக்கும் சொல்ல முடியாத விஷயங்கள் உள்ளன.";
    a3.textContent = "இந்த வலைத்தளம் அனைவருக்கும்.";
    a4.textContent = "பாதுகாப்பானது.";
  }

  // Telugu
  if (lang === "te") {
    title.textContent = "నా సీక్రెట్ బుక్ గురించి";
    a1.textContent = "ఇది మీ రహస్యాల కోసం ఒక స్థలం.";
    a2.textContent = "ప్రతి ఒక్కరికి చెప్పలేని విషయాలు ఉంటాయి.";
    a3.textContent = "ఈ వెబ్‌సైట్ అందరిది.";
    a4.textContent = "సురక్షితమైనది.";
  }

  // Marathi
  if (lang === "mr") {
    title.textContent = "माझ्या सिक्रेट बुक बद्दल";
    a1.textContent = "ही तुमच्या गुपितांसाठी जागा आहे.";
    a2.textContent = "प्रत्येकाकडे काहीतरी असतं.";
    a3.textContent = "ही वेबसाइट सगळ्यांची आहे.";
    a4.textContent = "सुरक्षित.";
}
    // BENGALI
if (lang === "bn") {
  title.textContent = "আমার সিক্রেট বুক সম্পর্কে";
  a1.textContent = "এটি আপনার গোপনীয়তার জন্য একটি জায়গা।";
  a2.textContent = "প্রত্যেকের কিছু না কিছু থাকে।";
  a3.textContent = "এই ওয়েবসাইট সবার।";
  a4.textContent = "নিরাপদ।";
}

// GUJARATI
if (lang === "gu") {
  title.textContent = "મારા સિક્રેટ બુક વિશે";
  a1.textContent = "આ તમારી ગુપ્ત વાતો માટેનું સ્થાન છે.";
  a2.textContent = "દરેક પાસે કંઈક હોય છે.";
  a3.textContent = "આ વેબસાઇટ બધાની છે.";
  a4.textContent = "સુરક્ષિત.";
}

// PUNJABI
if (lang === "pa") {
  title.textContent = "ਮੇਰੇ ਸੀਕ੍ਰੇਟ ਬੁੱਕ ਬਾਰੇ";
  a1.textContent = "ਇਹ ਤੁਹਾਡੇ ਰਾਜਾਂ ਲਈ ਜਗ੍ਹਾ ਹੈ।";
  a2.textContent = "ਹਰ ਕਿਸੇ ਕੋਲ ਕੁਝ ਹੁੰਦਾ ਹੈ।";
  a3.textContent = "ਇਹ ਵੈਬਸਾਈਟ ਸਭ ਦੀ ਹੈ।";
  a4.textContent = "ਸੁਰੱਖਿਅਤ।";
}

// KANNADA
if (lang === "kn") {
  title.textContent = "ನನ್ನ ಸೀಕ್ರೆಟ್ ಬುಕ್ ಬಗ್ಗೆ";
  a1.textContent = "ಇದು ನಿಮ್ಮ ರಹಸ್ಯಗಳಿಗಾಗಿ ಒಂದು ಸ್ಥಳ.";
  a2.textContent = "ಪ್ರತಿ ಒಬ್ಬರಿಗೂ ಹೇಳಲಾಗದ ವಿಷಯಗಳಿವೆ.";
  a3.textContent = "ಈ ವೆಬ್‌ಸೈಟ್ ಎಲ್ಲರದು.";
  a4.textContent = "ಸುರಕ್ಷಿತ.";
}

// MALAYALAM
if (lang === "ml") {
  title.textContent = "എന്റെ സീക്രറ്റ് ബുക്ക് കുറിച്ച്";
  a1.textContent = "ഇത് നിങ്ങളുടെ രഹസ്യങ്ങൾക്കായുള്ള സ്ഥലം.";
  a2.textContent = "ഓരോരുത്തർക്കും പറയാൻ കഴിയാത്ത കാര്യങ്ങൾ ഉണ്ട്.";
  a3.textContent = "ഈ വെബ്സൈറ്റ് എല്ലാവർക്കും.";
  a4.textContent = "സുരക്ഷിതം.";
}
  }

}
setLang("en");

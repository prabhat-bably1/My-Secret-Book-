// Page switch
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// About language function
function setLang(lang) {

  // ENGLISH
  if (lang === "en") {
    aboutTitle.textContent = "About My Secret Book";
    about1.textContent = "My Secret Book is not just a website — it’s a personal space where your secrets stay safe and truly yours.";
    about2.textContent = "Everyone has something they cannot say out loud.";
    about3.textContent = "This website does not belong to me alone. Whoever trusts it, owns it.";
    about4.textContent = "Simple, secure, and personal.";
  }

  // HINDI
  else if (lang === "hi") {
    aboutTitle.textContent = "मेरी सीक्रेट बुक के बारे में";
    about1.textContent = "यह सिर्फ एक वेबसाइट नहीं है — यह आपकी अपनी जगह है जहाँ आपके राज सुरक्षित रहते हैं।";
    about2.textContent = "हर किसी के पास कुछ होता है जो वो नहीं कह पाता।";
    about3.textContent = "यह वेबसाइट सिर्फ मेरी नहीं है, जो इसे अपना समझेगा यह उसकी हो जाएगी।";
    about4.textContent = "सुरक्षित और व्यक्तिगत।";
  }

  // ODIA
  else if (lang === "od") {
    aboutTitle.textContent = "ମୋ ସିକ୍ରେଟ ବୁକ ବିଷୟରେ";
    about1.textContent = "ଏହା ତୁମର ନିଜସ୍ୱ ସ୍ଥାନ।";
    about2.textContent = "ପ୍ରତ୍ୟେକଙ୍କ ପାଖରେ କିଛି ରହେ।";
    about3.textContent = "ଏହି ୱେବସାଇଟ୍ ସମସ୍ତଙ୍କର।";
    about4.textContent = "ସରଳ ଏବଂ ସୁରକ୍ଷିତ।";
  }

  // TAMIL
  else if (lang === "ta") {
    aboutTitle.textContent = "என் ரகசிய புத்தகம் பற்றி";
    about1.textContent = "இது உங்கள் ரகசியங்களுக்கு ஒரு இடம்.";
    about2.textContent = "ஒவ்வொருவருக்கும் சொல்ல முடியாத விஷயங்கள் உள்ளன.";
    about3.textContent = "இந்த வலைத்தளம் அனைவருக்கும் சொந்தமானது.";
    about4.textContent = "பாதுகாப்பான மற்றும் தனிப்பட்டது.";
  }

  // TELUGU
  else if (lang === "te") {
    aboutTitle.textContent = "నా సీక్రెట్ బుక్ గురించి";
    about1.textContent = "ఇది మీ రహస్యాల కోసం ఒక స్థలం.";
    about2.textContent = "ప్రతి ఒక్కరికి చెప్పలేని విషయాలు ఉంటాయి.";
    about3.textContent = "ఈ వెబ్‌సైట్ అందరిదీ.";
    about4.textContent = "సురక్షితమైనది.";
  }

  // MARATHI
  else if (lang === "mr") {
    aboutTitle.textContent = "माझ्या सिक्रेट बुक बद्दल";
    about1.textContent = "ही तुमच्या गुपितांसाठी जागा आहे.";
    about2.textContent = "प्रत्येकाकडे काहीतरी असतं.";
    about3.textContent = "ही वेबसाइट सगळ्यांची आहे.";
    about4.textContent = "सुरक्षित आणि वैयक्तिक.";
  }

  // BENGALI
  else if (lang === "bn") {
    aboutTitle.textContent = "আমার সিক্রেট বুক সম্পর্কে";
    about1.textContent = "এটি আপনার গোপনীয়তার জন্য একটি জায়গা।";
    about2.textContent = "প্রত্যেকের কিছু না কিছু থাকে।";
    about3.textContent = "এই ওয়েবসাইট সবার।";
    about4.textContent = "নিরাপদ এবং ব্যক্তিগত।";
  }

  // GUJARATI
  else if (lang === "gu") {
    aboutTitle.textContent = "મારા સિક્રેટ બુક વિશે";
    about1.textContent = "આ તમારી ગુપ્ત વાતો માટેનું સ્થાન છે.";
    about2.textContent = "દરેક પાસે કંઈક હોય છે.";
    about3.textContent = "આ વેબસાઇટ બધાની છે.";
    about4.textContent = "સુરક્ષિત અને વ્યક્તિગત.";
  }

  // PUNJABI
  else if (lang === "pa") {
    aboutTitle.textContent = "ਮੇਰੇ ਸੀਕ੍ਰੇਟ ਬੁੱਕ ਬਾਰੇ";
    about1.textContent = "ਇਹ ਤੁਹਾਡੇ ਰਾਜਾਂ ਲਈ ਜਗ੍ਹਾ ਹੈ।";
    about2.textContent = "ਹਰ ਕਿਸੇ ਕੋਲ ਕੁਝ ਹੁੰਦਾ ਹੈ।";
    about3.textContent = "ਇਹ ਵੈਬਸਾਈਟ ਸਭ ਦੀ ਹੈ।";
    about4.textContent = "ਸੁਰੱਖਿਅਤ ਅਤੇ ਨਿੱਜੀ।";
  }

  // KANNADA
  else if (lang === "kn") {
    aboutTitle.textContent = "ನನ್ನ ಸೀಕ್ರೆಟ್ ಬುಕ್ ಬಗ್ಗೆ";
    about1.textContent = "ಇದು ನಿಮ್ಮ ರಹಸ್ಯಗಳಿಗಾಗಿ ಒಂದು ಸ್ಥಳ.";
    about2.textContent = "ಪ್ರತಿ ಒಬ್ಬರಿಗೂ ಹೇಳಲಾಗದ ವಿಷಯಗಳಿವೆ.";
    about3.textContent = "ಈ ವೆಬ್‌ಸೈಟ್ ಎಲ್ಲರದು.";
    about4.textContent = "ಸುರಕ್ಷಿತ ಮತ್ತು ವೈಯಕ್ತಿಕ.";
  }

  // MALAYALAM
  else if (lang === "ml") {
    aboutTitle.textContent = "എന്റെ സീക്രറ്റ് ബുക്ക് കുറിച്ച്";
    about1.textContent = "ഇത് നിങ്ങളുടെ രഹസ്യങ്ങൾക്കായുള്ള സ്ഥലം.";
    about2.textContent = "ഓരോരുത്തർക്കും പറയാൻ കഴിയാത്ത കാര്യങ്ങൾ ഉണ്ട്.";
    about3.textContent = "ഈ വെബ്സൈറ്റ് എല്ലാവർക്കും.";
    about4.textContent = "സുരക്ഷിതവും സ്വകാര്യവുമാണ്.";
  }

}


setLang("en");
showPage("home");

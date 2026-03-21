function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

function setLang(lang) {

  let title = document.getElementById("aboutTitle");
  let a1 = document.getElementById("about1");
  let a2 = document.getElementById("about2");
  let a3 = document.getElementById("about3");
  let a4 = document.getElementById("about4");

  // ENGLISH
  if (lang === "en") {
    title.textContent = "About My Secret Book";
    a1.textContent = "My Secret Book is not just a website — it’s a personal space where your secrets stay safe and truly yours.";
    a2.textContent = "Everyone has something they cannot say out loud.";
    a3.textContent = "This website does not belong to me alone. Whoever trusts it, owns it.";
    a4.textContent = "Simple, secure, and personal.";
  }

  // HINDI
  else if (lang === "hi") {
    title.textContent = "मेरी सीक्रेट बुक के बारे में";
    a1.textContent = "यह सिर्फ एक वेबसाइट नहीं है — यह आपकी अपनी जगह है जहाँ आपके राज सुरक्षित रहते हैं।";
    a2.textContent = "हर किसी के पास कुछ होता है जो वो नहीं कह पाता।";
    a3.textContent = "यह वेबसाइट सिर्फ मेरी नहीं है, जो इसे अपना समझेगा यह उसकी हो जाएगी।";
    a4.textContent = "सुरक्षित और व्यक्तिगत।";
  }

  // ODIA
  else if (lang === "od") {
    title.textContent = "ମୋ ସିକ୍ରେଟ ବୁକ ବିଷୟରେ";
    a1.textContent = "ଏହା ତୁମର ନିଜସ୍ୱ ସ୍ଥାନ।";
    a2.textContent = "ପ୍ରତ୍ୟେକଙ୍କ ପାଖରେ କିଛି ରହେ।";
    a3.textContent = "ଏହି ୱେବସାଇଟ୍ ସମସ୍ତଙ୍କର।";
    a4.textContent = "ସରଳ ଏବଂ ସୁରକ୍ଷିତ।";
  }

  // TAMIL
  else if (lang === "ta") {
    title.textContent = "என் ரகசிய புத்தகம் பற்றி";
    a1.textContent = "இது உங்கள் ரகசியங்களுக்கு ஒரு இடம்.";
    a2.textContent = "ஒவ்வொருவருக்கும் சொல்ல முடியாத விஷயங்கள் உள்ளன.";
    a3.textContent = "இந்த வலைத்தளம் அனைவருக்கும் சொந்தமானது.";
    a4.textContent = "பாதுகாப்பான மற்றும் தனிப்பட்டது.";
  }

  // TELUGU
  else if (lang === "te") {
    title.textContent = "నా సీక్రెట్ బుక్ గురించి";
    a1.textContent = "ఇది మీ రహస్యాల కోసం ఒక స్థలం.";
    a2.textContent = "ప్రతి ఒక్కరికి చెప్పలేని విషయాలు ఉంటాయి.";
    a3.textContent = "ఈ వెబ్‌సైట్ అందరిదీ.";
    a4.textContent = "సురక్షితమైనది.";
  }

  // MARATHI
  else if (lang === "mr") {
    title.textContent = "माझ्या सिक्रेट बुक बद्दल";
    a1.textContent = "ही तुमच्या गुपितांसाठी जागा आहे.";
    a2.textContent = "प्रत्येकाकडे काहीतरी असतं.";
    a3.textContent = "ही वेबसाइट सगळ्यांची आहे.";
    a4.textContent = "सुरक्षित आणि वैयक्तिक.";
  }

  // BENGALI
  else if (lang === "bn") {
    title.textContent = "আমার সিক্রেট বুক সম্পর্কে";
    a1.textContent = "এটি আপনার গোপনীয়তার জন্য একটি জায়গা।";
    a2.textContent = "প্রত্যেকের কিছু না কিছু থাকে।";
    a3.textContent = "এই ওয়েবসাইট সবার।";
    a4.textContent = "নিরাপদ এবং ব্যক্তিগত।";
  }

}
window.onload = function() {
  setLang("en");
};

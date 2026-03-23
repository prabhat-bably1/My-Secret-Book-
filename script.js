function openBook() {
  document.getElementById("book").classList.toggle("open");
}
<script>
const translations = {
  en: "Welcome to My Secret Book ✨<br>This is your personal space to write thoughts, jokes, shayari and feelings 💛 Stay happy and spread happiness.",

  hi: "My Secret Book में आपका स्वागत है ✨<br>यह आपकी निजी जगह है जहां आप अपने विचार, चुटकुले, शायरी और भावनाएं लिख सकते हैं 💛 खुश रहें और खुशियां फैलाएं।",

  or: "My Secret Book କୁ ସ୍ୱାଗତ ✨<br>ଏହା ଆପଣଙ୍କର ବ୍ୟକ୍ତିଗତ ସ୍ଥାନ, ଯେଉଁଠାରେ ଆପଣ ଭାବନା, କଥା, ଶାୟରୀ ଲେଖି ପାରିବେ 💛 ସଦା ଖୁସି ରୁହନ୍ତୁ।",

  bn: "My Secret Book এ স্বাগতম ✨<br>এটি আপনার ব্যক্তিগত জায়গা যেখানে আপনি আপনার চিন্তা, রসিকতা এবং অনুভূতি লিখতে পারেন 💛 সুখে থাকুন।",

  ta: "My Secret Book இற்கு வரவேற்கிறோம் ✨<br>இது உங்கள் தனிப்பட்ட இடம், உங்கள் எண்ணங்களை பகிரலாம் 💛 மகிழ்ச்சியாக இருங்கள்।",

  te: "My Secret Book కి స్వాగతం ✨<br>ఇది మీ వ్యక్తిగత స్థలం, మీ భావాలను పంచుకోండి 💛 సంతోషంగా ఉండండి।",

  ml: "My Secret Book ലേക്ക് സ്വാഗതം ✨<br>ഇത് നിങ്ങളുടെ സ്വകാര്യ ഇടമാണ് 💛 സന്തോഷത്തോടെ ഇരിക്കുക।",

  kn: "My Secret Book ಗೆ ಸ್ವಾಗತ ✨<br>ಇದು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸ್ಥಳ 💛 ಸಂತೋಷವಾಗಿರಿ।",

  gu: "My Secret Book માં આપનું સ્વાગત છે ✨<br>આ તમારું વ્યક્તિગત સ્થાન છે 💛 ખુશ રહો।",

  pa: "My Secret Book ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ ✨<br>ਇਹ ਤੁਹਾਡੀ ਨਿੱਜੀ ਜਗ੍ਹਾ ਹੈ 💛 ਖੁਸ਼ ਰਹੋ।",

  mr: "My Secret Book मध्ये स्वागत आहे ✨<br>हे तुमचं वैयक्तिक ठिकाण आहे 💛 आनंदी रहा।",

  as: "My Secret Book লৈ স্বাগতম ✨<br>এইটো আপোনাৰ ব্যক্তিগত স্থান 💛 সুখী হওক।",

  ur: "My Secret Book میں خوش آمدید ✨<br>یہ آپ کی ذاتی جگہ ہے 💛 خوش رہیں۔"
};

function changeLang(lang) {
  document.getElementById("about-text").innerHTML = translations[lang];
}
</script>

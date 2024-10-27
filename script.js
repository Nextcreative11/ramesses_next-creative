// عرض رسالة الترحيب اول ما  افتح الصفحة
window.onload = function() {
    const welcomeMessage = "أهلاً بيك! أنا رمسيس الثاني، اسألني أي سؤال.";
    document.getElementById("response").innerText = welcomeMessage;
    speak(welcomeMessage);
};

// أسئلة وأجوبة بالعربي والإنجليزي
const faq = {
    // الأسئلة بالعربية
    "إنت اتولدت إمتى": "اتولدت في سنة 1303 قبل الميلاد.",
    "متى اتولدت": "ولدت عام 1303 قبل الميلاد في تانيس.",
    "الحرب كانت إمتى": "الحروب بتاعتي كانت في القرن التالت عشر قبل الميلاد.",
    "ماتت إمتى": "موتت في سنة 1213 قبل الميلاد.",
    "إنت مين": "أنا رمسيس الثاني، فرعون مصر الأعظم، حكمت مصر لأكثر من 60 عامًا.",
    "ما هي إنجازاتك العسكرية؟": "حققت العديد من الانتصارات، مثل معركة قادش ضد الحيثيين.",
    "ما هي أشهر المعابد التي بنيتها؟": "بنيت معابد كثيرة، أشهرها معبد أبو سمبل.",
    "كيف حافظت على استقرار مصر؟": "عقدت معاهدة سلام مع الحيثيين.",
    "من هم أبناؤك؟": "لدي أكثر من 100 ابن وابنة.",
    "كيف كنت تعامل زوجاتك؟": "كنت أعامل زوجاتي بحب واحترام، خاصة نفرتاري.",
    "ما هي معركة قادش؟": "قادش كانت معركة بيني وبين الحيثيين.",
    
    // الأسئلة بالإنجليزية
    "when were you born?": "I was born in 1303 BCE.",
    "who are you?": "I am Ramesses II, the greatest Pharaoh of Egypt.",
    "when did you die?": "I died in 1213 BCE.",
    "what are your military achievements?": "I achieved victories like the Battle of Kadesh.",
    "what temples did you build?": "The most famous one is the Abu Simbel temple.",
    "how many children did you have?": "I had over 100 sons and daughters."
};

function askQuestion() {
    const question = document.getElementById("userQuestion").value.trim().toLowerCase();
    let response = faq[question] || "عذرًا، مش قادر أجاوب على السؤال ده.";
    document.getElementById("response").innerText = response;
    speak(response); 
}


function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = /[a-zA-Z]/.test(text) ? 'en-US' : 'ar-EG'; 
    window.speechSynthesis.speak(speech);
}


const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ar-EG';


function startListening() {
    recognition.start();
}


recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("userQuestion").value = transcript; 
    askQuestion(); 
};

recognition.onerror = function() {
    document.getElementById("response").innerText = "عذرًا، ما فهمتش اللي قلته.";
};

document.getElementById("voiceButton").addEventListener("click", startListening);

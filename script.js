const savollar = [
  {
    savol: "Sen qaysi gulni yoqtirasan? 🌹",
    javoblar: ["Atirgul 🌹", "Lola 🌷", "Moychechak 🌼", "Boshqa gul 💐"],
    izoh: "Javobing juda chiroyli! 🌸"
  },
  {
    savol: "Qaysi rang senga ko'proq yoqadi? 🎨",
    javoblar: ["Qizil ❤️", "Oq 🤍", "Pushti 💗", "Qora 🖤"],
    izoh: "Ranglar ichida eng chiroylisi — sen tanlaganing 😊"
  },
  {
    savol: "Ideal sayring qayerda bo'lardi? 🌙",
    javoblar: ["Bog'da 🌳", "Dengiz bo'yida 🌊", "Shahar chiroqlari orasida 🌃", "Shinam kafeda ☕"],
    izoh: "Qayer bo'lishidan qat'i nazar, yaxshi xotira qolishi muhim ❤️"
  },
  {
    savol: "Meni qanchalik sevasan? ❤️",
    javoblar: ["Juda-juda ko'p 💖", "So'z bilan aytib bo'lmaydi 🥹", "Har kuni ko'proq 💘", "Cheksiz ♾️"],
    izoh: "Bu savolga javobing men uchun juda qadrli 💌"
  },
  {
    savol: "Men bilan sayr qilarmiding? 🚶‍♀️🌷",
    javoblar: ["Albatta, jonim ❤️", "Ha, mamnuniyat bilan 😊", "Qayerga boramiz? 😄", "Birga bo'lsak bo'ldi 💗"],
    izoh: "Birga o'tkazilgan oddiy vaqt ham go'zal xotiraga aylanishi mumkin ✨"
  },
  {
    savol: "Birga qanday vaqt o'tkazishni istarding? 💞",
    javoblar: ["Uzoq suhbatlashish 🫶", "Sayr qilish 🌳", "Film ko'rish 🎬", "Birga kulish 😄"],
    izoh: "Eng muhimi — bir-birimizni tinglash va hurmat qilish 💗"
  },
  {
    savol: "Seni xursand qilish uchun nima qilsam yoqadi? 🎁",
    javoblar: ["Shirin so'zlar 💌", "Kichik sovg'a 🎁", "Vaqt ajratish ⏳", "Kutilmagan syurpriz 🎉"],
    izoh: "Seni xursand qiladigan narsalarni bilish juda yaxshi 😊"
  },
  {
    savol: "Biz uchun qaysi xotira eng yoqimli bo'lardi? 📸",
    javoblar: ["Birinchi uchrashuv 🌹", "Birga sayr qilish 🌆", "Birga kulgan kunimiz 😄", "Yangi joyga borish 🗺️"],
    izoh: "Oldinda hali ko'plab yaxshi xotiralar bo'lishini tilayman 💖"
  },
  {
    savol: "Kelajakda nimani birga qilishni xohlaysan? 🌟",
    javoblar: ["Ko'p joylarni ko'rish ✈️", "Bir-birimizni qo'llash 🤝", "Maqsadlarga erishish 🌱", "Baxtli kunlarni ko'paytirish 💗"],
    izoh: "Kelajak haqidagi fikrlaringni eshitish juda yoqimli ❤️"
  },
  {
    savol: "Menga aytmoqchi bo'lgan eng shirin gaping qaysi? 💌",
    javoblar: ["Sen men uchun qadrlisan ❤️", "Yonimda bo'l 💗", "Senga ishonaman 🤍", "O'zing bilasan-ku 😊"],
    izoh: "Rahmat, jonim. Javoblaring uchun katta rahmat 💝"
  }
];

const startCard = document.getElementById("startCard");
const quizCard = document.getElementById("quizCard");
const finalCard = document.getElementById("finalCard");
const startBtn = document.getElementById("startBtn");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const counterEl = document.getElementById("counter");
const progressFill = document.getElementById("progressFill");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

let hozirgiSavol = 0;

startBtn.addEventListener("click", () => {
  startCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  savolniChiqar();
});

function savolniChiqar() {
  const savol = savollar[hozirgiSavol];
  questionEl.textContent = savol.savol;
  counterEl.textContent = `Savol ${hozirgiSavol + 1} / ${savollar.length}`;
  progressFill.style.width = `${((hozirgiSavol + 1) / savollar.length) * 100}%`;
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");

  savol.javoblar.forEach((javob) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = javob;

    btn.addEventListener("click", () => {
      answersEl.querySelectorAll("button").forEach((item) => {
        item.classList.remove("selected");
        item.disabled = true;
      });

      btn.classList.add("selected");
      feedbackEl.textContent = savol.izoh;
      nextBtn.classList.remove("hidden");
    });

    answersEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  hozirgiSavol++;

  if (hozirgiSavol < savollar.length) {
    savolniChiqar();
  } else {
    quizCard.classList.add("hidden");
    finalCard.classList.remove("hidden");
  }
});

let kutishBoshlanishi = null;
let soatIntervali = null;

function soatniYangila() {
  if (!kutishBoshlanishi) return;
  const soniya = Math.floor((Date.now() - kutishBoshlanishi) / 1000);
  const soat = String(Math.floor(soniya / 3600)).padStart(2, "0");
  const daqiqa = String(Math.floor((soniya % 3600) / 60)).padStart(2, "0");
  const qoldiq = String(soniya % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${soat}:${daqiqa}:${qoldiq}`;
}

function mushakOt() {
  const belgilar = ["🎆", "🎇", "✨", "💖", "❤️", "🥹", "💗", "🌟", "🎉"];
  for (let i = 0; i < 55; i++) {
    setTimeout(() => {
      const zarrа = document.createElement("span");
      zarrа.className = "firework";
      zarrа.textContent = belgilar[Math.floor(Math.random() * belgilar.length)];
      zarrа.style.left = (15 + Math.random() * 70) + "vw";
      zarrа.style.top = (25 + Math.random() * 50) + "vh";
      zarrа.style.setProperty("--dx", (Math.random() * 260 - 130) + "px");
      zarrа.style.setProperty("--dy", (Math.random() * 280 - 140) + "px");
      document.body.appendChild(zarrа);
      setTimeout(() => zarrа.remove(), 2100);
    }, i * 28);
  }
}

document.getElementById("yesBtn").addEventListener("click", () => {
  const feedback = document.getElementById("finalFeedback");
  feedback.classList.add("yes-message");
  feedback.textContent =
    "🥹❤️ Bu javob meni juda xursand qildi! Eng muhimi, bu qaror sening chin dildan xohishing bo'lsin. 💍";
  document.getElementById("waitingBox").classList.add("hidden");
  if (soatIntervali) {
    clearInterval(soatIntervali);
    soatIntervali = null;
  }
  mushakOt();
});

document.getElementById("thinkBtn").addEventListener("click", () => {
  const feedback = document.getElementById("finalFeedback");
  feedback.classList.remove("yes-message");
  feedback.textContent = "Mayli, jonim. Shoshilmay o'ylab ko'rishing mumkin. Javobingni hurmat qilaman. ❤️";
  const waitingBox = document.getElementById("waitingBox");
  waitingBox.classList.remove("hidden");

  if (!kutishBoshlanishi) {
    kutishBoshlanishi = Date.now();
  }
  soatniYangila();
  if (!soatIntervali) {
    soatIntervali = setInterval(soatniYangila, 1000);
  }
});

document.getElementById("restartBtn").addEventListener("click", () => {
  hozirgiSavol = 0;
  finalCard.classList.add("hidden");
  startCard.classList.remove("hidden");
  document.getElementById("finalFeedback").textContent = "";
  document.getElementById("finalFeedback").classList.remove("yes-message");
  document.getElementById("waitingBox").classList.add("hidden");
  kutishBoshlanishi = null;
  if (soatIntervali) {
    clearInterval(soatIntervali);
    soatIntervali = null;
  }
  document.getElementById("timer").textContent = "00:00:00";
});

// Orqa fonda sekin ko'tariladigan yurakchalar
const heartsBox = document.querySelector(".hearts");

function yurakQosh() {
  const yurak = document.createElement("span");
  yurak.className = "floating-heart";
  yurak.textContent = Math.random() > 0.5 ? "♥" : "♡";
  yurak.style.left = Math.random() * 100 + "%";
  yurak.style.fontSize = (12 + Math.random() * 22) + "px";
  yurak.style.animationDuration = (7 + Math.random() * 6) + "s";
  heartsBox.appendChild(yurak);

  setTimeout(() => yurak.remove(), 14000);
}

setInterval(yurakQosh, 650);

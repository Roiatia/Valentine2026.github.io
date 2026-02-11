let yesSize = 1.2;
let numClicks = 0;
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainContainer = document.getElementById('main-container');
const successScreen = document.getElementById('success-screen');

// רשימת משפטים מצחיקים כשהיא לוחצת על "לא"
const noTexts = [
    "את בטוחה?",
    "תחשבי על זה שוב...",
    "נו באמת קארין!",
    "אולי בכל זאת?",
    "אני אבכה...",
    "טעות בלחיצה, נכון?"
];
noBtn.addEventListener('click', () => {
    numClicks++;
    yesSize+= 0.6;
    yesBtn.style.fontSize = yesSize + "rem";
    yesBtn.style.padding = (yesSize * 10) + "px " + (yesSize * 20) + "px";

    // משנים את הטקסט של כפתור ה-"לא"
    noBtn.innerText = noTexts[textIndex];
    textIndex = (textIndex + 1) % noTexts.length;

    if(numClicks >= 2 && numClicks < 6) {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';    }

    if (noClicks >= 6) {
        noBtn.style.display = "none";
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "5rem";
        yesBtn.style.borderRadius = "0";
        yesBtn.innerText = "תלחצי עליי וזהו! ❤️";
    }
})
let textIndex = 0;

noBtn.addEventListener('click', () => {
    // מגדילים את הכפתור "כן"
    yesSize += 0.5;
    yesBtn.style.fontSize = yesSize + "rem";
    yesBtn.style.padding = (yesSize * 10) + "px " + (yesSize * 20) + "px";

    // משנים את הטקסט של כפתור ה-"לא"
    noBtn.innerText = noTexts[textIndex];
    textIndex = (textIndex + 1) % noTexts.length;

    // אם הכפתור כבר ממש ענק, הוא יכול להסתיר את ה"לא"
    if (yesSize > 5) {
        noBtn.style.display = "none";
    }
});

yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    successScreen.classList.remove('hidden');
    successScreen.style.display = 'flex';

    // אופציונלי: להוסיף קונפטי כאן
    console.log("Success! Happy Valentine's Day");
    // הזיקוקים
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
});
// === main.js ===

// 연도 표시
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 로컬 배경 이미지 목록
const bgImages = ["001.jpg", "002.jpg", "003.jpg"];
const bgFolder = "assets/bg/";

function setRandomBg() {
  if (!bgImages.length) return;

  const pick = bgImages[Math.floor(Math.random() * bgImages.length)];
  const url = `${bgFolder}${pick}?t=${Date.now()}`;

  const img = new Image();
  img.onload = () => {
    const bg = document.getElementById("bg");
    if (!bg) return;
    bg.style.backgroundImage = `url('${url}')`;
    bg.style.transform = "scale(1.02)";
    console.log("[BG loaded]", url);
  };
  img.onerror = (e) => {
    console.warn("[BG failed]", url, e);
  };
  img.src = url;
}

window.addEventListener("load", setRandomBg);

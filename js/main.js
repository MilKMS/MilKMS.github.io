// 연도 표시
document.getElementById('year')?.textContent = new Date().getFullYear();

// === 배경 이미지를 로컬에서 랜덤 표시 ===
const bgImages = [
  "001.jpg", "002.jpg"  // ← 여기에 파일명 추가
];
const bgFolder = "/assets/bg/";

function randomBg() {
  if (!bgImages.length) return;
  const pick = bgImages[Math.floor(Math.random() * bgImages.length)];
  const url = bgFolder + pick + "?t=" + Date.now(); // 캐시 회피
  const bg = document.getElementById("bg");
  if (!bg) return;
  bg.style.backgroundImage = `url('${url}')`;
  bg.style.transform = "scale(1.04)";
}

window.addEventListener("load", randomBg);

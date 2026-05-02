document.querySelectorAll('a[href^="#"]').forEach((link) =>{
        link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                }
        });
});

//Dark mode toggle
const tombolMode = document.createElement('button');
tombolMode.textContent = '☀️';

tombolMode.style.cssText = `
position : fixed;
bottom : 20px;
right : 20px;
padding : 10px;
font-size : 20px;
background : transparent;
border : none;
z-index : 1000;
`;

document.body.appendChild(tombolMode);

let modeterang = false; // awal: mode gelap

tombolMode.addEventListener("click", function () {

  modeterang = !modeterang; // balik nilai (true ↔ false)

  if (modeterang) {
    document.body.classList.add("mode-terang");    // aktifkan mode terang
    tombolMode.textContent = "🌙";
  } else {
    document.body.classList.remove("mode-terang"); // kembali ke mode gelap
    tombolMode.textContent = "☀️";
  }

});

// Smooth Scrolling 
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
 
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typewriter Effect
const kalimat = [
  "I build clean interfaces.",
  "I write readable code.",
  "I love frontend stuff.",
];
 
let indexKalimat = 0;  // kalimat ke berapa sekarang
let indexHuruf   = 0;  // huruf ke berapa sekarang
let sedangHapus  = false; // lagi ngetik atau lagi hapus?
 
const elTeks = document.getElementById("teks");
 
function typewriter() {
  const kalimatAktif = kalimat[indexKalimat];
 
  if (!sedangHapus) {
    // --- MODE NGETIK: tambah 1 huruf ---
    indexHuruf++;
    elTeks.textContent = kalimatAktif.slice(0, indexHuruf);
 
    if (indexHuruf === kalimatAktif.length) {
      // Kalimat selesai → tunggu 1.5 detik lalu mulai hapus
      sedangHapus = true;
      setTimeout(typewriter, 1500);
      return;
    }
  } else {
    // --- MODE HAPUS: kurang 1 huruf ---
    indexHuruf--;
    elTeks.textContent = kalimatAktif.slice(0, indexHuruf);
 
    if (indexHuruf === 0) {
      // Sudah kosong → pindah ke kalimat berikutnya
      sedangHapus = false;
      indexKalimat = (indexKalimat + 1) % kalimat.length;
    }
  }
 
  // Kecepatan ngetik vs hapus berbeda biar lebih natural
  const delay = sedangHapus ? 60 : 110;
  setTimeout(typewriter, delay);
}
 
// Mulai typewriter setelah halaman siap
typewriter();
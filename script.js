// === Navbar Scroll Effect ===
window.onscroll = function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
};

// === Popup teks Bessemer ===
const bessemerLink = document.getElementById("bessemerLink");
const bessemerPopup = document.getElementById("bessemerPopup");
const overlay = document.getElementById("overlay");

if (bessemerLink && bessemerPopup && overlay) {
  bessemerLink.addEventListener("click", e => {
    e.preventDefault();
    bessemerPopup.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
  });

  overlay.addEventListener("click", () => {
    bessemerPopup.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
}

// === Modal Gambar ===
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const imgContainer = document.getElementById("blastFurnaceContainer");
const overlayText = document.getElementById("overlayText");

if (overlayText && imgContainer) {
  overlayText.addEventListener("click", e => {
    e.stopPropagation();
    const imagePath = imgContainer.getAttribute("data-image");
    document.body.classList.add("no-scroll");
    modal.style.display = "flex";
    modalImg.src = imagePath;
    captionText.innerHTML = "Early train model";
  });
}

// === Modal Video ===
const videoModal = document.getElementById("videoModal");
const videoLink = document.getElementById("videoLink");
const modalVideo = document.getElementById("modalVideo");
const videoCaption = document.getElementById("videoCaption");

if (videoLink) {
  videoLink.addEventListener("click", e => {
    e.preventDefault();
    const videoPath = videoLink.getAttribute("data-video");
    document.body.classList.add("no-scroll");
    videoModal.style.display = "flex";
    modalVideo.src = videoPath;
    videoCaption.innerHTML = "Steel production process";
  });
}

// === Tutup Modal (gambar & video) ===
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.onclick = () => {
    modal.style.display = "none";
    videoModal.style.display = "none";
    modalImg.src = "";
    modalVideo.pause();
    modalVideo.src = "";
    document.body.classList.remove("no-scroll");
  };
});

// === Klik luar untuk tutup ===
window.onclick = e => {
  if (e.target === modal || e.target === videoModal) {
    modal.style.display = "none";
    videoModal.style.display = "none";
    modalImg.src = "";
    modalVideo.pause();
    modalVideo.src = "";
    document.body.classList.remove("no-scroll");
  }
};

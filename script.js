
document.addEventListener('DOMContentLoaded', () => {
  // Modal Galeri
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  const albumContainer = document.getElementById("album-container");

  if (albumContainer && modal && modalImg && closeBtn) {
    albumContainer.addEventListener('click', function (e) {
      if (e.target.tagName === 'IMG') {
        modal.style.display = "flex";
        modalImg.src = e.target.src;
      }
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Efek Ketik Dinamis di Hero
  const heroText = document.querySelector(".hero h1");
  const text = heroText ? heroText.textContent : "";
  let index = 0;
  const typingSpeed = 75;

  if (heroText) {
    heroText.textContent = "";

    function ketik() {
      if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(ketik, typingSpeed);
      }
    }

    ketik();
  }

  // Scroll Reveal
  const sections = document.querySelectorAll('.section');
  const observerOptions = { threshold: 0.25 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});
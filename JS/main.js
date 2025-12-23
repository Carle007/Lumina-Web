// Cargar header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
      document.getElementById("header-container").innerHTML = data;

      /* ===== INDICADOR DE PÁGINA ACTIVA ===== */
      const page = document.body.dataset.page;
      if (!page) return;

      const activeLink = document.querySelector(
          `.header-nav a[data-link="${page}"]`
      );

      if (activeLink) {
          activeLink.classList.add("active");
      }
  });

// Cargar footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });

// Marcar menú activo
function setActiveMenu() {
    const currentPage = document.body.getAttribute("data-page");
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.style.backgroundColor = "#1f2933";
            link.style.color = "#ffffff";
        }
    });
}

// Animaciones al hacer scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // se anima solo una vez
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

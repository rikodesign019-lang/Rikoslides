document.addEventListener("DOMContentLoaded", () => {
  // === FILTER & PENCARIAN ===
  const cards = document.querySelectorAll(".card");
  const searchCodeInput = document.getElementById("searchInput");
  const searchUnivInput = document.getElementById("univInput");
  const filterSelect = document.getElementById("filterTheme");

  function filterCards(selectedTheme = "all") {
    const codeValue = searchCodeInput.value.toLowerCase();
    const univValue = searchUnivInput.value.toLowerCase();

    cards.forEach((card) => {
      const cardTheme = card.getAttribute("data-theme");
      const codeText = card.querySelector("h3")?.innerText.toLowerCase() || "";
      const univText = card.querySelector(".univ")?.innerText.toLowerCase() || "";

      const themeMatch = selectedTheme === "all" || cardTheme === selectedTheme;
      const codeMatch = codeText.includes(codeValue);
      const univMatch = univText.includes(univValue);

      card.style.display = themeMatch && codeMatch && univMatch ? "block" : "none";
    });
  }

  // Event listener filter tema
  filterSelect?.addEventListener("change", () => filterCards(filterSelect.value));

  // Event listener input pencarian
  searchCodeInput?.addEventListener("input", () => filterCards(filterSelect.value));
  searchUnivInput?.addEventListener("input", () => filterCards(filterSelect.value));

  // Jalankan saat halaman pertama kali dimuat
  filterCards();

  // === SLIDESHOW PRODUK SIDEBAR ===
  const sliders = document.querySelectorAll(".product-slider");

  sliders.forEach((slider) => {
    const images = slider.querySelectorAll("img");
    let index = 0;

    if (images.length > 0) {
      images[index].classList.add("active");

      setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 3000); // Ganti gambar tiap 3 detik
    }
  });
});

// === Auto play video on hover ===
document.querySelectorAll('.card iframe').forEach((iframe) => {
  const originalSrc = iframe.src.split('?')[0]; // ambil base URL tanpa parameter
  const params = "?controls=0&modestbranding=1&rel=0&showinfo=0"; // biar tampilan bersih

  iframe.parentElement.addEventListener('mouseenter', () => {
    iframe.src = `${originalSrc}${params}&autoplay=1&mute=1`; // play otomatis tanpa suara
  });

  iframe.parentElement.addEventListener('mouseleave', () => {
    iframe.src = `${originalSrc}${params}`; // stop video saat mouse keluar
  });
});



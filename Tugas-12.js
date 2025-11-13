// Saat halaman dimuat, tambahkan kelas fade-in
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
  });

  // Saat klik link <a>, jalankan animasi fade-out dulu sebelum pindah halaman
  document.querySelectorAll("a[href]").forEach(link => {
    // Abaikan link eksternal (yang punya target _blank)
    if (link.target === "_blank" || link.href.includes("mailto:") || link.href.startsWith("https://api.whatsapp.com")) {
      return;
    }

    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // Cegah pindah langsung
      e.preventDefault();

      // Tambahkan kelas fade-out untuk animasi keluar
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      // Setelah animasi selesai, baru pindah halaman
      setTimeout(() => {
        window.location.href = href;
      }, 600); // waktu sama seperti transition di CSS
    });
  });

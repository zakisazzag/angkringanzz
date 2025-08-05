// Script sederhana untuk animasi tombol WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".whatsapp-btn");
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const layananSection = document.getElementById("layanan");
  function checkVisibility() {
    const rect = layananSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      layananSection.classList.add("visible");
    }
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("visible");
});

document.addEventListener("DOMContentLoaded", function () {
  // Modal gambar layanan
  const modal = document.getElementById("layanan-modal");
  const modalImg = document.getElementById("modal-img");
  const modalInfo = document.getElementById("modal-info");
  const closeBtn = document.querySelector(".layanan-modal-close");

  document.querySelectorAll(".layanan-item img").forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = img.src;
      // Ambil info dari <p> di parent .layanan-item
      const info = img.parentElement.querySelector("p");
      modalInfo.textContent = info ? info.textContent.trim() : "";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalImg.src = "";
    modalInfo.textContent = "";
  });

  // Tutup modal jika klik di luar konten
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
      modalInfo.textContent = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeSections = document.querySelectorAll('.fade-in-section');
  function showSectionsOnScroll() {
    fadeSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible'); // animasi keluar saat tidak terlihat
      }
    });
  }
  window.addEventListener("scroll", showSectionsOnScroll);
  showSectionsOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const keranjang = [];
  const keranjangList = document.getElementById("keranjang-list");
  const keranjangTotal = document.getElementById("keranjang-total");
  const beliBtn = document.getElementById("beli-btn");
  const batalBtn = document.getElementById("batal-btn");
  const nomorWA = "6282192144802";

  function updateKeranjang() {
    keranjangList.innerHTML = "";
    let total = 0;
    keranjang.forEach(item => {
      keranjangList.innerHTML += `<li>${item.nama} x${item.jumlah} - Rp ${item.harga * item.jumlah}</li>`;
      total += item.harga * item.jumlah;
    });
    keranjangTotal.textContent = keranjang.length ? `Total: Rp ${total}` : "";
  }

  document.querySelectorAll(".tambah-keranjang").forEach(btn => {
    btn.addEventListener("click", function () {
      const parent = btn.closest(".layanan-item");
      const nama = parent.getAttribute("data-nama");
      const harga = parseInt(parent.getAttribute("data-harga"));
      const existing = keranjang.find(item => item.nama === nama);
      if (existing) {
        existing.jumlah += 1;
      } else {
        keranjang.push({ nama, harga, jumlah: 1 });
      }
      updateKeranjang();
    });
  });

  beliBtn.addEventListener("click", function () {
    if (!keranjang.length) return alert("Keranjang kosong!");
    let pesan = "Halo, saya ingin memesan:\n";
    keranjang.forEach(item => {
      pesan += `- ${item.nama} x${item.jumlah} (Rp ${item.harga * item.jumlah})\n`;
    });
    pesan += keranjangTotal.textContent;
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, "_blank");
  });

  batalBtn.addEventListener("click", function () {
    keranjang.length = 0; // kosongkan array keranjang
    updateKeranjang();
  });

});

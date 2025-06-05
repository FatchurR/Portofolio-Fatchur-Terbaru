// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 800, // durasi animasi dalam ms
    once: true,    // apakah animasi hanya terjadi sekali
    offset: 80,    // offset (dalam px) dari trigger point asli, agar animasi tidak terlalu cepat
    easing: 'ease-in-out', // jenis easing untuk animasi yang lebih halus
});

// Copyright Year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
        // (Opsional) Ubah ikon menu burger menjadi 'X' saat menu terbuka
        const icon = menuToggle.querySelector('i');
        if (navUl.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Active link highlighting
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    // Dapatkan nama file dari URL saat ini (misal: 'about.html' atau '' untuk index.html)
    const currentFilename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    links.forEach(link => {
        const linkFilename = link.getAttribute('href').substring(link.getAttribute('href').lastIndexOf('/') + 1);
        
        // Hapus kelas 'active' dari semua link terlebih dahulu
        link.classList.remove('active');

        // Tambahkan kelas 'active' ke link yang sesuai
        // Jika currentFilename kosong (berarti di root atau index.html) dan linkFilename adalah 'index.html'
        if ((currentFilename === '' && linkFilename === 'index.html') || (currentFilename === linkFilename)) {
            link.classList.add('active');
        }
    });
});

// (Opsional) Smooth scroll untuk link internal jika Anda menggunakan #hash links dalam satu halaman (saat ini tidak)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });


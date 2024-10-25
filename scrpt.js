// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Menyesuaikan offset untuk header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validasi Formulir Kontak
    const contactForm = document.querySelector('#kontak form');
    
    contactForm.addEventListener('submit', function (e) {
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;
        let errorMessage = '';

        if (nama === '') {
            valid = false;
            errorMessage += 'Nama harus diisi.\n';
        }

        if (email === '') {
            valid = false;
            errorMessage += 'Email harus diisi.\n';
        } else if (!emailPattern.test(email)) {
            valid = false;
            errorMessage += 'Format email tidak valid.\n';
        }

        if (pesan === '') {
            valid = false;
            errorMessage += 'Pesan harus diisi.\n';
        }

        if (!valid) {
            e.preventDefault();
            alert(errorMessage);
        }
    });

    // Lightbox Galeri Foto
    const galeriImages = document.querySelectorAll('.galeri .foto-galeri img');
    const body = document.body;

    // Membuat elemen lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';
    lightbox.style.cursor = 'pointer';

    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightbox.appendChild(lightboxImg);
    body.appendChild(lightbox);

    galeriImages.forEach(img => {
        img.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    // Tambahan: Menghindari scroll saat lightbox aktif
    lightbox.addEventListener('show', function () {
        body.style.overflow = 'hidden';
    });

    lightbox.addEventListener('hide', function () {
        body.style.overflow = 'auto';
    });
});

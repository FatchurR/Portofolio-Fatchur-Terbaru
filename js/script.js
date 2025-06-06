AOS.init({
    duration: 800, 
    once: true,    
    offset: 80,   
    easing: 'ease-in-out', 
});

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
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

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const currentFilename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    links.forEach(link => {
        const linkFilename = link.getAttribute('href').substring(link.getAttribute('href').lastIndexOf('/') + 1);
        link.classList.remove('active');
        if ((currentFilename === '' && linkFilename === 'index.html') || (currentFilename === linkFilename)) {
            link.classList.add('active');
        }
    });
});



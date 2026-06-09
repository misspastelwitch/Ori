document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    // Open of sluit het menu wanneer op het icoon wordt geklikt
    if (hamburger && menu) {
        hamburger.addEventListener('click', (event) => {
            menu.classList.toggle('open');
            event.stopPropagation();
        });

        document.addEventListener('click', (event) => {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
            }
        });
    }

    // Smooth slideshow for each image group on the portfolio page.
    const slideshowColumns = document.querySelectorAll('.column');

    slideshowColumns.forEach((column) => {
        const slides = Array.from(column.querySelectorAll('img'));

        if (slides.length < 2) {
            return;
        }

        column.style.position = 'relative';
        column.style.overflow = 'hidden';
        column.style.width = '80%';
        column.style.maxWidth = '80%';
        column.style.flexBasis = '80%';
        column.style.minHeight = '0';

        const firstSlide = slides[0];
        if (firstSlide && firstSlide.naturalWidth && firstSlide.naturalHeight) {
            column.style.aspectRatio = `${firstSlide.naturalWidth} / ${firstSlide.naturalHeight}`;
        } else {
            column.style.aspectRatio = '4 / 3';
        }

        slides.forEach((img) => {
            img.style.position = 'absolute';
            img.style.inset = '0';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';
            img.style.opacity = '0';
            img.style.transition = 'opacity 1s ease';
            img.style.display = 'block';
            img.style.borderRadius = '12px';
            img.style.backgroundColor = '#8d3127';
        });

        let currentIndex = 0;

        const showSlide = (index) => {
            slides.forEach((img, idx) => {
                img.style.opacity = idx === index ? '1' : '0';
            });
        };

        showSlide(currentIndex);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3200);
    });
});
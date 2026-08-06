// CURSOR
const cursor = document.getElementById('cursor');

if (cursor) {
    document.body.classList.add('cursor');

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = 1;
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
    });
}

// OVERLAY
const overlay = document.querySelector('.overlay');
const images = document.querySelectorAll('img');

if (overlay) {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
}

images.forEach((image) => {
    image.addEventListener('click', (event) => {
        event.stopPropagation();

        if (overlay) {
            overlay.classList.add('active');
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay) {
        overlay.classList.remove('active');
    }
});

// CURSOR
const cursor = document.getElementById('cursor');

function goToHomePage() {
    window.location.href = './pages/home/';
}

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

document.addEventListener('click', goToHomePage);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goToHomePage();
    }
});


// Gallery

$(document).ready(function() {
    const images = $('.gallery img');
    if (images.length > 0) {
        let current = 0;
        function showImage(index) {
            images.css('opacity', 0);
            const img = images.eq(index);
            img.css('opacity', 1);
            // Restart GIF or Video
            if (img.is('img')) {
                const src = img.attr('src').split('?')[0];
                img.attr('src', src + '?t=' + Date.now());
            } else if (img.is('video')) {
                img[0].currentTime = 0;
                img[0].play();
            }
        }
        showImage(0);
        setInterval(() => {
            current = (current + 1) % images.length;
            showImage(current);
        }, 3000);
    }
});
// CURSOR
const cursor = document.getElementById('cursor');

function goToHomePage() {
    window.location.href = './pages/home/index.html';
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
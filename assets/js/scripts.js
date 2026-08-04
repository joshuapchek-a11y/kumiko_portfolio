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

document.onclick = function () {
    window.location.href = "./pages/home/index.html";
}




// OVERLAY
const overlay = document.querySelector('.overlay');
const images = document.querySelectorAll('img');
const exitButton = document.querySelector('.exit');
// if (overlay) {
//     overlay.addEventListener('click', () => {
//         overlay.classList.remove('active');
//     });
// }

images.forEach((image) => {
    image.addEventListener('click', (event) => {
        event.stopPropagation();

        if (overlay) {
            overlay.classList.add('active');
        }
    });
});

exitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (overlay) {
        overlay.classList.remove('active');
    }
});

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape' && overlay) {
//         overlay.classList.remove('active');
//     }
// });

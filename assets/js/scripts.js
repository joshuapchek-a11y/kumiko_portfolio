

// OVERLAY
const overlays = document.querySelectorAll('.overlay');
const thumbs = document.querySelectorAll('.thumb');
const exitButtons = document.querySelectorAll('.exit');

thumbs.forEach((thumb) => {
    thumb.addEventListener('click', (event) => {
        event.stopPropagation();

        const targetOverlayId = thumb.dataset.overlay;
        if (!targetOverlayId) return;

        overlays.forEach((overlay) => {
            overlay.classList.remove('active');
        });

        const targetOverlay = document.getElementById(targetOverlayId);
        if (targetOverlay) {
            targetOverlay.classList.add('active');
        }
            // TIMER
        setTimeout(() => {
            myFunction();}, 500);
        function myFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
    });
});

exitButtons.forEach((exitButton) => {
    exitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const overlay = exitButton.closest('.overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    });
});

// WRAP LONG WORDS IN TITLES
const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

titleElements.forEach((title) => {
    const words = title.textContent.trim().split(/\s+/);
    const hasLongWord = words.some((word) => word.replace(/[^a-zA-Z0-9]/g, '').length > 10);

    if (hasLongWord) {
        title.classList.add('wrap-long-word');
    }
});

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         overlays.forEach((overlay) => overlay.classList.remove('active'));
//     }
// });

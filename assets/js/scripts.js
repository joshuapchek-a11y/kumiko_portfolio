// OVERLAY
const overlays = document.querySelectorAll('.overlay');
const thumbs = document.querySelectorAll('.thumb');
const exitButtons = document.querySelectorAll('.exit');
const mainEl = document.querySelector('main.work-gallery');

const ro = new ResizeObserver((entries) => {
    for (const entry of entries) {
        const overlay = entry.target.closest('.overlay');
        if (overlay && overlay.classList.contains('active')) {
            mainEl.style.minHeight = entry.contentRect.height + 'px';
        }
    }
});

overlays.forEach((overlay) => {
    const content = overlay.querySelector('bodycopy');
    if (content) ro.observe(content);
});

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
            mainEl.classList.add('overlay-open');

            const content = targetOverlay.querySelector('bodycopy');
            requestAnimationFrame(() => {
                if (content) mainEl.style.minHeight = content.scrollHeight + 'px';
            });
        }

        // TIMER
        setTimeout(() => {
            myFunction();
        }, 500);
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
        mainEl.classList.remove('overlay-open');
        mainEl.style.minHeight = '';
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
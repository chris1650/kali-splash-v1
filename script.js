setTimeout(() => {
    document.getElementById('video-entry').classList.add('shrink');

    setTimeout(() => {
        document.getElementById('video-entry').remove();
    }, 1400);
}, 4000);

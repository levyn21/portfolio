
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox overlay
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.id = 'lightbox';
    lightboxOverlay.innerHTML = `
        <div class="lightbox-content">
            <img id="lightbox-img" src="" alt="">
            <button id="close-lightbox">&times;</button>
        </div>
    `;
    document.body.appendChild(lightboxOverlay);

    // Add click listeners to all images
    const images = document.querySelectorAll('img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-lightbox');

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close on overlay click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

});
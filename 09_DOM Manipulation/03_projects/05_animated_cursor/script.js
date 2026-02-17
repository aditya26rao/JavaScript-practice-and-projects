// Select the two cursor elements from the DOM
let smallCursor = document.querySelector('.smallCursor')
let shadowCursor = document.querySelector('.shadowCursor')

// Track mouse position
let mouseX = 0;
let mouseY = 0;

// Track animation state
let animationId = null; // stores the requestAnimationFrame ID
let timer = null;       // stores the inactivity timeout

// Listen for mouse movement
document.addEventListener('mousemove', function (event) {
    // Update mouse coordinates
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Small cursor follows instantly
    smallCursor.style.left = mouseX + 'px';
    smallCursor.style.top = mouseY + 'px';

    // Start shadow animation if not already running
    if (!animationId) {
        animateShadowCursor();
    }

    // Reset inactivity timer each time mouse moves
    clearTimeout(timer);
    timer = setTimeout(() => {
        // Stop animation after 2 seconds of no movement
        cancelAnimationFrame(animationId);
        animationId = null; // reset so it can restart later
    }, 2000);
});

// Function to animate shadow cursor smoothly
function animateShadowCursor() {
    // Get current shadow position (strip "px" to get number)
    let currentX = parseFloat(shadowCursor.style.left) || 0;
    let currentY = parseFloat(shadowCursor.style.top) || 0;

    // Calculate distance between shadow and mouse
    let distanceX = mouseX - currentX;
    let distanceY = mouseY - currentY;

    // Move shadow a fraction (5%) closer each frame
    shadowCursor.style.left = currentX + distanceX * 0.05 + 'px';
    shadowCursor.style.top = currentY + distanceY * 0.05 + 'px';

    // Continue animation loop
    animationId = requestAnimationFrame(animateShadowCursor);
}

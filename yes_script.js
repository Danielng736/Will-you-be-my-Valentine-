const gif = document.getElementById("bouncingGif");

let x = 100; // starting position
let y = 100;
let dx = 3; // pixels per frame
let dy = 3;

function moveGif() {
    const gifWidth = gif.offsetWidth;
    const gifHeight = gif.offsetHeight;

    x += dx;
    y += dy;

    // Bounce off walls
    if (x + gifWidth >= window.innerWidth || x <= 0) dx *= -1;
    if (y + gifHeight >= window.innerHeight || y <= 0) dy *= -1;

    gif.style.left = x + "px";
    gif.style.top = y + "px";

    requestAnimationFrame(moveGif);
}

// Start moving the GIF
moveGif();

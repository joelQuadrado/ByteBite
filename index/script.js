const slides = document.getElementById("slides");

// duplica automaticamente
slides.innerHTML += slides.innerHTML;

let position = 0;

function animate() {
    position -= 0.5; // velocidade

    if (Math.abs(position) >= slides.scrollWidth / 2) {
        position = 0;
    }

    slides.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
}

animate();
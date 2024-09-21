window.addEventListener('load', function() {
    // Selecciona el elemento de la flor
    const flower = document.getElementById('flower');

    // Aplica la animación después de un breve retardo al cargar la página
    setTimeout(() => {
        flower.style.opacity = '1';
        animateFlower();
    }, 500); // Espera medio segundo antes de iniciar la animación
});

function animateFlower() {
    const petals = document.querySelectorAll('.petal');
    const center = document.querySelector('.center');

    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.animation = `growPetal 2s ease forwards`;
        }, index * 500); // Cada pétalo se anima uno por uno
    });

    // Animar el centro después de que los pétalos estén animados
    setTimeout(() => {
        center.style.animation = `fadeInCenter 1s ease forwards`;
    }, petals.length * 500);
}

// Selecciona todos los botones de "Más Información"
document.querySelectorAll('.info-button').forEach((button, index) => {
    // Añade un evento de clic a cada botón
    button.addEventListener('click', () => {
        // Array con los enlaces de los patrocinadores
        let enlaces = [
            "https://www.facebook.com/photo/?fbid=583193780282437&set=a.175993924335760",
            "https://www.enlace2.com",
            "https://www.enlace3.com"
        ];
        // Redirige al enlace correspondiente basado en el índice del botón clickeado
        window.location.href = enlaces[index];
    });
});
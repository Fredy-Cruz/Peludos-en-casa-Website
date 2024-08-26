const footer = document.querySelector("footer");//we select the footer tag

//We insert tags in the footer
footer.insertAdjacentHTML('beforeend',`
    <div class="header-footer">
        <figure>
            <img src="https://res.cloudinary.com/dksv7n9bg/image/upload/v1724626878/ny23uybcovzdog6zpoyr.svg" alt="logo de peludos en casa">
        </figure>
    </div>
    <div class="information-footer">
        <h3>Información de Contacto</h3>
        <a href="#">Teléfono(s) de contacto</a>
        <a href="#">Correo electrónico</a>
        <a href="#">Dirección física (si hay oficinas o refugios)</a>
    </div>
    <div class="ImportantLinks-footer">
        <h3>Enlaces Importantes</h3>
        <a href="#">Políticas de privacidad</a>
        <a href="#">Términos y condiciones</a>
        <a href="#">Preguntas frecuentes (FAQ)</a>
        <a href="#">Enlace a la página de donaciones</a>
    </div>
    <div class="MainSections-footer">
        <h3>Enlace a las Secciones Principales</h3>
        <a href="#">Enlace a la página de adopción</a>
        <a href="#">Enlace a la página de voluntariado</a>
        <a href="#">Enlace al blog o noticias</a>
    </div>
    <div class="SocialNetworks-footer">
        <h3>Redes Sociales</h3>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-instagram"></i>
    </div>
`);
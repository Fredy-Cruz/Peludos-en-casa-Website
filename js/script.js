document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Begin - Seccion anuncios 
// Selecciona todos los botones "Mas información"
const buttons = document.querySelectorAll('.more-info a');

// Agrega un evento de clic a cada botón
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el enlace se siga
    // Selecciona la tarjeta que contiene el botón
    const card = button.parentNode.parentNode;

    // Selecciona la información adicional del perro
    const dogName = card.querySelector('.name').textContent;
    const dogImage = card.querySelector('img').src;
    const dogInfo = card.querySelector('.info').innerHTML;

    // Rellena el contenido del modal con la información adicional
    const modalContent = `
      <h2>${dogName}</h2>
      <img src="${dogImage}" alt="${dogName}">
      ${dogInfo}
      <button class="close-modal">Cerrar</button>
    `;

    // Muestra el modal con la información adicional
    showModal(modalContent);
  });
});


function showModal(modalContent) {
  // Crea el modal
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Crea el contenido del modal
  const modalContentElement = document.createElement('div');
  modalContentElement.classList.add('modal-content');
  modalContentElement.innerHTML = modalContent;

  // Agrega el contenido del modal al modal
  modal.appendChild(modalContentElement);

  // Agrega el modal a la página
  document.body.appendChild(modal);

  // Selecciona el botón de cerrar el modal
  const closeModalButton = modal.querySelector('.close-modal');

  // Agrega un evento de clic al botón de cerrar el modal
  closeModalButton.addEventListener('click', () => {
    // Cierra el modal
    modal.remove();
  });
}
// end - Seccion anuncios


/*Open the respective Modal for each button */
const openModal = (OpenModal, InfModal)=>{
    document.getElementById(OpenModal).onclick = function() {
        document.getElementById(InfModal).style.display = "block";
    }
}

/*Calling the function */
openModal("openModal-1", "information-modal-1");
openModal("openModal-2", "information-modal-2");
openModal("openModal-3", "information-modal-3");


/*Close the modal when clic the respective span x*/
document.querySelector(".information-modal-close-1").onclick = function() {
    document.getElementById("information-modal-1").style.display = "none";
}

document.querySelector(".information-modal-close-2").onclick = function() {
    document.getElementById("information-modal-2").style.display = "none";
}

document.querySelector(".information-modal-close-3").onclick = function() {
    document.getElementById("information-modal-3").style.display = "none";
}
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
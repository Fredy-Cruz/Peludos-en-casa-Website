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


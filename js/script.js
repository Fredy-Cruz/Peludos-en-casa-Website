document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

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

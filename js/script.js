/*Open the respectice Modal for each button */
document.getElementById("openModal-1").onclick = function() {
    document.getElementById("information-modal-1").style.display = "block";
}

document.getElementById("openModal-2").onclick = function() {
    document.getElementById("information-modal-2").style.display = "block";
}

document.getElementById("openModal-3").onclick = function() {
    document.getElementById("information-modal-3").style.display = "block";
}

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

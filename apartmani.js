
function openReservation(apartment) {
    document.getElementById('reservationPopup').style.display = "block";
    document.querySelector('.popup-content h2').textContent = "Rezervacija " + apartment.charAt(0).toUpperCase() + apartment.slice(1);
}


function closePopup() {
    document.getElementById('reservationPopup').style.display = "none";
}


window.onclick = function(event) {
    if (event.target == document.getElementById('reservationPopup')) {
        closePopup();
    }
};

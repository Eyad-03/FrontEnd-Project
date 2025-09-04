
var flightIcons = document.querySelectorAll(".icon-airplane");
var modals = document.querySelectorAll(".flight-modal");
var closeBtns = document.querySelectorAll(".close-btn");


flightIcons.forEach((flightIcon, index) => {
    flightIcon.onclick = function(event) {
        event.preventDefault(); 
        modals[index].style.display = "block"; 
    };
});


closeBtns.forEach((closeBtn, index) => {
    closeBtn.onclick = function() {
        modals[index].style.display = "none"; 
    };
});


window.onclick = function(event) {
    modals.forEach((modal, index) => {
        if (event.target == modal) {
            modal.style.display = "none"; 
        }
    });
};

// Get the modal
var rcsaModal = document.getElementById('rcsaModal');
var scetModal = document.getElementById('scetModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



$("a.rcsaInfo").click(function() {
  rcsaModal.style.display = "block"
});

$("a.scetInfo").click(function() {
  scetModal.style.display = "block"
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    rcsaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == rcsaModal) {
        rcsaModal.style.display = "none";
    }
}

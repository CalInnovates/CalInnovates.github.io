// Get the modal
var rcsaModal = document.getElementById('rcsaModal');
var scetModal = document.getElementById('scetModal');
var winnettModal = document.getElementById('winnettModal');
var chenModal = document.getElementById('chenModal');
var loModal = document.getElementById('loModal');
var nevatiaModal = document.getElementById('nevatiaModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$("a.winnettInfo").click(function() {
  winnettModal.style.display = "block";
});

$("a.rcsaInfo").click(function() {
  rcsaModal.style.display = "block";
});

$("a.scetInfo").click(function() {
  scetModal.style.display = "block";
});

$("a.chenInfo").click(function() {
  chenModal.style.display = "block";
});

$("a.loInfo").click(function() {
  loModal.style.display = "block";
});

$("a.nevatiaInfo").click(function() {
  nevatiaModal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    rcsaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modals = [rcsaModal, scetModal, winnettModal, chenModal, loModal, nevatiaModal];
  for (let modal of modals) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function myFunction() {
document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.icofont-navigation-menu')) {
    var dropdowns = document.getElementsByClassName("nav-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

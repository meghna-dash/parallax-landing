//
// tooltips.js
//

(function() {
  const tooltips = document.querySelectorAll('[data-toggle="tooltip"]');

  if (tooltips) {
    $(tooltips).tooltip();
  }
})();

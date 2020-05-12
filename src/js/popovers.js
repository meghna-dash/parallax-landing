//
// popovers.js
//

(function() {
  const popovers = document.querySelectorAll('[data-toggle="popover"]');

  if (popovers) {
    $(popovers).popover();
  }
})();

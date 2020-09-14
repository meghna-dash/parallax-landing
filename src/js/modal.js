//
// modal.js
//

(function() {
  const modals = document.querySelectorAll('.modal');

  function overflowHide() {
    document.documentElement.style.overflowX = 'visible';
  }

  function overflowShow() {
    document.documentElement.style.overflowX = '';
  }

  $(modals).on({
    'show.bs.modal': function() {
      overflowHide();
    },
    'hidden.bs.modal': function() {
      overflowShow();
    }
  })
})();

//
// features.scss
//

(function() {
  const toggles = document.querySelectorAll('[data-toggle="table-features"]');

  [].forEach.call(toggles, toggle => {
    toggle.addEventListener('change', () => {
      const target = toggle.dataset.target;
      const table = document.querySelector(target);

      table.classList.toggle('table-features-alt');
    });
  });
})();

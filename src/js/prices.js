//
// prices.js
//

(function() {
  const toggles = document.querySelectorAll('[data-toggle="prices"]');

  if (typeof CountUp !== 'undefined' && toggles) {
    [].forEach.call(toggles, toggle => {
      toggle.addEventListener('change', () => {
        const target = toggle.dataset.target;
        const targetEl = document.querySelectorAll(target);

        const isChecked = toggle.checked;

        [].forEach.call(targetEl, el => {
          const minValue = el.dataset.minValue;
          const maxValue = el.dataset.maxValue;

          const from = el.innerHTML;
          const to = isChecked ? maxValue : minValue;

          const countUp = new CountUp(el, from, to);
          countUp.error ? console.error(countUp.error) : countUp.start();
        });
      });
    });
  }
})();

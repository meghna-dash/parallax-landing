//
// price.js
//

(function() {
  const toggles = document.querySelectorAll('[data-toggle="price"]');

  if (typeof CountUp !== 'undefined' && toggles) {
    [].forEach.call(toggles, toggle => {
      toggle.addEventListener('click', () => {
        const target = toggle.dataset.target;
        const targetEl = document.querySelector(target);

        const from = targetEl.innerHTML;
        const to = toggle.dataset.value;

        const countUp = new CountUp(targetEl, from, to);
        countUp.error ? console.error(countUp.error) : countUp.start();
      });
    });
  }
})();

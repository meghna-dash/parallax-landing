//
// countup.js
//

(function() {
  const toggles = document.querySelectorAll('[data-toggle="countup"]');
  const toggleSelector = '.aos-animate[data-aos-id="countup:in"]:not(.counted)';
  const events = ['aos:in:countup:in'];

  function init(toggle) {
    const startVal = (toggle.dataset.from) ? +toggle.dataset.from : null;
    const endVal = (toggle.dataset.to) ? +toggle.dataset.to : null;
    const decimals = (toggle.dataset.decimals) ? +toggle.dataset.decimals : null;
    const duration = (toggle.dataset.duration) ? +toggle.dataset.duration : null;
    const options = (toggle.dataset.options) ? JSON.parse(toggle.dataset.options) : null;
    const countUp = new CountUp(toggle, startVal, endVal, decimals, duration, options);

    if (!countUp.error) {
      countUp.start();
      toggle.classList.add('counted');
    } else {
      console.error(countUp.error);
    }
  }

  if (typeof CountUp !== 'undefined' && toggles) {
    [].forEach.call(toggles, toggle => {
      if (toggle.getAttribute('data-aos-id') !== 'countup:in') {
        init(toggle);
      }
    });
  }

  document.addEventListener(events[0], function(e) {
    if (e.detail instanceof Element) {
      init(e.detail);
    } else {
      const toCount = document.querySelectorAll(toggleSelector);

      [].forEach.call(toCount, toggle => {
        init(toggle);
      });
    }
  });
})();

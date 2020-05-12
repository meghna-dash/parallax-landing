//
// typed.js
//

(function() {
  const typed = document.querySelectorAll('[data-typed]');

  if (typeof Typed !== 'undefined' && typed) {
    [].forEach.call(typed, el => {
      const elementOptions = el.dataset.options ? JSON.parse(el.dataset.options) : {};
      const defaultOptions = {
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
      }
      const options = Object.assign(defaultOptions, elementOptions);

      // Init
      new Typed(el, options);
    });
  }
})();

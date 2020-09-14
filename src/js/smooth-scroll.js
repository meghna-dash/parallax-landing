//
// smooth-scroll.js
//

(function() {
  const scroll = '[data-scroll]';
  const header = '.navbar.fixed-top';
  const offset = 24;

  if (typeof SmoothScroll !== 'undefined' && scroll) {
    new SmoothScroll(scroll, {
      header: header,
      offset: (anchor, toggle) => {
        return toggle.dataset.offset ? toggle.dataset.offset : offset;
      }
    });
  }
})();

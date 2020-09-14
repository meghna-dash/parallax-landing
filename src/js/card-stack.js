//
// card-stack.js
//

(function() {
  const stacks = document.querySelectorAll('.card-stack');
  const events = ['load', 'resize', 'scroll'];

  [].forEach.call(stacks, stack => {
    const items = stack.querySelectorAll('.card-stack-item');

    events.forEach(event => {
      window.addEventListener(event, () => {
        const arr = [].slice.call(items).reverse();

        arr.reduce((total, item, i) => {
          const height = item.clientHeight + parseInt(window.getComputedStyle(item).getPropertyValue('margin-bottom'));
          const offset = arr[i - 1] ? arr[i - 1].offsetTop - item.offsetTop : height;
          const progress = total + (height - offset) / height;

          // if (progress !== total) {
          const card = item.firstElementChild;
          const cardInner = card.firstElementChild;
          const translate = 'calc(-1rem * ' + progress + ')';
          const opacity = 'calc(1 - .2 * ' + progress + ')';
          const scale = 'calc(1 - .03 * ' + progress + ')';

          card.style.transform = 'translateY(' + translate + ') scale(' + scale + ')';
          cardInner.style.opacity = opacity;
          // }

          return progress;
        }, 0);
      });
    });
  });
})();

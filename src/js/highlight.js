//
// highlight.js
//

(function() {
  const highlights = document.querySelectorAll('.highlight');

  if (typeof hljs !== 'undefined' && highlights) {
    [].forEach.call(highlights, function(highlight) {
      hljs.highlightBlock(highlight);
    });
  }
})();

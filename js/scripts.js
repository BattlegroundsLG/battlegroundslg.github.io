/**
 * @file
 * scripts for battlegrounds
 */
function equalHeight(group) {
  tallest = 0;
  group.each(function() {
    thisHeight = $(this).height();
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

!function ($) {

  "use strict"; // jshint ;_;

  $(function () {
    $(".collapse").collapse()
    $("img.lazy").lazyload();
  })

}(window.jQuery);

if (!window.console) {
  window.console = {};
}

console.log('Pew pew lasers!');

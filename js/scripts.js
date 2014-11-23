/**
 * @file
 * scripts for battlegrounds
 */
!function ($) {

  "use strict"; // jshint ;_;

  $(function () {
    $(".collapse").collapse()
    $("img.lazy").lazyload();
  })

  try {
    $("#indieCountDown").countdown("2014/12/01", function(event) {
      $(this).text(
         event.strftime('%Dd %Hh %Mm %Ss')
         );
      });
  }   catch(err) {}
}(window.jQuery);
(function($) {
  "use strict"; 
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Navigation overlay toggle
  $(document).ready(function() {
    $(".toggle-menu-closed").click(function() {
      $("#navOverlay").animate({left: '100vw'}, 250, function() {
        $("#navToggle").show(250);
      });
    });
    $(".toggle-menu-open").click(function(){
      $("#navOverlay").animate({left: '0vw'}, 250, function() {
        $("#navToggle").hide(250);
      });
    });
  });
})(jQuery); 
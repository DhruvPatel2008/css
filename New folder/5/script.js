$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#menu").animate({ height: 'toggle' });
    $(this).toggleClass("open");
  });

  // Handle the close button click event
  $("#close-menu").click(function () {
    $("#menu").slideUp();
    $("#menu-toggle").removeClass("open");
  });

  // Close the mobile menu when switching to desktop view
  $(window).resize(function () {
    if ($(window).width() >= 600) {
      $("#menu").css('display', '');
      $("#menu-toggle").removeClass("open");
    }
  });
});

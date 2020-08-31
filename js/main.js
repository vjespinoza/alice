$(document).ready(function () {
  $("#toggle_mob-menu").click(function () {
    lockScroll();
  });
});

function lockScroll() {
  if ($("#nav_bar").is(":visible")) {
    $("body").addClass("stop_scroll");
  } else {
    $("body").removeClass("stop_scroll");
  }
}

// I HAVE NO IDEA WHAT I'M DOING!!!!!!!! =(

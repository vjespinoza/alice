//Prevents body scrolling when mobile menu is active.
const checkbox = document.getElementById("toggle_mob-menu");

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    body.classList.add("stop_scroll");
  } else {
    body.classList.remove("stop_scroll");
  }
});

//This solution creates an issue:
//When the mobile menu is closed without "unchecking" the checkbox
//the .stop_scroll class remians active, preventing the body to scroll
//when the mobile menu is not visible (active).

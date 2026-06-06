// feat-01 — Community-full popup on call-to-action click.
//
// UI-only: there is no real sign-up. Clicking any CTA button shows a fixed
// top-right toast telling the visitor the community is full. It auto-hides
// after 5s; repeated clicks restart that timer and never stack a 2nd popup
// (there is only ever this one element).

const POPUP_MESSAGE =
  "The community is full for the moment, but thank you for your interest.";
const VISIBLE_DURATION = 5000; // ms the popup stays before auto-hiding

const popup = document.querySelector(".popup");
const ctaButtons = document.querySelectorAll("a.button");

let hideTimer;

function showPopup() {
  // Set the text on the (empty) live region so screen readers announce it
  // when it appears.
  popup.textContent = POPUP_MESSAGE;
  popup.classList.add("popup--is-visible");

  // Restart the auto-hide countdown on every click.
  clearTimeout(hideTimer);
  hideTimer = setTimeout(hidePopup, VISIBLE_DURATION);
}

function hidePopup() {
  popup.classList.remove("popup--is-visible");
}

ctaButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // stop the href="#" from jumping to the top
    showPopup();
  });
});

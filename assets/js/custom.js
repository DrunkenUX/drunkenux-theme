"use strict";

/**
 * Take an element, determine it's visibility, and flip it. Based on nefe's
 * vanilla JS alternative to jQuery's toggle()
 * @see    https://github.com/nefe/You-Dont-Need-jQuery#8.2
 * @author Michael Fienen <fienen@gmail.com>
 * @param  {HTMLElement} el - Element you want to show or hide
 */
function toggleHide(el) {
  // Convert legacy inline display toggles to 'hidden' attribute
  if (el.ownerDocument.defaultView.getComputedStyle(el, null).display === 'none' && !el.hidden) {
    el.toggleAttribute('hidden');

    if (el.style.removeProperty) {
      el.style.removeProperty('display');
    } else {
      el.style.removeAttribute('display');
    }
  }

  el.hidden = !el.hidden;
}
/**
 * Packages up steps required for showing and hiding the main navigation
 * @author Michael Fienen <fienen@gmail.com>
 * @external menu
 * @external navButton
 */


function toggleMenu() {
  menu && toggleHide(menu);
  navButton.setAttribute('aria-expanded', navButton.getAttribute('aria-expanded') == 'true' ? 'false' : 'true');
} // Pause homepage animation until image is loaded


var bannerImg = document.querySelector(".banner-image img");
bannerImg && bannerImg.addEventListener("load", function () {
  document.body.classList.remove('img-loading');
}); // Menu visibility toggle

var navButton = document.getElementById('menu-toggle');
var menu = document.getElementById('menu-top-navigation');
navButton && navButton.addEventListener('click', toggleMenu);
navButton && document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && navButton.getAttribute('aria-expanded') == 'true') toggleMenu();
  return;
}); // Transcript visibility toggle

var transcriptButton = document.getElementById('transcript-toggle');
transcriptButton && transcriptButton.addEventListener('click', function () {
  var label = this.getElementsByTagName('span');
  var transcript = document.getElementById('transcript');
  toggleHide(label[0]);
  toggleHide(label[1]);
  transcript.classList.toggle('open');
});
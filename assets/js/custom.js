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
} // Pause homepage animation until image is loaded


var bannerImg = document.querySelector(".banner-image img");
bannerImg && bannerImg.addEventListener("load", function () {
  document.body.classList.remove('img-loading');
}); // Menu visibility toggle

var navButton = document.getElementById('menu-toggle');
if (!Object.is(navButton, undefined) && !Object.is(navButton, null)) navButton.addEventListener('click', function () {
  var menu = this.nextElementSibling.querySelector('ul');
  toggleHide(menu);
  navButton.setAttribute('aria-expanded', navButton.getAttribute('aria-expanded') == 'true' ? 'false' : 'true');
}); // Transcript visibility toggle

var transcriptButton = document.getElementById('transcript-toggle');
if (!Object.is(transcriptButton, undefined) && !Object.is(transcriptButton, null)) transcriptButton.addEventListener('click', function () {
  var label = this.getElementsByTagName('span');
  var transcript = document.getElementById('transcript');
  toggleHide(label[0]);
  toggleHide(label[1]);
  transcript.classList.toggle('open');
});
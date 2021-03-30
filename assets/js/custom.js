"use strict";

/**
 * Take an element, determine it's visibility, and flip it. Based on nefe's
 * vanilla JS alternative to jQuery's toggle()
 * @see    https://github.com/nefe/You-Dont-Need-jQuery#8.2
 * @author Michael Fienen <fienen@gmail.com>
 * @param  {HTMLElement} el - Element you want to show or hide
 * @param  {String} display - Display property value to set on element. Default: 'block'
 */
function toggleHide(el) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';

  if (el.ownerDocument.defaultView.getComputedStyle(el, null).display === 'none') {
    el.style.display = display;
  } else {
    el.style.display = 'none';
  }
} // Pause homepage animation until image is loaded


var bannerImg = document.querySelector(".banner-image img");
bannerImg && bannerImg.addEventListener("load", function () {
  document.body.classList.remove('img-loading');
}); // Menu visibility toggle

var navButton = document.getElementById('menu-toggle');
if (!Object.is(navButton, undefined) && !Object.is(navButton, null)) navButton.addEventListener('click', function () {
  toggleHide(this.nextElementSibling);
}); // Transcript visibility toggle

var transcriptButton = document.getElementById('transcript-toggle');
if (!Object.is(transcriptButton, undefined) && !Object.is(transcriptButton, null)) transcriptButton.addEventListener('click', function () {
  var label = this.getElementsByTagName('span');
  var transcript = document.getElementById('transcript');
  toggleHide(label[0], 'inline');
  toggleHide(label[1], 'inline');
  transcript.classList.toggle('open');
});
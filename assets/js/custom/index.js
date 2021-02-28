/**
 * Take an element, determine it's visibility, and flip it. Based on nefe's
 * vanilla JS alternative to jQuery's toggle()
 * @see    https://github.com/nefe/You-Dont-Need-jQuery#8.2
 * @author Michael Fienen <fienen@gmail.com>
 * @param  {HTMLElement} el - Element you want to show or hide
 */
function toggleHide(el) {
  if (el.ownerDocument.defaultView.getComputedStyle(el, null).display === 'none') {
    el.style.display = ''|'inline'|'inline-block'|'inline-table'|'block';
  } else {
    el.style.display = 'none';
  }
}

let transcriptButton = document.getElementById('transcript-toggle');
if(!Object.is(transcriptButton, undefined) && !Object.is(transcriptButton, null)) transcriptButton.addEventListener(click, function() {
  let label = this.getElementsByTagName('span');
  let transcript = document.getElementById('transcript');
  toggleHide(label);
  transcript.classList.toggle('open');
});
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
    if(el.style.removeProperty) {
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
  navButton.setAttribute('aria-expanded', navButton.getAttribute('aria-expanded') == 'true' ? 'false' : 'true' );
}

// Pause homepage animation until image is loaded
const bannerImg = document.querySelector(".banner-image img");
bannerImg && bannerImg.addEventListener("load", function() { document.body.classList.remove('img-loading') });

// Menu visibility toggle
const navButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-top-navigation');
navButton && navButton.addEventListener('click', toggleMenu);
navButton && document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape' && navButton.getAttribute('aria-expanded') == 'true') toggleMenu();
  return;
});

// Transcript visibility toggle
let transcriptButton = document.getElementById('transcript-toggle');
transcriptButton && transcriptButton.addEventListener('click', function() {
  let label = this.getElementsByTagName('span');
  let transcript = document.getElementById('transcript');
  toggleHide(label[0]);
  toggleHide(label[1]);
  transcript.classList.toggle('open');
});

// Generate a transcript preview
let transcriptPeepContent = document.querySelectorAll('#transcript .chat:nth-child(-n+3)');
if(transcriptPeepContent && typeof transcriptPeepContent !== undefined && !document.querySelector('div#transcript')) {
  let transcriptPeep = document.createElement('div');
  transcriptPeep.classList.add('transcript-peep');
  transcriptPeep.setAttribute('aria-hidden', 'true');
  transcriptPeepContent.forEach(chat => {
    let clone = chat.cloneNode(true);
    transcriptPeep.appendChild(clone);
  });

  document.getElementById('transcript').after(transcriptPeep);
}


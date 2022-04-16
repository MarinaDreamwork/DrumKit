function playSound(e) {
  const {keyCode} = e;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function stopTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
window.addEventListener('keydown', playSound);

const keys = document.querySelector('.keys').childNodes;

keys.forEach(key => key.addEventListener('transitionend', stopTransition));
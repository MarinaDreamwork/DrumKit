window.addEventListener('keydown', function(e) {
  const {keyCode} = e;
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`.key[data-key='${keyCode}']`);
  if(!audio) return; // stop running function
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

function removeTransition(e) {
  console.log(e);
  if(e.propertyName !== 'transform') return; // skip, if it doesn't transform
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
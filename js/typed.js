// Tiny typing animation (no dependency on typed.js)
function typeLoop(el, words, opts) {
  opts = opts || {};
  var typeSpeed = opts.typeSpeed || 80;
  var deleteSpeed = opts.deleteSpeed || 40;
  var pause = opts.pause || 1400;

  var i = 0, char = 0, deleting = false;

  function tick() {
    var word = words[i % words.length];
    if (!deleting) {
      char++;
      el.textContent = word.slice(0, char);
      if (char === word.length) {
        deleting = true;
        return setTimeout(tick, pause);
      }
      setTimeout(tick, typeSpeed);
    } else {
      char--;
      el.textContent = word.slice(0, char);
      if (char === 0) {
        deleting = false;
        i++;
        setTimeout(tick, 300);
      } else {
        setTimeout(tick, deleteSpeed);
      }
    }
  }
  tick();
}
window.typeLoop = typeLoop;

// Cursor

const cursor = document.querySelector(".cursor");

function getDimensions(e) {
  cursor.style.top = `${e.clientY - 10}px`; 
  cursor.style.left = `${e.clientX - 10}px`;
}
const delay = 250;

function throttle(callback, limit) {
  let wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

window.addEventListener("mousemove", (e) => {
  throttle(getDimensions(e), delay);
});
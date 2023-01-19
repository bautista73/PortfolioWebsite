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

function openTab(evt, tabName) {
    
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();
require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });

// tab JS
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

function aboutTab() {
    document.getElementById('resumeOpen').click();
}
function myInfoTab(){
    document.getElementById('aboutOpen').click();
}

document.getElementById("defaultOpen").click();

document.querySelector('.cv-button').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', '${ x }px')
    e.target.style.setProperty('--y', '${ y }px')
}
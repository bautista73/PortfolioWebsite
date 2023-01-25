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

function myWorksTab(){
  document.getElementById('worksOpen').click();
}

function contactTab(){
  document.getElementById('contactOpen').click();
}

document.getElementById("defaultOpen").click(); // change this

document.getElementById("hamburger").addEventListener("click", function(){
  this.classList.toggle("active");
  document.querySelector(".mobile-menu").classList.toggle("active");
});

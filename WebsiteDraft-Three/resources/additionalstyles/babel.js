require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });

  $(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
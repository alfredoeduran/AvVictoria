$(document).ready(function(){
   $(".menu a").smoothscrolling();
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
      $('.navbar-default').css({
         "background-color":"rgba(45,45,45,.7)",
        "height":"0px"        
      });
      $('.logo').css("width","50px");
      $('.navbar-nav').css("margin-top", 0);
      $('.navbar-default, .logo, .navbar-nav').addClass("transicion")
      
    } else {
      
      $('.scrollup').fadeOut();
      $('.navbar-default').css({
        "background-color":"rgba(45,45,45,.7)",
        "height":"75px"
      });
      $('.logo').css("width","80px");
      $('.navbar-nav').css("margin-top", "10px");  
    }
  });
  
  
  
});
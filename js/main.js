const backTopBtn = $('.back-top');
$(window).scroll(function(){
  if($(document).scrollTop()>400){
    backTopBtn.css('visibility','visible');
  } else if ($(document).scrollTop()<400){
    backTopBtn.css('visibility','hidden');
  }
});

backTopBtn.click(function(){
  $('html').animate({
    scrollTop: 0
  }, 1000)
})
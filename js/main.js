var style = {
  'display' : 'inline',
  'position' : 'absolute',
  'left' : '0',
  'top' : '10px',
  'transition' : 'all 2s'
};
var style2 = {
  'display': 'inline',
  'position': 'relative',
  'left': '0',
  'top': '10px',
};

var back_top_btn = $('.back-top-btn'), logo = $('.logo h1'),nav = $('nav');
$(window).scroll(function(){
  if ($(document).scrollTop() > 400) {
  back_top_btn.css('visibility', 'visible');
  logo.css(style);
  logo.text('ZFS');
  nav.css('background-color','rgba(22,12,31,.876)')
  }
  if ($(document).scrollTop() < 400) {
    back_top_btn.css('visibility','hidden');
    logo.css(style2);
    logo.text('Zulu Fastnet Solutions');
    nav.css('background-color','rgb(22,12,31)')
  }

});

back_top_btn.click(function() {
  $('html').animate({ 
    scrollTop:0
  },1000);
  return false;
});

var viewBtn = $('.view-img'), logos = $('.logos');
viewBtn.click(function(){
  logos.addClass('show');
  viewBtn.hide();
})


var date = new Date();
var year = date.getFullYear()
document.getElementById('date').innerText = year;


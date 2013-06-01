// @codekit-prepend "jquery-1.9.1.min.js", "jquery.fittext.js";


$(function() {
  jQuery(".title h2").fitText(1,{ minFontSize: '50px'});
  navStuff();
});

function navStuff() {
  var $nav = $('header nav'),
      $navItem = $nav.find('li'),
      navItemNum = $navItem.length,
      navItemHeight = $navItem.height();
    
  $nav.addClass('closed');
  
  $nav.click(function() {
    if (!$nav.hasClass('closed')) {
      $nav.css('bottom', '-1px').addClass('closed');
    } else {
      $nav.css('bottom', '-' + navItemNum*navItemHeight + 'px').removeClass('closed');
    }
  });
}
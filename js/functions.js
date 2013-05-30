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
    
  $nav.css('top', '-' + navItemNum*navItemHeight + 'px').addClass('closed');
  
  $nav.click(function() {
    if ($nav.hasClass('closed')) {
      $nav.css('top', '0px').removeClass('closed');
    } else {
      $nav.css('top', '-' + navItemNum*navItemHeight + 'px').addClass('closed');
    }
  });
}
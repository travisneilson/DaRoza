// @codekit-prepend "jquery-1.9.1.min.js", "jquery.fittext.js";


$(function() {
  jQuery(".title h2").fitText(1,{ minFontSize: '50px'});
  navStuff();
  linkCard();
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


function linkCard() {

  $('.family-link').each(function() {
    var $this = $(this),
        $hyphenName = $this.attr('href').slice(0, -5),
        $splitName = $hyphenName.split('-'),
        $currPageName = $('.title h2').text().split(' '),
        $thumbUrl = 'img/card-thumbs/'+ $hyphenName +'.jpg',
        $template = '<div class="name-card-wrap flipInX">' +
          '<div class="card-avatar" style="background-image: url('+ $thumbUrl +')">' +
            '<div class="card-fade"></div>' +
            '<div class="card-name">'+ $splitName[0] +' '+ $splitName[1] +'</div>' + 
          '</div>' +
          '<div class="link-portion">' +
            '<div class="relation">('+ $currPageName[0] +'\'s sister)</div>' +
            '<div class="cta">Read '+ $splitName[0] +'\'s Story</div>' +
          '</div>' +
        '</div>';
        
    $this.append($template);
  });

}
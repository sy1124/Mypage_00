//smoothscroll
  $(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position-100}, speed, "swing");
        return false;
    });

//topscroll
  $('#top').hide();
//hambergarMenu
  $(window).scroll(function(){
    if ($(window).scrollTop()>200) {
      $('header').addClass('fixed');
    }else{
      $('header').removeClass('fixed');
    }
//topscroll2
    if ($(window).scrollTop()>500) {
      $('#top').fadeIn();
    }else{
      $('#top').fadeOut();
    }
  });
//topscroll3
  $('#top').click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
  });

  $('#nav-toggle').click(function(){
    $('header').toggleClass('open');
  });

});

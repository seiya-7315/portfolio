$(function(){
    // ヘッダーアクション
    $(function() {
        var headerHeight = $('header').outerHeight(),
            startPos = 0;
        $(window).on('scroll', function() {
            var scrollPos = $(this).scrollTop();
            if ( scrollPos > startPos && scrollPos > headerHeight ) {
                $('header').css('top', '-' + headerHeight + 'px');
            }else {
                $('header').css('top','0');
            }
            startPos = scrollPos;
        });
    });	

    // ホバー変色 //
    $('.nav-link').hover(function(){
        $(this).css('opacity','.7');
    },
    function(){
        $(this).css('opacity','1');
    });

    $('.who_animation').hover(function(){
        $(this).css('opacity', '.7')
    },
    function(){
        $(this).css('opacity', '1')
    });


    // ナビリンク飛ぶ動き //
    $(function() {
        $('a[href^="#"]').click(function(){
          var href = $(this).attr('href');
          var target = $(href == '#' || href === '' ? 'html' : href);
          var position = target.offset().top;
          $('html,body').animate({scrollTop : position}, 800);
          return false;
        });
    });



    // 制作物スクロールフェードイン //
    $(window).scroll(function(){
        $('.js-start').each(function(){
            var scroll = $(window).scrollTop();
            var elemTop = $(this).offset().top;
            var windowHeight = $(window).height();

            if(scroll > elemTop - windowHeight +200){
                $(this).addClass('scrollIn');
            }
        });
    });

});
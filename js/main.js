/* Navbar */

$(document).ready(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $(".sub-header").addClass('active');
        }else{
            $(".sub-header").removeClass('active');
        }
    });
});

/* Scroll Animate */

 (function() {
     var aboutEl = $('div.about'),
         aboutElOffset = aboutEl.offset().top/2,
         documentEl = $(document);
     documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden'); 
                });
})();
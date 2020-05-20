jQuery(function ($) {
    function calculateHeroHeight() {
        var heroHeight;
        var headerHeight;
        var screenHeight;

        screenHeight = $(window).height();
        $('.home__hero').css('height', screenHeight);
    }

    $(window).on('resize', calculateHeroHeight);
    $(window).load(calculateHeroHeight());
})
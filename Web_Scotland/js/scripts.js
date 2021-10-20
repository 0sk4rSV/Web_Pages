(function ($) {

    $(document).ready(

        function () {

            $(window).scroll(function () {

                if ($(this).scrollTop() > 1350 ) {

                    $('.scroll-to-top').fadeIn();

                } else {

                    $('.scroll-to-top').fadeOut();

                }

            });

            $('.scroll-to-top').click(function (e) {

                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 1
                }, 500);

            });

        });

})(jQuery);

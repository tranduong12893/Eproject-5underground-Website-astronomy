/*load more*/
$(function () {
    $("div.group").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.group:hidden").slice(0, 2).slideDown();
        if ($("div.group:hidden").length == 0) {
            $("#load").fadeOut('medium');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
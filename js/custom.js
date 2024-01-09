$(document).ready(function()
{
    //button scroll to top
    $(window).scroll(function()
    {
        if($(window).scrollTop()>1000)
        {
            $('.scroll-top').fadeIn(400);
        }
        else
        {
            $('.scroll-top').fadeOut(400);
            $('.scroll-top').removeClass('active');
        }
    });
    $('.scroll-top').click(function()
    {
        $('html,body').animate(
            {scrollTop:0},800
        );
        $(this).addClass('active');
    });

    $('.contactinfo').click(function()
    {
        $('.socialmediacontainer').fadeIn();
    });

    $(".contactme button").click(function()
    {
        $(".contactme button").removeClass('active');
        $(this).addClass('active');
    });

    //automatic year update
    $('#spanYear').html(new Date().getFullYear());
});

$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('topnav-right-home').toggleClass('topnav-right-home-hidden');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('topnav-right-home').toggleClass('topnav-right-home-hidden');
    open = false;
});

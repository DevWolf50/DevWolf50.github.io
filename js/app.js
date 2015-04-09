$(".headerText").hide().fadeIn(2000);
$('.filter').hide().delay(1000).fadeIn(1000);


$(".entry").addClass('slideIn');  

$('.entry').eq(0).css('margin-top','11px')



var menueButton = $('.menuButton');
menueButton.on('click', function (e) {
    "use strict";
    e.preventDefault();
    $(this).toggleClass('active'); //animates main manu button to rotate  
    $('.lightBox').toggleClass('lightboxBlur');
    $('.nav').toggleClass('navHide'); //allows sub nav buttons to come into view
    
    if($('.social').hasClass('socialHide')) {
       } else {
       $('.social').toggleClass('socialHide');
       $('.contactButton').find('h2').toggle();
}
    
     
    
    
});

var contactButton = $('.contactButton')
contactButton.on('click', function (e) {
    e.preventDefault();
    $(this).find('h2').toggle();
    $('.social').toggleClass('socialHide');
});
    

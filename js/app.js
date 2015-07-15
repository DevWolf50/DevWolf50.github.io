$(".fadeIn").hide().fadeIn(1800);
$('.delayFadeIn').hide().delay(500).fadeIn(1000);


$(".entry").addClass('slideIn');
$(".aboutHeader").addClass('aboutHeaderSlideIn');
$('.aboutContent').addClass('aboutContentSlideIn');

$('.entry').eq(0).css('margin-top','11px')



var menueButton = $('.menuButton');

function navToggle (e) {
 "use strict";
    e.preventDefault();
    $(menueButton).toggleClass('active'); //animates main manu button to rotate
    $('.lightBox').toggleClass('lightboxBlur');
    $('.nav').toggleClass('navHide'); //allows sub nav buttons to come into view
}



menueButton.on('click', function (e) {

    navToggle(e);

    if($('.social').hasClass('socialHide')) {
       } else {
       $('.social').toggleClass('socialHide');
       $('.contactButton').find('h2').toggle();//closes social buttons if the menu button is clicked
    }

    if($('.contactButton').hasClass('contactActive')) {
      $('.contactButton').toggleClass('contactActive');
    } else {}




});

var contactButton = $('.contactButton')
contactButton.on('click', function (e) {
    e.preventDefault();
    $(this).find('h2').toggle();
    $(this).toggleClass('contactActive');
    $('.social').toggleClass('socialHide');
});



var contentCard = $('.entry');
var thisCurrentCard;
var contentCardOpen = false;
function rePositionScroll() {
  var mq = window.matchMedia('(max-width:800px)');
  if(mq.matches) {
    $("html,body").animate({scrollTop:"280px"});
  }else {
    $("html,body").animate({scrollTop:"950px"});
  }
};


contentCard.on('click', function(e) {
    e.preventDefault();
    thisCurrentCard = $(this);
    $(this).siblings().toggle(600,'swing', function(){});
    $(this).toggleClass('posts');
    $('.entryTitle').toggleClass('postTitle');
    $('.wrapperStyle').toggleClass('postPicture');
    $('.filter').toggle(600,'swing', function(){});
    rePositionScroll();
    console.log(rePositionScroll());
    if (contentCardOpen === false) {
        contentCardOpen = true
    } else {
    contentCardOpen = false;
    }


});


$('.homeButton.main').on('click', function(e) {
    if(contentCardOpen === true) {
        contentCardOpen = false;
        e.preventDefault();
         $(thisCurrentCard).siblings().toggle(600,'swing', function(){});
        $(thisCurrentCard).toggleClass('posts');
        $('.entryTitle').toggleClass('postTitle');
        $('.wrapperStyle').toggleClass('postPicture');
        $('.filter').toggle(600,'swing', function(){});

        navToggle(e);

    } else {
      navToggle(e);
      }

});

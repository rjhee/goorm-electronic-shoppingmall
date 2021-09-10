$(function () {
  $('.customer_menu').click(function () {
    console.log(event.target);
    // if(click)
    let faq = $('.customer_FAQ').offset().top;
    $('html').animate({ scrollTop: faq - 70 }, 400);
  });
});

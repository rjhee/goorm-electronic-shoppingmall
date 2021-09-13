$(function () {
  $('.company_menu').click(function (event) {
    let target = event.target;

    let companyInfo = $('.company_info').offset().top;
    let businessInfo = $('.business_info').offset().top;
    let management = $('.management').offset().top;
    let employment = $('.employment').offset().top;
    let business = $('.business').offset().top;
    switch (target.className) {
      case 'menu_company_info':
        $('html').animate({ scrollTop: companyInfo - 68 }, 400);
        break;
      case 'menu_business_info':
        $('html').animate({ scrollTop: businessInfo - 68 }, 400);
        break;
      case 'menu_management':
        $('html').animate({ scrollTop: management - 68 }, 400);
        break;
      case 'menu_employment':
        $('html').animate({ scrollTop: employment - 68 }, 400);
        break;
      case 'menu_business':
        $('html').animate({ scrollTop: business - 68 }, 400);
        break;
    }
  });

  $(window).scroll(function () {
    let userScroll = $(this).scrollTop();

    let companyInfo = $('.company_info').offset().top;
    let businessInfo = $('.business_info').offset().top + 400;
    let management = $('.management').offset().top + 700;
    let employment = $('.employment').offset().top + 1700;
    let business = $('.business').offset().top;

    if (500 <= userScroll && userScroll <= companyInfo) {
      $('.menu_company_info').addClass('menu_hover');
      $('.menu_business_info').removeClass('menu_hover');
    } else if (companyInfo < userScroll && userScroll < businessInfo) {
      $('.menu_business_info').addClass('menu_hover');
      $('.menu_company_info').removeClass('menu_hover');
      $('.menu_management').removeClass('menu_hover');
    } else if (businessInfo < userScroll && userScroll < management) {
      $('.menu_management').addClass('menu_hover');
      $('.menu_business_info').removeClass('menu_hover');
      $('.menu_employment').removeClass('menu_hover');
    } else if (management < userScroll && userScroll < employment) {
      $('.menu_employment').addClass('menu_hover');
      $('.menu_management').removeClass('menu_hover');
      $('.menu_business').removeClass('menu_hover');
    } else if (employment < userScroll && userScroll < business) {
      $('.menu_business').addClass('menu_hover');
      $('.menu_employment').removeClass('menu_hover');
    }
  });
});

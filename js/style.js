$(function () {
  // GNB Hover
  $('#gnb > ul > li > a, #gnb > ul > li > label').each(function () {
    $(this).on('mouseenter', function () {
      $('header').addClass('on');
      $('#gnb').addClass('over');
      $(this).addClass('on');
      $('header .gnb_bg').addClass('on');
    });
  });
  $('header').on('mouseleave', function () {
    $('header').removeClass('on');
    $('#gnb').removeClass('over');
    $(this).removeClass('on');
    $('header .gnb_bg').removeClass('on');
  });

  // mobile gnb
  $('.menu_btn').on('click', function () {
    $(this).toggleClass('on');
  });

  // modal
  $('a[href="#modal1"]').click(function (event) {
    event.preventDefault();
    $('#modal1').modal({
      escapeClose: false,
      clickClose: false,
    });
  });
  $('a[href="#modal2"]').click(function (event) {
    event.preventDefault();
    $('#modal2').modal({
      escapeClose: false,
      clickClose: false,
      showClose: false,
    });
  });
  $('a[href="#modal3"]').click(function (event) {
    event.preventDefault();
    $('#modal3').modal({
      escapeClose: false,
      clickClose: false,
    });
  });
});

// fixed header subpage
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('header').addClass('fixed-header');
  } else {
    $('header').removeClass('fixed-header');
  }
});

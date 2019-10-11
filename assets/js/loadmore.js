// $(function () {
//     $('div.hidden').slice(0, 2).show();
//     $('#loadMore').on('click', function (e) {
//         e.preventDefault();
//         $('div.hidden:hidden').slice(0, 1).slideDown();
//         if ($('div.hidden:hidden').length == 0) {
//             $('#loadMore').fadeOut('slow');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1500);
//     });
// });

// $('a[href=#top]').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });
$('.some-list').simpleLoadMore({
    item: 'div',
    count: 5,
    itemsToLoad: 2
  });
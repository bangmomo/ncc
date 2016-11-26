/* GNB 1depth 메뉴 클릭시 */
$('.gnb > ul > li > a').on('click', function(e) {
    $(this).parent().addClass('active').siblings().removeClass('active');

    e.preventDefault();
});

/* 전체메뉴 보기 버튼 클릭시 */
$('.all-menu > a').on('click', function(e) {
    $(this).parent().toggleClass('active');

    e.preventDefault();
});

/* 헤더 검색 버튼 클릭시 */
$('.header-util .btn-srch').on('click', function(e) {
    var srcharea = $(this).siblings('.srch-area');
    srcharea.toggleClass('active');

    if(srcharea.hasClass('active')) {
        setTimeout(function() {
            srcharea.find('input').focus();
        },400);
    }

    e.preventDefault();
});

/* LNB 하위뎁스 열기 버튼 클릭시 */
$(".lnb .btn-open").on('click', function(e) {
    $(this).closest('li').toggleClass('open');

    e.preventDefault();
});

/* footer slider */
$('.footer .banner-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000
});

/* footer slider 재생, 정지 */
$('.banner-area .btn-auto').on('click', function(e) {
    $(this).toggleClass('active');

    if($(this).hasClass('active')) {
        $('.footer .banner-list').slick('slickPause');
    }else{
        $('.footer .banner-list').slick('slickPlay');
    }


    e.preventDefault();
});
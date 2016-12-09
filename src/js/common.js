/**
 * Created by BANG on 2016-12-03.
 */

(function() {

    /* 공통헤더 메뉴버튼 클릭시 */
    $(document).on("click", ".common-header .header-menu", function() {
        $(this).find(".spinner-master").toggleClass("active").closest("body").toggleClass("open-gnb");

        /* 좌측 lnb 이동시 */
        var wid = $(".gnb-container").width();
        var openGnb = $(this).closest("body");
        if(openGnb.hasClass("open-gnb")) {
            $(this).closest(".common-header").css("transform","translateX("+ wid +"px)");
            $(this).closest(".common-header").siblings(".container").css("transform","translateX("+ wid +"px)");
        } else {
            $(this).closest(".common-header").css("transform","translateX(0)");
            $(this).closest(".common-header").siblings(".container").css("transform","translateX(0)");
        }
    });

    /* 우측 mypage 메뉴버튼 클릭시 */
    $(document).on("click", ".common-header .header-mypage", function() {
        $(this).closest("body").toggleClass("open-mypage");

        /* 우측 mypage 이동시*/
        var wid = $(".mypage-container").width();
        var openMypage = $(this).closest("body");
        if(openMypage.hasClass("open-mypage")) {
            $(this).closest(".common-header").css("transform","translateX(-"+ wid +"px)");
            $(this).closest(".common-header").siblings(".container").css("transform","translateX(-"+ wid +"px)");
        } else {
            $(this).closest(".common-header").css("transform","translateX(0)");
            $(this).closest(".common-header").siblings(".container").css("transform","translateX(0)");
        }
    });

}());

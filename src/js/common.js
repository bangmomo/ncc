/**
 * Created by BANG on 2016-12-03.
 */

(function() {

    /* 공통헤더 메뉴버튼 클릭시 */
    $(document).on("click", ".common-header .header-menu", function() {
        $(this).find(".spinner-master").toggleClass("active").closest("body").toggleClass("open-gnb");
    });


}());

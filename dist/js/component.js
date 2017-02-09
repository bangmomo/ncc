/* 아코디언 목록 클릭시 */
$(".accordion .item-head a").on("click", function(e) {
    $(this).closest("li").toggleClass("active").siblings().removeClass("active");
    e.preventDefault();
});

/* 탭 클릭시 */
$(".tab .nav a").on("click", function(e) {
    $(this).parent().addClass("active").siblings().removeClass("active");
    e.preventDefault();
});

/* 상품검색버튼 클릭시 */
$(document).on("click", ".search-area .search-trigger", function() {
    $(this).closest(".search-area").addClass("active");
});

/* 상품검색 Close */
$(document).on("click", ".search-area .btn-back", function() {
    $(this).closest(".search-area").removeClass("active");
});
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
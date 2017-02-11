/* 아코디언 목록 클릭시 */
$('.accordion .item-head a').on('click', function(e) {
    $(this).closest('li').toggleClass('active').siblings().removeClass('active');

    e.preventDefault();
});

/* 스피너 spinner */
$(".spinner .spin").spinner({
    min: 0
});

/* 찜하기 하트 */
$(document).on("click", ".like", function(){
    $(this).toggleClass("active");
});

/* 탭 클릭시 */
$('.tab .nav a').on('click', function(e) {
    $(this).parent().addClass('active').siblings().removeClass('active');

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

/* 고정옵션버튼(구매하기 쉐어버튼) */
$(document).on("click", ".buy-option .buy-inner .trigger", function() {
    $(this).closest(".buy-inner").addClass("active");
});
$(document).on("click", ".buy-option .buy-inner .close", function() {
    $(this).closest(".buy-inner").removeClass("active");
});

/* 고정옵션버튼(구매하기 클릭시) */
$(document).on("click", ".buy-option .buy-inner .buy", function() {
    $(this).closest(".buy-option").addClass("active");
    setTimeout(function() {
        $(".basket-inner").addClass("active");
    }, 50);

});
$(document).on("click", ".buy-option .basket-inner .basket-close", function() {
    $(this).closest(".buy-option").find(".basket-inner").removeClass("active");
    $(this).closest(".buy-option").removeClass("active");
});




/* 셀렉트박스 직접입력 시 */
/*$(document).on("change", ".select select", function() {
    var dir = $(this).find("option:selected").val();

    if(dir == "direct") {
        $(this).find("option.dir").text("");
        $(this).closest(".select").addClass("active").find(".dir-input input").focus();

    } else  {
        $(this).closest(".select").removeClass("active").find(".dir-input input").val("");
        $(this).find("option.dir").text("직접입력");
    }
});*/


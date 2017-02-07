/* 아코디언 목록 클릭시 */
$('.accordion .item-head a').on('click', function(e) {
    $(this).closest('li').toggleClass('active').siblings().removeClass('active');

    e.preventDefault();
});

/* 탭 클릭시 */
$('.tab .nav a').on('click', function(e) {
    $(this).parent().addClass('active').siblings().removeClass('active');

    e.preventDefault();
});

/* 셀렉트박스 직접입력 시 */
$(document).on("change", ".select select", function() {
    var dir = $(this).find("option:selected").val();

    if(dir == "direct") {
        $(this).find("option.dir").text("");
        $(this).closest(".select").addClass("active").find(".dir-input input").focus();

        /*$(document).on("change", ".select select", function() {
          console.log("재클릭");
            
          if($(".select").hasClass("active")) {
              $(this).find("option.dir").text("직접입력");
          }
        });*/

    } else  {
        $(this).closest(".select").removeClass("active").find(".dir-input input").val("");
        $(this).find("option.dir").text("직접입력");
    }
});


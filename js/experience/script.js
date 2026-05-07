// submenu
$(function () {

    // .submenu 숨김
    $(".submenu").hide();

    // #nav .gnb li a 요소에 마우스를 올리면,
    $("#nav .gnb li a").mouseenter(function () {
        // .submenu의 이전 움직임은 멈추고, slideDown 하는데 시간은 0.5초
        $(".submenu").stop().slideDown(500);

        // #nav한테 active 클래스 추가
        $("#header").addClass("active");
    });

    // #nav 요소에 마우스가 벗어나면,
    $("#nav").mouseleave(function () {
        // .submenu의 이전 움직임이 멈추고, slideUp 하는데 시간은 0.8초
        $(".submenu").stop().slideUp(200);

        // #nav한테 active 클래스 제거
        $("#header").removeClass("active");
    });
});
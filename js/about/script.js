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


// 채워지는 about 비주얼 텍스트
window.addEventListener("load", function () {

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");

    // 1줄 실행
    line1.classList.add("active");

    // 1줄 끝난 후 2줄 실행
    setTimeout(() => {
        line2.classList.add("active");
    }, 2200); // CSS transition 시간과 동일하게
});
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

// swiper slide
$(function () {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // 한 화면에 보여줄 슬라이드 갯수 
    spaceBetween: 300, // 슬라이드 사이 여백 

    autoplay: { // 자동 슬라이드(false = 비활성화) 
      delay: 2500, // 시간 설정 
      disableOnInteraction: false, // false = 스와이프 후 자동 재생 
    },
    loop: true, // 슬라이드 반복 여부 

    // 화살표 버튼 
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
});


// loading 화면
const loading = document.getElementById("loading");
const loadingNum = document.querySelector(".loading_num");
const fillWrap = document.querySelector(".symbol_fill_wrap");
const symbol = document.querySelector(".loading_symbol");

let progress = 0;

// 숫자 + 채움 업데이트
function updateLoading(value) {
  loadingNum.textContent = String(value).padStart(3, "0");
  fillWrap.style.height = value + "%";
}

// 로딩 시작
const interval = setInterval(() => {
  progress++;

  updateLoading(progress);

  if (progress >= 100) {
    clearInterval(interval);

    // 👉 여기부터 핵심 (심볼 커짐)
    symbol.classList.add("active");

    // 👉 살짝 뒤에 로딩 사라짐
    setTimeout(() => {
      loading.classList.add("hide");
    }, 600);

    setTimeout(() => {
      loading.style.display = "none";
    }, 1200);
  }
}, 20);
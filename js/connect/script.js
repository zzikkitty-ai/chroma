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


// connect intro scroll reveal
document.addEventListener("DOMContentLoaded", function () {
    const connectIntro = document.querySelector(".connect_intro");

    if (!connectIntro) return;

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                connectIntro.classList.add("show");
            }
        });
    }, {
        threshold: 0.4
    });

    observer.observe(connectIntro);
});

// submenu
$(function () {
    $(".submenu").hide();

    $("#nav .gnb li a").mouseenter(function () {
        $(".submenu").stop().slideDown(500);
        $("#header").addClass("active");
    });

    $("#nav").mouseleave(function () {
        $(".submenu").stop().slideUp(200);
        $("#header").removeClass("active");
    });
});


// connect intro scroll reveal
document.addEventListener("DOMContentLoaded", function () {
    const connectIntro = document.querySelector(".connect_intro");

    if (connectIntro) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    connectIntro.classList.add("show");
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(connectIntro);
    }
});


// 층별안내 tab menu
document.querySelectorAll('.floor_info li').forEach(function(tab){
    tab.addEventListener('click', function(){

        document.querySelectorAll('.floor_info li').forEach(function(item){
            item.classList.remove('active');
        });

        this.classList.add('active');

        const newImg = this.getAttribute('data-img');
        document.getElementById('floor_img').src = newImg;
    });
});



// =========================
// calendar
// =========================

// 기본 표시 월: 2026년 9월
let nowMonth = new Date(2026, 8, 1);

// 기본 선택 날짜
let selectedDate = new Date(2026, 8, 10);
selectedDate.setHours(0, 0, 0, 0);

window.addEventListener("load", function () {
    buildCalendar();
});

// 달력 생성
function buildCalendar() {
    const firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    const lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);

    const tbody = document.querySelector(".Calendar tbody");
    const calYear = document.getElementById("calYear");
    const calMonth = document.getElementById("calMonth");

    calYear.textContent = nowMonth.getFullYear();
    calMonth.textContent = leftPad(nowMonth.getMonth() + 1);

    tbody.innerHTML = "";

    let row = document.createElement("tr");

    // 첫째 주 빈칸
    for (let i = 0; i < firstDate.getDay(); i++) {
        row.appendChild(document.createElement("td"));
    }

    // 날짜 채우기
    for (let day = 1; day <= lastDate.getDate(); day++) {
        const cell = document.createElement("td");
        const currentDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), day);

        cell.textContent = leftPad(day);
        cell.dataset.date = formatDate(currentDate);

        // 요일별 클래스
        if (currentDate.getDay() === 0) {
            cell.classList.add("sun");
        } else if (currentDate.getDay() === 6) {
            cell.classList.add("sat");
        } else {
            cell.classList.add("weekday");
        }

        // 선택 날짜 표시
        if (isSameDate(currentDate, selectedDate)) {
            cell.classList.add("choiceDay");
        }

        // 클릭 이벤트
        cell.addEventListener("click", function () {
            selectDate(currentDate);
        });

        row.appendChild(cell);

        // 토요일이면 줄바꿈
        if (currentDate.getDay() === 6) {
            tbody.appendChild(row);
            row = document.createElement("tr");
        }
    }

    // 마지막 줄 남은 칸 채우기
    if (row.children.length > 0) {
        while (row.children.length < 7) {
            row.appendChild(document.createElement("td"));
        }
        tbody.appendChild(row);
    }
}

// 날짜 선택
function selectDate(date) {
    selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    selectedDate.setHours(0, 0, 0, 0);
    buildCalendar();
}

// 이전달
function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, 1);
    buildCalendar();
}

// 다음달
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
    buildCalendar();
}

// 날짜 비교
function isSameDate(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

// 날짜 포맷
function formatDate(date) {
    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());
    return `${year}-${month}-${day}`;
}

// 앞에 0 붙이기
function leftPad(value) {
    return value < 10 ? "0" + value : String(value);
}

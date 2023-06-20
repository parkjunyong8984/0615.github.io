var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  function adjustSlideHeight() {
    var windowHeight = window.innerHeight; // 현재 화면의 높이
    var slide = document.getElementById('slide'); // 슬라이드 요소의 ID를 설정합니다. 실제로 사용하는 ID로 변경해야 합니다.
  
    if (windowHeight >= 991) {
      slide.style.height = '800px';
    } else {
      slide.style.height = windowHeight + 'px';
    }
  }
  window.addEventListener('resize', adjustSlideHeight);

// 초기 로드 시 슬라이드 높이 조정
window.addEventListener('load', adjustSlideHeight);
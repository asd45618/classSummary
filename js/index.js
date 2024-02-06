let windowWidth = $(window).width();
if (windowWidth > 1440) {
  $("html").addClass("pc");
} else {
  $("html").addClass("mobile");
}

$(".slideInner").slick({
  autoplaySpeed: 4000,
  // speed: 300,
  autoplay: true,
  dots: true,
  arrows: true,
  prevArrow:
    '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button><p class="prev">Prev</p>',
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button><p class="next">Next</p>',
});

$(".imgText").slick({
  autoplaySpeed: 4000,
  // speed: 300,
  autoplay: true,
  dots: false,
  arrows: false,
  infinite: true,
});

$(".slideOuter .plapau i").on("click", function () {
  let vid = $("#section .slideOuter .slideInner .slide").find("video");
  console.log(vid);
  if ($(this).hasClass("fa-pause")) {
    $(".slideInner").slick("slickPause");
    $(".slideOuter .plapau i").removeClass("fa-pause").addClass("fa-play");
    vid.get(1).pause();
    vid.get(2).pause();
    vid.get(3).pause();
    vid.get(4).pause();
  } else {
    $(".slideInner").slick("slickPlay");
    $(".slideOuter .plapau i").removeClass("fa-play").addClass("fa-pause");
    vid.get(1).play();
    vid.get(2).play();
    vid.get(3).play();
    vid.get(4).play();
  }
});

let headerNav = document.querySelector("#headerNav");
let depth2 = document.querySelectorAll(".depth2");

// function mouseEnterEvent() {
//   headerNav.style.display = "block";
// }

// function mouseLeaveEvent() {
//   headerNav.style.display = "none";
// }

// function depth2MouseEnterEvent() {
//   depth2.forEach((value) => {
//     value.style.display = "flex";
//     value.style.width = "100%";
//   });
// }

// function depth2MouseLeaveEvent() {
//   // depth2.forEach((value) => {
//   //   value.style.display = "none";
//   // });
//   depth2.style.display = "none";
// }

$("#header .row .depth1 > li").on("mouseover mouseout", function () {
  if ($("html").hasClass("pc")) {
    $(this).toggleClass("on");
  }
});

$("#header .row .depth1 > li").on("click", function () {
  if ($("html").hasClass("mobile")) {
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
  }
});

$("#header .row .menuOpen").on("click", function () {
  // let depth1Display = $("#header .row .menu .depth1").css("display");
  // $("#header .row .menu .depth1").css({
  //   display: depth1Display === "block" ? "none" : "block",
  // });
  $("#header .row .menu .depth1").stop().slideToggle(200);
  $(this).find("i").toggleClass("fa-bars fa-times");
});

$("#footer .row .footerBottom .footerBottomText .familySite").on(
  "click",
  function () {
    $(this).find(".familySiteInner").stop().slideToggle(200);
    $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
  }
);

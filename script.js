gsap.registerPlugin(ScrollTrigger);
let partition = document.getElementsByClassName("partition");
let blueCirs = document.getElementsByClassName("blueCir");
let whitePaths = document.getElementsByClassName("whitePath");
blueCirs[0].style.visibility = "visible";

function pathPrepare(el) {
  var lineLength = el.getTotalLength();
  el.style.strokeDasharray = lineLength;
  el.style.strokeDashoffset = lineLength;
}

Array.from(partition).forEach((e, idx) => {
  e.style.position = "absolute";
  e.style.top = `${(idx + 1) * 100}vh`;
});

Array.from(whitePaths).forEach((e) => {
  pathPrepare(e);
});

var controller = new ScrollMagic.Controller();

for (let i = 0; i < 7; i++) {
  var tween = new TimelineMax()
    .add(
      TweenMax.to(whitePaths[i], 0.3, {
        strokeDashoffset: 0,
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.to(blueCirs[i + 1], 0.1, {
        visibility: "visible",
        ease: Linear.easeNone,
      })
    )
    .add(
      TweenMax.to(whitePaths[i], 0.3, {
        stroke: "#ffffff",
        ease: Linear.easeNone,
      })
    )
    .add(TweenMax.to(whitePaths[i], 0, { visibility: "visible" }));
  var scene = new ScrollMagic.Scene({
    triggerElement: partition[i],
    duration: 70,
    tweenChanges: true,
  })
    .setTween(tween)
    .addIndicators()
    .addTo(controller);
}

function colorAnimation(sreen, colorD, colorB) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: partition[sreen - 1],
      start: "top 55% ",
      end: "bottom 45%",
      pinSpacing: false,
      scrub: true,
      toggleActions: "restart pause reverse none",
    },
  });

  tl.to("#sq", {
    duration: 0.3,
    backgroundColor: colorD,
  });
  tl.to("#cir", {
    duration: 0.3,
    backgroundColor: colorD,
  });
  tl.to("body", {
    duration: 0.3,
    backgroundColor: colorB,
  });
}

const mobBody = document.getElementsByClassName("swiper-slide")
const mobDiv = document.getElementsByClassName("box")
const screenBody = ["#CBCBCD","#1C0362","#141748","#0D131B","#22CFEA","#BA2D09","#00B769"];
const screenDiv = ["#6311A8","#4D27CD","#0E123A","#16263B","#1264E7","#012C91","#00834C"];

for (let i = 0; i < 7; i++) {
  mobBody[i].style.backgroundColor=screenBody[i];
  mobDiv[i].style.backgroundColor=screenDiv[i];
}

for (let i = 1; i < 7; i++) {
  colorAnimation(i, screenDiv[i], screenBody[i]);
}

function textAnimation(sreen, divA, aTo, divB, bTo) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: partition[sreen - 1],
      start: "top 55% ",
      end: "bottom 45%",
      pinSpacing: false,
      scrub: 1,
      toggleActions: "restart pause reverse none",
      fastScrollEnd: true,
    },
  });

  tl.to(divA, {
    duration: 0.1,
    y: aTo,
  });
  tl.to(divB, {
    duration: 0.1,
    y: bTo,
  });
}

const cirTop = document.getElementsByClassName("cirTop");
textAnimation(1, cirTop[0], 40, cirTop[1], 40);
for (let i = 1; i < 7; i++) {
  textAnimation(i, cirTop[i - 1], 75, cirTop[i], 40);
}

const cirMid = document.getElementsByClassName("cirMid");
textAnimation(1, cirMid[0], 80, cirMid[1], 80);
for (let i = 1; i < 7; i++) {
  textAnimation(i, cirMid[i - 1], 165, cirMid[i], 80);
}

const cirBot = document.getElementsByClassName("cirBot");
textAnimation(1, cirBot[0], 35, cirBot[1], 35);
for (let i = 1; i < 7; i++) {
  textAnimation(i, cirBot[i - 1], 70, cirBot[i], 35);
}

const rightCardFill = document.getElementsByClassName("rightCardFill");
textAnimation(1, rightCardFill[0], 90, rightCardFill[1],0);
textAnimation(6, rightCardFill[1], 180, rightCardFill[2], 90);

const rightBigTextFill = document.getElementsByClassName("rightBigTextFill");
textAnimation(1, rightBigTextFill[0], 90, rightBigTextFill[1], 90);
for (let i = 1; i < 7; i++) {
  textAnimation(i, rightBigTextFill[i - 1], 180, rightBigTextFill[i], 90);
}

const rightSmallTextFill = document.getElementsByClassName("rightSmallTextFill");
textAnimation(1, rightSmallTextFill[0], 90, rightSmallTextFill[1], 90);
for (let i = 1; i < 7; i++) {
  textAnimation(i, rightSmallTextFill[i - 1], 180, rightSmallTextFill[i], 90);
}

const rightBottomTextFill = document.getElementsByClassName("rightBottomTextFill");
textAnimation(1, rightBottomTextFill[0], 90, rightBottomTextFill[1], 90);
for (let i = 1; i < 7; i++) {
  textAnimation(i, rightBottomTextFill[i - 1], 180, rightBottomTextFill[i], 90);
}

const t = [];

function imageAnimation(sreen, divA, aTo, divB, bTo) {
  t[screen] = gsap.timeline({
    scrollTrigger: {
      trigger: partition[sreen - 1],
      start: "top 55% ",
      end: "bottom 45%",
      pinSpacing: false,
      scrub: 1,
      toggleActions: "restart pause reverse none",
      fastScrollEnd: true
    },
  });

  t[screen].to(divA, {
    duration: 1.5,
    y: aTo,
  });
  t[screen].to(divB, {
    duration:1.5,
    y: bTo,
  });
}

const topImgOneFill = document.getElementsByClassName("topImgOneFill");
imageAnimation(3, topImgOneFill[0], "100vh", topImgOneFill[1], "100vh");
imageAnimation(4, topImgOneFill[1], "0", topImgOneFill[2], "100vh");
imageAnimation(5, topImgOneFill[2], "0", topImgOneFill[3], "100vh");
imageAnimation(6, topImgOneFill[3], "0", topImgOneFill[0], "100vh");

const topImgTwoFill = document.getElementsByClassName("topImgTwoFill");
imageAnimation(1, topImgTwoFill[1], "100vh", topImgTwoFill[2], "100vh");
imageAnimation(2, topImgTwoFill[2], "0", topImgTwoFill[3], "100vh");
imageAnimation(3, topImgTwoFill[3], "0", topImgTwoFill[4], "100vh");
imageAnimation(4, topImgTwoFill[4], "0", topImgTwoFill[5], "100vh");
imageAnimation(5, topImgTwoFill[5], "0", topImgTwoFill[0], "100vh");

const bottomImgOneFill = document.getElementsByClassName("bottomImgOneFill");
imageAnimation(1, bottomImgOneFill[0], "100vh", bottomImgOneFill[1], "-100vh");
imageAnimation(2, bottomImgOneFill[1], "0", bottomImgOneFill[2], "-100vh");
imageAnimation(3, bottomImgOneFill[2], "0", bottomImgOneFill[3], "-100vh");
imageAnimation(4, bottomImgOneFill[3], "0", bottomImgOneFill[4], "-100vh");
imageAnimation(5, bottomImgOneFill[4], "0", bottomImgOneFill[5], "-100vh");
imageAnimation(6, bottomImgOneFill[5], "0", bottomImgOneFill[6], "-100vh");
imageAnimation(7, bottomImgOneFill[6], "0", bottomImgOneFill[0], "-100vh");

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
      el: '.swiper-pagination',
  },
  autoplay:{
    delay:2000,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
});
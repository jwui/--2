const closeBtn = document.querySelector(
  "body > div.side-menu > div.btn-close > span"
);
const bg = document.querySelector(".side-menu .bg");
bg.addEventListener("mouseenter", () => {
  sideMenu.classList.remove("on");
});
const sideMenu = document.querySelector(".side-menu");

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("on");
});
const hamMenu = document.querySelector("#header .center .gnb .hamburger-menu");
hamMenu.addEventListener("click", () => {
  sideMenu.classList.add("on");
});

const gnbLi = document.querySelectorAll("#header .center .gnb > li");
const header = document.querySelector("#header");
const navBarMenu = document.querySelectorAll(".inner-wrapper .navbar a");

let scroll = window.addEventListener("scroll", () => {
  //스크롤할때마다 위치값 offset위치 새로 받아오기

  let sections = document.querySelectorAll(".cont");
  let contStart = []; //반복문으로 받아오기!!

  sections.forEach((item, index) => {
    contStart.push(item.offsetTop);
  });

  //스크롤바의 위치가 cont2구역의 시작위치값
  let scTop = window.scrollY;

  if (scTop >= contStart[0] && scTop <= contStart[1]) {
    navBarMenu.forEach((item, index) => {
      item.style.color = "#fff";
    });
    gnbLi.forEach((item, index) => {
      item.classList.remove("on");
    });
    gnbLi[0].classList.add("on");
    navBarMenu[0].style.color = "orange";
  } else {
    gnbLi[0].classList.remove("on");
    navBarMenu[0].style.color = "#fff";
  }
  if (scTop >= contStart[1] && scTop <= contStart[2]) {
    navBarMenu.forEach((item, index) => {
      item.style.color = "#fff";
    });
    gnbLi.forEach((item, index) => {
      item.classList.remove("on");
    });
    gnbLi[1].classList.add("on");
    navBarMenu[1].style.color = "orange";
  } else {
    gnbLi[1].classList.remove("on");
    navBarMenu[1].style.color = "#fff";
  }
  if (scTop >= contStart[2] && scTop <= contStart[3]) {
    navBarMenu.forEach((item, index) => {
      item.style.color = "#fff";
    });
    gnbLi.forEach((item, index) => {
      item.classList.remove("on");
    });
    gnbLi[2].classList.add("on");
    navBarMenu[2].style.color = "orange";
  } else {
    gnbLi[2].classList.remove("on");
    navBarMenu[2].style.color = "#fff";
  }
  if (scTop >= contStart[3] && scTop <= contStart[4]) {
    navBarMenu.forEach((item, index) => {
      item.style.color = "#fff";
    });
    gnbLi.forEach((item, index) => {
      item.classList.remove("on");
    });
    gnbLi[3].classList.add("on");
    navBarMenu[3].style.color = "orange";
  } else {
    gnbLi[3].classList.remove("on");
    navBarMenu[3].style.color = "#fff";
  }
  if (scTop >= contStart[4] && scTop <= contStart[5]) {
    navBarMenu.forEach((item, index) => {
      item.style.color = "#fff";
    });
    gnbLi.forEach((item, index) => {
      item.classList.remove("on");
    });
    gnbLi[4].classList.add("on");
    navBarMenu[4].style.color = "orange";
  } else {
    gnbLi[4].classList.remove("on");
    navBarMenu[4].style.color = "#fff";
  }
  if (scTop >= contStart[5]) {
    gnbLi.forEach((item, index) => {
      navBarMenu.forEach((item, index) => {
        item.style.color = "#fff";
      });
      item.classList.remove("on");
    });
    gnbLi[5].classList.add("on");
    navBarMenu[5].style.color = "orange";
  } else {
    gnbLi[5].classList.remove("on");
    navBarMenu[5].style.color = "#fff";
  }
  //스크롤바의 위치가 cont2구역의 시작위치값 -40이 위치보다 크다면
  //조건문 이용해서 클래스가 붙고 / 떨어지게 처리
  if (scTop >= contStart[1] - 40) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  gnbLi.forEach((item, index) => {
    item.addEventListener("click", () => {
      contStart[index] = sections[index].offsetTop;
      window.scrollTo({
        top: contStart[index],
        behavior: "smooth",
      });
    });
  });

  navBarMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      contStart[index] = sections[index].offsetTop;
      window.scrollTo({
        top: contStart[index],
        behavior: "smooth",
      });
    });
  });
});

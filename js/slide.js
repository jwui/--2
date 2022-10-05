const circle = document.querySelectorAll(".circle li");
const circleSelector = document.querySelectorAll(".circle li a");
const view = document.querySelector(".view");
const sliderDiv = document.querySelectorAll(
  ".cont4 .center .slider .view  div .img"
);

circle.forEach((item, index) => {
  sliderDiv[index].innerHTML = `<img src="img/testimonial${index + 1}.png" />`;
  item.addEventListener("click", (event) => {
    event.preventDefault(); //페이지 이동 방지 (a, button)
    //슬라이드 움직이는 계산식
    view.style.marginLeft = -100 * index + "%";
    circleSelector.forEach((item, index) => {
      item.classList.remove("select");
    });

    circleSelector[index].classList.add("select");
  });
});

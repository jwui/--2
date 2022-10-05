//객체를 이용해 패러미터 지정하는 구간
let countValue = [
  { add: 12, tag: ".output1", target: 1391, speed: 10 },
  { add: 4, tag: ".output2", target: 445, speed: 10 },
  { add: 1, tag: ".output3", target: 133, speed: 10 },
  { add: 6, tag: ".output4", target: 775, speed: 10 },
  { add: 4, tag: ".output5", target: 555, speed: 10 },
];

let moveCheck = true; //카운트 업 함수 자동실행이 끝난다음에 false값으로 변경

window.addEventListener("scroll", function () {
  let cont3Start = document.querySelector(".facts").offsetTop;
  let scTop = window.scrollY;
  if (scTop >= cont3Start) {
    //forEach문 사용해서 설정된 객체를 한개씩 넣어주는 구간
    if (moveCheck == true) {
      countValue.forEach((element) => {
        countUp(element.add, element.tag, element.target, element.speed);
      });
    }
  }
});

//실제 코드 작동 구간
function countUp(add, tag, target, speed) {
  let num = 0;
  moveCheck = false;

  let autoCount = setInterval(function () {
    num += add;
    if (num >= target) {
      clearInterval(autoCount);
      document.querySelector(tag).innerHTML = target;
    } else {
      document.querySelector(tag).innerHTML = num;
    }
  }, speed);
}

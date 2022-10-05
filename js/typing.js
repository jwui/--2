//타이핑 작성 및 삭제 기능 구현

const text = document.querySelector(".typing");
let context = [
  "Publisher",
  "Web Publisher",
  "Frontend Developer",
  "Backend Developer",
];

let stringNumber = 0; //context 배열변수에 순번값 변경()
let charIndex = 0; //해당 문자열의 순번값
let maxIndex; //변수에 값을 할당하였다

//자동타이핑 기능 구현
let autoTyping = setInterval(() => {
  typing(); //실제 타이핑기능 구현코드가 들어가는 함수 만들어서 호출
}, 200);

function typing() {
  //글자가 타이핑되는 구간
  if (charIndex < context[stringNumber].length) {
    text.innerText += context[stringNumber].charAt(charIndex);
    charIndex++;
    //글자타이핑이 다 끝났을 때
    if (charIndex >= context[stringNumber].length) {
      maxIndex = context[stringNumber].length; //9 12 9 8
      //2초가 지난다음 자동실행 다시 시작
      stopAndStart();
    }
  }
  //글자가 사라지는 구간
  else if (maxIndex >= 0) {
    //Pushlisher 9글자 8번째
    text.innerText = context[stringNumber].substring(0, maxIndex);
    maxIndex--;
    if (maxIndex < 0) {
      charIndex = 0;
      //글자가 다 사라졌으면 stringNumber의 숫자값을 1증가시켜서 다음 문자열이 나옴
      if (stringNumber == context.length - 1) {
        stringNumber = 0;
      } else {
        stringNumber++;
      }
      //2초뒤에 자동실행이 다시 시작
      stopAndStart();
    }
  }
}

function stopAndStart() {
  clearInterval(autoTyping);
  setTimeout(() => {
    autoTyping = setInterval(() => {
      typing();
    }, 200);
  }, 2000);
}

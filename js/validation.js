const userData = document.querySelectorAll(".userdata");
const contactBtn = document.querySelector(".contactbtn");

let dataSet = [
  {
    regExpCheck: /^[가-힣]{2,4}$/,
    success: "이름이 올바르게 입력되었습니다.",
    failure: "2자리부터 4글자까지 한글 이름만 가능합니다",
    clear: false,
  },
  {
    regExpCheck: /^[\w]+\@+[a-z]+\.[a-z]{2,3}$/,
    success: "이메일이 올바르게 입력되었습니다.",
    failure: "이메일 형식이 올바르지 않습니다.",
    clear: false,
  },
  {
    regExpCheck: /^(010)\-[0-9]{4}\-\d{4}$/,
    success: "전화번호가 올바르게 입력되었습니다",
    failure: "전화번호 형식이 올바르지 않습니다",
    clear: false,
  },
  {
    regExpCheck: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
    success: "주제가 올바르게 입력되었습니다",
    failure: "주제를 입력해주세요",
    clear: false,
  },
  {
    regExpCheck: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
    success: "메세지가 올바르게 입력되었습니다",
    failure: "메세지를 입력해주세요",
    clear: false,
  },
];
contactBtn.addEventListener("click", () => {
  userData.forEach((item, index) => {
    ValidateData(item, dataSet[index]);
  });
});

//요구사항 체크
let clearCondition = false;

//요구사항 확인 구간
function ValidateData(selector, data) {
  let insertedData = selector.value;
  let checkValidity = data.regExpCheck.test(insertedData);
  //유효할때
  if (checkValidity == true) {
    selector.parentElement.className = "input_box yes";
    // selector.innerHTML = data.success;
    data.clear = true;
    //유효하지 않을때
  } else {
    selector.parentElement.className = "input_box no";
    // selector.innerHTML = data.failure;
    data.clear = false;
  }
}

//버튼 클릭시 요구조건 맞는지 띄워주기
contactBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearCondition = dataSet.every((element) => element.clear == true);

  if (clearCondition == true) {
    alert("모든 정보가 올바르게 입력되었습니다.");
  } else {
    alert("입력하신 정보를 확인바랍니다.");
  }
});

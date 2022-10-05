//배열과 객체를 이용한 데이터 세팅
let listData = [
  {
    iconSrc: "check_circle",
    title: "Unique Layout",
    content:
      "A robust, multipurpose template built with modularity at the core.",
  },
  {
    iconSrc: "fullscreen",
    title: "Online Live Support",
    content:
      "You can build your site in-browser with modular interface blocks.",
  },
  {
    iconSrc: "enable",
    title: "Responsive Design",
    content: "There are many variations of passages of Lorem Ipsum available",
  },
];

//반복문을 이용한 태그 동적 생성
let contents = document.querySelector(".cont2 .center .container .wrap");
let contentsServe = "";

//객체를 통한 동적태그 삽입구간
listData.forEach((element) => {
  contentsServe += `
    <div class="list">
      <div class="contents">
        <div class="icon">
          <span class="material-symbols-outlined">${element.iconSrc}</span>
        </div>
        <div class="textbox">
          <h2>${element.title}</h2>
          <p>${element.content}</p>
        </div>
      </div>
    </div>
    `;
});
contents.innerHTML = contentsServe;

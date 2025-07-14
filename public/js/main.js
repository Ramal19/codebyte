

let slideBox = document.querySelector('.slide-box');

let slideFirst = slideBox.innerHTML =   `
    <div class="slide-first">
        <div class="slide-first-text">
            <h1>Learning that gets you</h1>
            <p>Skills for your present (and your future). Get started with us.</p>
    </div>
`;

let slideSecond = slideBox.innerHTML = `
    <div class="slide-second">
        <div class="slide-second-text">
            <h1>Skills that drive you forward</h1>
            <p>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
            <div class="slide-second-btn">
                <button class="btn">Get started</button>
                <button class="btn">Learn more</button>
            </div>
        </div>
`;

let arr = [slideFirst, slideSecond];
let index = 0;
slideBox.innerHTML = arr[index];

setInterval(() => {
    index++;
    if (index >= arr.length) {
        index = 0;
    }
    slideBox.innerHTML = arr[index];
}, 3000);

let btns = document.querySelectorAll(".courses-lists > button");

btns.forEach((btn => {
    btn.addEventListener("click", ()=>{
        btns.forEach((b => b.style.borderBottom = "none"));
        btn.style.borderBottom = "1px solid #9963fb";
    })
}))

let coursesItem = document.querySelector(".courses-item-text");
let coursesItemArr = ["ChatGPT", "Python", "JavaScript", "HTML & CSS", "React", "Node.js"];

let indexItem = 0;

coursesItem.innerText = coursesItemArr[indexItem];

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const header = document.querySelector("header");

  if(menuToggle) {
    menuToggle.addEventListener("click", () => {
      header.classList.toggle("open");
    });
  }
});

let loginBtn = document.getElementById("login-btn");
let registerBtn = document.getElementById("register-btn");

loginBtn.addEventListener("click", () => {
    window.location.href = "./public/login/register.html";
});

registerBtn.addEventListener("click", () => {
    window.location.href = "./public/login/register.html";
});

let videoRoll = document.querySelectorAll(".courses > div");

videoRoll.forEach((video) => {
    video.addEventListener("click", () => {
        window.location.href = "./public/videos/video.html";
    });
});
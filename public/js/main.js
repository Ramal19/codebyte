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
let slideThird = slideBox.innerHTML = `<h1>sssssaaaa</h1>`;
let slideFourth = slideBox.innerHTML = `<h1>cvcvvcvv</h1>`;

let arr = [slideFirst, slideSecond, slideThird, slideFourth];
let index = 0;
slideBox.innerHTML = arr[index];

setInterval(() => {
    index++;
    if (index >= arr.length) {
        index = 0;
    }
    slideBox.innerHTML = arr[index];
}, 3000);
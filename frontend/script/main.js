// // Data göndərmək (POST)
// fetch("http://localhost:5000/api/users", {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({name: "Ramil", age: 67})
// })
// .then(res => res.json())
// .then(data => console.log(data));

// fetch("http://localhost:5000/api/users")
// .then(res => res.json())
// .then(data => console.log(data));



let searchInp = document.getElementById("search-inp");
let searchIcon = document.getElementById("search-icon");
let scrollBtn = document.getElementById("scrollBtn");
const exitBtn = document.getElementById("exitBtn")
const timerModal = document.querySelector(".timer-fade")
const locationCourse = document.getElementById("locationCourse")
const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const courseCard = document.querySelector(".course-card")

courseCard.addEventListener("click", () => {

    window.location.href = "../document/ders.html"
})


loginBtn.onclick = () => {
    window.location.href = "../document/login.html"
}

registerBtn.onclick = () => {
    window.location.href = "../document/register.html"
}

if (localStorage.getItem("exitBtn") === "true" || localStorage.getItem("locationCourse") === "true") {
    timerModal.style.display = "none";
}

exitBtn.addEventListener("click", () => {

    timerModal.style.display = "none";
    localStorage.setItem("exitBtn", "true");
})

locationCourse.onclick = () => {

    window.location.href = "./document/kurs.html"
    localStorage.setItem("locationCourse", "true");
}

// COUNTDOWN 1 AYLIQ

const countDownDate = new Date();
countDownDate.setMonth(countDownDate.getMonth() + 1);

const countdownEl = document.querySelector(".countdown");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
        clearInterval(timer);
        countdownEl.innerHTML = "<span>Vaxt bitdi</span>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
        <span>${days} gün</span> 
        <span>${hours} saat</span> 
        <span>${minutes} dəq</span> 
        <span>${seconds} san</span>
    `;
}, 1000);

window.addEventListener("scroll", () => {
    if (window.scrollY <= 100) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block"
    }
})

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

searchInp.addEventListener("input", () => {

    if (searchInp.value != "") {

        searchIcon.style.display = "inline-block";
    } else {

        searchIcon.style.display = "none";
    }
})
let slideBox = document.querySelector(".slide-box");

let slideFirst = `
    <img id="slide-img" src="../image/slide-photo.png" alt="Error 404">
    <div class="img-text">
        <h1>Proqramlaşdırma öyrənmək heç vaxt bu qədər asan olmayıb!</h1>
        <p>CodeByte ilə proqramlaşdırma biliklərinizi artırın və karyeranızı yeni zirvələrə daşıyın. İndi başlayın!</p>
        <button class="begin-button">Başla</button>
    </div>`;

let slideSecond = `
    <img id="slide-img" src="../image/slide-photo-second.png" alt="Error 404">
    <div class="img-text-second">
        <h1>Texnologiya ilə gələcəyini qur!</h1>
        <p>AI və proqramlaşdırma bacarıqları ilə karyerana yeni nəfəs ver. CodeByte ilə gələcəyə addım at!</p>
        <button class="begin-button">Başla</button>
    </div>`;

let arr = [slideFirst, slideSecond];
let index = 0;

// Slaydı göstərmək və butona event bağlamaq üçün funksiya
function showSlide(i) {
    slideBox.innerHTML = arr[i];

    // Slayd yükləndikdən sonra butonu seçirik
    let beginButton = slideBox.querySelector(".begin-button");
    beginButton.addEventListener("click", () => {
        window.scrollTo({
            top: 708,
            behavior: "smooth"
        })
    });
}

// İlk slaydı göstəririk
showSlide(index);

// Avtomatik dəyişmə
setInterval(() => {
    index++;
    if (index > arr.length - 1) {
        index = 0;
    }
    showSlide(index);
}, 5000);

let books = document.getElementById("booksHtmlSwitch");

books.addEventListener("click", () => {
    window.location.href = "books.html";
})

let normalBtn = document.querySelector(".normal");
let specialBtn = document.querySelector(".special");

let offersForNormal = document.querySelector(".offers-for-normal");
let offersForSpecial = document.querySelector(".offers-for-special");


normalBtn.addEventListener("click", () => {
    normalBtn.style.backgroundColor = "#2da0fd";
    normalBtn.style.color = "#fff";

    specialBtn.style.backgroundColor = "transparent";
    specialBtn.style.color = "#000";

    offersForNormal.style.display = "flex";
    offersForSpecial.style.display = "none";
});

specialBtn.addEventListener("click", () => {
    specialBtn.style.backgroundColor = "#2da0fd";
    specialBtn.style.color = "#fff";
    specialBtn.style.borderRadius = "9999px";

    normalBtn.style.backgroundColor = "transparent";
    normalBtn.style.color = "#000";

    offersForNormal.style.display = "none";
    offersForSpecial.style.display = "flex";
});

// ANSWER BOX JS
let questionBox = document.querySelectorAll(".faq-card > h3");
let answerBox = document.querySelectorAll(".faq-card > p");

questionBox.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (answerBox[index].style.display === "none") {
            answerBox[index].style.display = "block";
        } else {
            answerBox[index].style.display = "none";
        }
    });
});

answerBox.forEach((element) => {
    element.style.display = "none";
});

let heartIcon = document.querySelector(".bi-heart");
let cartIcon = document.querySelector(".bi-cart");

heartIcon.onclick = () => {

    window.location.href = "./document/wishlist.html"
}

heartIcon.addEventListener("mouseover", () => {

    heartIcon.classList.replace("bi-heart", "bi-heart-fill");
    heartIcon.style.cssText = "color: red; font-size: 24px;";
})

heartIcon.addEventListener("mouseout", () => {

    heartIcon.classList.replace("bi-heart-fill", "bi-heart");
    heartIcon.style.cssText = "color: #000; font-size: 24px;"
})

cartIcon.addEventListener("mouseover", () => {

    cartIcon.classList.replace("bi-cart", "bi-cart-fill");
    cartIcon.style.cssText = "font-size: 24px"
})

cartIcon.addEventListener("mouseout", () => {

    cartIcon.classList.replace("bi-cart-fill", "bi-cart");
})


document.querySelectorAll("#wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let card = btn.closest(".course-card");

        let course = {
            id: card.dataset.id,
            title: card.dataset.title,
            price: card.dataset.price
        };

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        if (!wishlist.some(item => item.id === course.id)) {
            wishlist.push(course);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            alert(`${course.title} sevimlilərə əlavə olundu!`);
        } else {
            alert(`${course.title} artıq sevimlilərdədir!`);
        }
    });
});

const userData = localStorage.getItem("registeredUser");
const userInfo = document.getElementById("userInfo");

if (userData) {
    // Əgər istifadəçi məlumatı varsa
    const user = JSON.parse(userData);

    // Qeydiyyat düyməsini gizlədirik
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";

    // İstifadəçi məlumatlarını göstəririk
    userInfo.innerHTML = `
        <p><strong>İstifadəçi:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
} else {
    // Əgər qeydiyyat yoxdursa, düymə işlək qalsın
    registerBtn.addEventListener("click", () => {
        window.location.href = "register.html";
    });
    loginBtn.addEventListener("click", ()=>{
        window.location.href = "login.html";

    })
}
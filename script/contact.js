let sendBtn = document.getElementById("sendBtn");
let empty = document.querySelectorAll(".empty");

sendBtn.addEventListener("click", () => {

    const messages = [
        "Adınızı qeyd edin!",
        "Soyadınızı qeyd edin!",
        "Emailinizi qeyd edin",
        "Telefon nömrənizi qeyd edin!",
        "Mesajınızı qeyd edin!"
    ]

    for (let i = 0; i < empty.length; i++) {

        empty.forEach(el => {
            
            if (el.value === "") {
                el.style.border = "1px solid red"
            }
        });

        let el = empty[i];

        if (el.value.trim() === "") {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${messages[i]} Boş qalmamalıdır!`,
            });

            el.style.border = "1px solid red";

            break;
        } else {

            el.style.border = "1px solid #ccc";
        }
    }

})
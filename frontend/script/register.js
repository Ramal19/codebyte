const reg = document.getElementById("reg");

// reg.onclick = () => { window.location.href = "./login.html" }

const form = document.getElementById("regForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        username: form.username.value,
        email: form.email.value,
        password: form.password.value
    };
    const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    const json = await res.json();
    document.getElementById("msg").innerText = json.message;
});

console.log(form);

let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;

  document.getElementById("form-title").innerText = isLogin ? "Login" : "Sign Up";
  document.querySelector("button").innerText = isLogin ? "Login" : "Sign Up";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (isLogin) {
    if (user === savedUser && pass === savedPass) {
      msg.style.color = "green";
      msg.innerText = "Login successful ✅";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);

    } else {
      msg.style.color = "red";
      msg.innerText = "Invalid username or password ❌";
    }

  } else {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    msg.style.color = "green";
    msg.innerText = "Account created successfully ✅";
  }
}

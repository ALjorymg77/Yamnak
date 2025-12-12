// Parent Login Handler
function handleParentLogin() {
  const username = document.getElementById("username").value.trim()
  const password = document.getElementById("password").value
  const errorMsg = document.getElementById("errorMsg")

  if (!username || !password) {
    errorMsg.textContent = "الرجاء إدخال اسم المستخدم وكلمة المرور"
    return
  }

  if (username === "admin" && password === "1234") {
    localStorage.setItem("parentLoggedIn", "true")
    window.location.href = "home.html"
  } else {
    errorMsg.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة"
  }
}

// Child Login Handler
function handleChildLogin() {
  // Placeholder for child login logic
  console.log("Child login logic here")
}

// Navigation Functions
function goToChildLogin() {
  window.location.href = "child-login.html"
}

function goToHome() {
  window.location.href = "index.html"
}

// Enter key support
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input")
  inputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (window.location.pathname.includes("child-login")) {
          handleChildLogin()
        } else {
          handleParentLogin()
        }
      }
    })
  })
})

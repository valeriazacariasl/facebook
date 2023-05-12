let eyeIcon = document.getElementById("eye-close");


eyeIcon.addEventListener("click", function() {
  let passwordInput = document.querySelector(".password input");
  let passwordType = passwordInput.getAttribute("type");

  if (passwordType === "password") {
    passwordInput.setAttribute("type", "text");
    eyeIcon.src = "img/hidden.png"; 
  } else {
    passwordInput.setAttribute("type", "password");
    eyeIcon.src = "img/visible.png"; 
  }
});


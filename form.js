document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const reason = document.getElementById("supportReason");
    const contact = document.getElementById("contact");

    if (!firstName.value.trim()) {
      firstName.nextElementSibling.textContent = "required";
      isValid = false;
    }

    if (!lastName.value.trim()) {
      lastName.nextElementSibling.textContent = "required";
      isValid = false;
    }

    if (!email.value.trim()) {
      email.nextElementSibling.textContent = "required";
      isValid = false;
    }

    if (!password.value.trim()) {
      password.nextElementSibling.textContent = "required";
      isValid = false;
    }

    if (!reason.value.trim()) {
      reason.nextElementSibling.textContent = "required";
      isValid = false;
    }

    const sexRadios = document.getElementsByName("sex");
    let selectedSex = "";
    for (let radio of sexRadios) {
      if (radio.checked) {
        selectedSex = radio.value;
        break;
      }
    }

    const sexError = document.getElementById("sexError");
    if (!selectedSex) {
      sexError.textContent = "required";
      isValid = false;
    }

    if (isValid) {
      localStorage.setItem("firstName", firstName.value);
      localStorage.setItem("lastName", lastName.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("password", password.value);
      localStorage.setItem("contact", contact.value);
      localStorage.setItem("sex", selectedSex);
      localStorage.setItem("reason", reason.value);

      window.location.href = "proj_profile_andales.html"; 
    }
  });
});

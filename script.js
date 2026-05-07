function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();
});

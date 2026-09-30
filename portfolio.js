(function () {
  emailjs.init({
    publicKey: "DKhfwnSwCiY2ja0Va",
  });
})();

const contactForm = document.getElementById("contact-form");
const button = contactForm.querySelector(".btn-two");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Prevent multiple clicks
  button.disabled = true;
  button.textContent = "Sending...";

  // Remove old message
  const oldMessage = document.querySelector(".form-message");

  if (oldMessage) {
    oldMessage.remove();
  }

  emailjs
    .sendForm(
      "service_qwndiqh",
      "template_yl7dbnp",
      contactForm
    )
    .then(function () {

      // Create success message
      const message = document.createElement("p");

      message.className = "form-message success-message";
      message.textContent = "✓ Message sent successfully!";

      contactForm.appendChild(message);

      // Clear form
      contactForm.reset();

      // Restore button
      button.disabled = false;
      button.textContent = "send message";

    })
    .catch(function (error) {

      console.error("EmailJS Error:", error);

      // Create error message
      const message = document.createElement("p");

      message.className = "form-message error-message";
      message.textContent =
        "✕ Something went wrong. Please try again.";

      contactForm.appendChild(message);

      // Restore button
      button.disabled = false;
      button.textContent = "send message";

    });
});
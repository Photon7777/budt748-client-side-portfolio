document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      event.stopPropagation();
      contactForm.classList.add("was-validated");
      return;
    }

    const data = new FormData(contactForm);
    const name = data.get("name");
    const email = data.get("email");
    const topic = data.get("topic");
    const message = data.get("message");
    const subject = encodeURIComponent(`${topic} — message from ${name}`);
    const body = encodeURIComponent(`Hi Sai Praneeth,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);

    document.querySelector("#form-status").textContent = "Opening your email application…";
    window.location.href = `mailto:lakhrav@umd.edu?subject=${subject}&body=${body}`;
  });
}

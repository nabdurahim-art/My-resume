const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

/* Resume tabs */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* Contact form: open the visitor's email application */
const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim() || "Portfolio project enquiry";
  const message = document.getElementById("message").value.trim();

  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || "Not provided"}\n\n` +
    `${message}`;

  window.location.href =
    `mailto:nshimiyi2003@gmail.com?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
});

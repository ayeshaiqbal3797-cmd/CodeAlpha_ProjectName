// Task 3: Ayesha Iqbal Portfolio Script

// Typing Animation
const words = [
  "CS Student",
  "Frontend Developer",
  "CodeAlpha Intern"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typedElement");

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typedElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedElement) typeEffect();
});

// Theme Switcher
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeToggle.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
});

// Restore Theme Preference
const savedTheme = localStorage.getItem("portfolioTheme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active Link Scroll Spy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Project Filters
const projFilterBtns = document.querySelectorAll(".proj-filter-btn");
const projectCards = document.querySelectorAll(".project-card");

projFilterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    projFilterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Real Email Delivery Contact Form Handler (FormSubmit.co API to ayeshaiqbal3797@gmail.com)
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const submitFormBtn = document.getElementById("submitFormBtn");
const btnText = document.getElementById("btnText");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const mailtoFallbackLink = document.getElementById("mailtoFallbackLink");

// Dynamically update mailto link as user types
function updateMailtoLink() {
  const name = encodeURIComponent(nameInput ? nameInput.value : "");
  const email = encodeURIComponent(emailInput ? emailInput.value : "");
  const bodyMsg = encodeURIComponent(messageInput ? messageInput.value : "");
  if (mailtoFallbackLink) {
    mailtoFallbackLink.href = `mailto:ayeshaiqbal3797@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${bodyMsg}`;
  }
}

if (nameInput) nameInput.addEventListener("input", updateMailtoLink);
if (emailInput) emailInput.addEventListener("input", updateMailtoLink);
if (messageInput) messageInput.addEventListener("input", updateMailtoLink);

contactForm.addEventListener("submit", (e) => {
  // Allow native form POST to submit through hidden_form_iframe to avoid CORS blocking on local files
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    return;
  }

  // Update button text to indicate sending
  btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending to ayeshaiqbal3797@gmail.com...';
  submitFormBtn.disabled = true;

  // Update mailto link dynamically
  updateMailtoLink();

  // Show Toast Confirmation
  setTimeout(() => {
    btnText.innerHTML = 'Send Email Message <i class="fa-solid fa-paper-plane"></i>';
    submitFormBtn.disabled = false;
    
    toast.innerHTML = `<i class="fa-solid fa-envelope-circle-check"></i> Message sent to <strong>ayeshaiqbal3797@gmail.com</strong>! Check your inbox/spam.`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 6000);

    contactForm.reset();
  }, 1200);
});

// Resume Download Button (Generates Ayesha Iqbal's Resume)
const downloadResumeBtn = document.getElementById("downloadResumeBtn");
downloadResumeBtn.addEventListener("click", () => {
  const resumeContent = `=====================================================
AYESHA IQBAL — RESUME & PORTFOLIO SUMMARY
=====================================================
Email: ayeshaiqbal3797@gmail.com
Institution: University of Engineering & Technology (UET), Lahore
Field: B.S. Computer Science (Session 2025+, Completed 3 Semesters)

-----------------------------------------------------
EDUCATION
-----------------------------------------------------
1. B.S. Computer Science (2025 — Present)
   University of Engineering & Technology (UET), Lahore
   - Status: Completed 3 Semesters with strong academic standing.

2. Higher Secondary School Certificate (HSSC — Pre-Medical) (2023 — 2025)
   Punjab Group of Colleges Jaranwala (Marks: 988 / 1100 — 89.82%)

3. Secondary School Certificate (SSC — Science / Matric) (2021 — 2023)
   AW Grammer High School (Marks: 1071 / 1100 — 97.36%)

-----------------------------------------------------
INTERNSHIP & EXPERIENCE
-----------------------------------------------------
Frontend Development Intern | CodeAlpha (2026)
- Built interactive 30-Item Image Gallery with localStorage persistence and Lightbox viewer.
- Designed glassmorphic Calculator with scientific math engine & history log.
- Created responsive personal Developer Portfolio site.
- Implemented Web Audio API Music Player with 22+ tracks, live canvas visualizer & custom playlist storage.

-----------------------------------------------------
SKILLS
-----------------------------------------------------
- Languages & Core: HTML5, CSS3, JavaScript (ES6+), C++, Data Structures, OOP
- Frameworks & Web: CSS Grid, Flexbox, Web Audio API, Canvas, Glassmorphism, localStorage API
- Tools: Git, GitHub, VS Code
=====================================================`;

  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Ayesha_Iqbal_Resume.txt";
  a.click();
  URL.revokeObjectURL(url);
});

// Intercept Anchor Links to Suppress Browser Status Bar Tooltips & file:// URL previews
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    this.blur(); // Remove focus status tooltip
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navigation Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Sample member data
const teamMembers = [
  {
    name: "Vardhan",
    role: "President",
    image: "imgs/img1.jpg",
  },
  {
    name: "Sathwika",
    role: "Vice President",
    image: "imgs/img2.jpeg",
  },
  {
    name: "Aishwarya",
    role: "Secretary",
    image: "imgs/img3.jpg",
  },
  // Add more members as needed
];

// Populate member cards
const membersGrid = document.querySelector(".members-grid");

function createMemberCard(member) {
  return `
        <div class="member-card">
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <div class="member-social">
                    <a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    `;
}

function populateMembers() {
  membersGrid.innerHTML = teamMembers
    .map((member) => createMemberCard(member))
    .join("");
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", populateMembers);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for fixed header
        behavior: "smooth",
      });
      // Close mobile menu after clicking
      navLinks.classList.remove("active");
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(20px)";
  observer.observe(section);
});

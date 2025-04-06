document.addEventListener("DOMContentLoaded", () => {
  // Redirect for specific nav items
  document.getElementById("latest-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "latestbook.html";
  });

  document.getElementById("used-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "usedbook.html";
  });

  // Optional: General nav links with alert
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.id !== "latest-link" && link.id !== "used-link") {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert('Navigating to ${link.textContent} section...');
      });
    }
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  searchInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      alert('Searching for "${searchInput.value}"');
    }
  });

  // Login buttons
  document.getElementById("seller-login")?.addEventListener("click", () => {
    window.location.href = "seller-login.html";
  });

  document.getElementById("purchaser-login")?.addEventListener("click", () => {
    window.location.href = "purchaser-login.html";
  });

  // Book cards
  const books = document.querySelectorAll(".book-card");
  books.forEach(book => {
    book.addEventListener("click", () => {
      const title = book.getAttribute("data-title") || "Book";
      alert('Opening details for: ${title}');
    });
  });

  // Social links
  document.getElementById("insta-link")?.addEventListener("click", () => {
    window.open("https://instagram.com/iam_himanshuydv_", "_blank");
  });

  document.getElementById("whatsapp-link")?.addEventListener("click", () => {
    window.open("https://wa.me/+919289663498", "_blank");
  });
});
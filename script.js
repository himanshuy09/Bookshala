document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(".category-link");
categoryLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = link.dataset.category;
    document.querySelectorAll(".category-item").forEach(item => {
      item.addEventListener("click", () => {
        const category = item.getAttribute("data-category");
        window.location.href = '${category.toLowerCase()}.html'; // e.g., novel.html
      });
    });
    // You can later replace this alert with code to filter book cards
  });
});
  // Redirect for specific nav items
  document.getElementById("latest-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "latestbook.html";
  });

  document.getElementById("used-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "usedbook.html";
  });

  // Optional: General nav links with alert (excluding Upload Book)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    const linkId = link.id;

    if (linkId !== "latest-link" && linkId !== "used-link" && linkId !== "upload-link") {
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
      console.log('Searching for "${searchInput.value}"');
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
    window.open("https://instagram.com/bookshala_", "_blank");
  });

  document.getElementById("whatsapp-link")?.addEventListener("click", () => {
    window.open("https://wa.me/+919289663498", "_blank");
  });
  document.getElementById("search-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const searchTerm = this.value.toLowerCase().trim();
      const books = document.querySelectorAll(".book");
      let found = false;
  
      books.forEach(book => {
        const title = book.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          book.scrollIntoView({ behavior: "smooth", block: "center" });
          book.style.border = "2px solid green";
          found = true;
        } else {
          book.style.border = "none";
        }
      });
  
      const messageDiv = document.getElementById("search-message");
      if (!found && searchTerm !== "") {
        messageDiv.textContent = "No matching book found.";
        messageDiv.style.display = "block";
      } else {
        messageDiv.style.display = "none";
      }
    }
  });
  
});

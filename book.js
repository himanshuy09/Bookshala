// Book Data Object
const bookData = {
  // Latest Books
  book1: {
    title: "Data Structure Using C++",
    price: "₹320",
    image: "book1.jpg",
    description: "Comprehensive guide to data structures using C++.",
      language: "English",
      pages: "432",
      isbn: "9789389318697",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2023"
  },
  book2: {
    title: "Computer Science & Information Technology",
    price: "₹215",
    image: "book2.jpg",
    description: "Widely used textbook for Java programming language.",
      language: "English",
      pages: "1248",
      isbn: "9781260440232",
      width: "15cm",
       height: "23.5cm",
       weight: "540g",
      binding: "Paperback",
      year: "2021"
    
  },
  book3: {
    title: "Computer Fundaments",
    image: "book3.jpg",
    author: "Author 3",
    description: "Covers all basic and fundaments of Computer.",
    price: "₹468",
    language: "English",
    pages: 520,
    isbn: "9782345678901",
    width: "15cm",
    height: "23.5cm",
    weight: "540g",
    binding: "Paperback",
    year: "2021"
  },
  book4: {
    title: "Python(For Beginners)",
    image: "book4.jpg",
    author: "Author 4",
    description: "Fundamentals of Python for B.Tech ,BCA , BSC(CS/IT) and MCA students.",
    price: "₹195",
    language: "English",
    pages: 430,
    isbn: "9783456789012",
    width: "14.5cm",
    height: "22cm",
    weight: "510g",
    binding: "Paperback",
    year: "2022"
  },
  book5: {
    title: "Engineering Mathematics(Probablity & Statistics)",
    image: "book5.jpg",
    author: "Author 5",
    description: "Clear concepts of Mathematics ",
    price: "₹660",
    language: "English",
    pages: 400,
    isbn: "9784567890123",
    width: "14cm",
    height: "21.5cm",
    weight: "490g",
    binding: "Paperback",
    year: "2020"
  },
  book6: {
    title: "Data Structures & Algorithm in Java",
    image: "book6.jpg",
    author: "Author 6",
    description: "Introduction to Data Structures & Algorithm in Java with examples.",
    price: "₹749",
    language: "English",
    pages: 350,
    isbn: "9785678901234",
    width: "14cm",
    height: "22cm",
    weight: "470g",
    binding: "Paperback",
    year: "2021"
  },
  book7: {
    title: "Computer Network and Cyber Security",
    image: "book7.jpg",
    author: "Author 7",
    description: "Complete reference for Computer Network and Cyber Security",
    price: "₹420",
    language: "English",
    pages: 360,
    isbn: "9786789012345",
    width: "14.5cm",
    height: "22.5cm",
    weight: "480g",
    binding: "Paperback",
    year: "2019"
  },
  book8: {
    title: "Python for Data Analysis",
    image: "book8.jpg",
    author: "Author 8",
    description: "Python for Data Analysis",
    price: "₹225",
    language: "English",
    pages: 400,
    isbn: "9787890123456",
    width: "15cm",
    height: "23cm",
    weight: "500g",
    binding: "Paperback",
    year: "2020"
  },
  book9: {
    title: "Two by Two (Nicholas Sparks)",
    image: "book9.jpg",
    author: "Shiv Khera",
    description: "Empowering readers to achieve personal and professional success.",
    price: "₹90",
    language: "English",
    pages: 280,
    isbn: "9788901234567",
    width: "13.5cm",
    height: "21cm",
    weight: "450g",
    binding: "Paperback",
    year: "2018"
  },
  book10: {
    title: "You Only Live Once (Changle Stuti)",
    image: "book10.jpg",
    author: "Old Author",
    description: "Used but valuable DBMS textbook at a low price.",
    price: "₹70",
    language: "English",
    pages: 400,
    isbn: "9789012345678",
    width: "14cm",
    height: "22cm",
    weight: "470g",
    binding: "Paperback",
    year: "2015"
  },
  book11: {
    title: "Used Book - OS",
    image: "book11.jpg",
    author: "Old Author 2",
    description: "Second-hand OS book in fair condition.",
    price: "₹90",
    language: "English",
    pages: 380,
    isbn: "9780123456789",
    width: "14cm",
    height: "21.5cm",
    weight: "460g",
    binding: "Paperback",
    year: "2016"
  },
  book12: {
    title: "PYQ - Computer Networks",
    image: "book12.jpg",
    author: "ExamCell",
    description: "Previous year questions for CN with solutions.",
    price: "₹50",
    language: "English",
    pages: 250,
    isbn: "9781122334455",
    width: "14cm",
    height: "21cm",
    weight: "430g",
    binding: "Paperback",
    year: "2023"
  },
  book13: {
    title: "PYQ - Java Programming",
    image: "book13.jpg",
    author: "ExamCell",
    description: "Java PYQs with detailed solutions for revision.",
    price: "₹80",
    language: "English",
    pages: 260,
    isbn: "9782233445566",
    width: "14cm",
    height: "21cm",
    weight: "440g",
    binding: "Paperback",
    year: "2023"
  },
  book14: {
    title: "PYQ - Data Structure",
    image: "book14.jpg",
    author: "ExamCell",
    description: "DS PYQs useful for semester exams.",
    price: "₹70",
    language: "English",
    pages: 240,
    isbn: "9783344556677",
    width: "14cm",
    height: "21cm",
    weight: "420g",
    binding: "Paperback",
    year: "2023"
  },
  book15: {
    title: "Novel - Wings of Fire",
    image: "book15.jpg",
    author: "Dr. A.P.J Abdul Kalam",
    description: "Autobiography of India's Missile Man, inspiring millions.",
    price: "₹70",
    language: "English",
    pages: 250,
    isbn: "9784455667788",
    width: "13.5cm",
    height: "21cm",
    weight: "450g",
    binding: "Paperback",
    year: "2016"
  },
  book16: {
    title: "Novel - The Alchemist",
    image: "book16.jpg",
    author: "Paulo Coelho",
    description: "A philosophical story about chasing one's dreams.",
    price: "₹50",
    language: "English",
    pages: 200,
    isbn: "9785566778899",
    width: "13.5cm",
    height: "20.5cm",
    weight: "440g",
    binding: "Paperback",
    year: "2015"
  },
  // Add book3 to book16 similarly...

  // Used Books
  booka: {
    title: "Financial Accounting & Management",
    price: "₹130",
    image: "booka.jpg",
    description: "Used textbook covering the basics of accounting.",
      language: "English",
      pages: 158,
      isbn: "9788177092925",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2019"
    
  },
  bookb: {
    title: "Mathematics for XIIth",
    price:"₹130",
    image: "bookb.jpg",
    description: "Used Class 12 mathematics reference book.",
      language: "Hindi",
      pages: 380,
      isbn: "9789388704958",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2020"
  },
  bookc: {
    title: "Sample QP (2023) - Mathematics",
    price:"₹130",
    image: "bookc.jpg",
    description: "Sample question papers for CBSE Mathematics.",
      language: "English",
      pages: 166,
      isbn: "9789394663994",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2023"
  },
  bookd: {
    title: "Chemistry Part I - 12th",
    price: "₹30",
    image: "bookd.jpg",
    description: "Used NCERT Chemistry book for Class 12.",
      language: "English",
      pages: 223,
      isbn: "9788174506340",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2022"
  },
  booke: {
    title: "Physics Part I - 12th",
    price: "₹35",
    image: "booke.jpg",
    description: "Used NCERT Physics book for Class 12.",
      language: "English",
      pages: 276,
      isbn: "9788174505626",
      width: "15cm",
    height: "23.5cm",
    weight: "540g",
      binding: "Paperback",
      year: "2022"
  },
  bookf: {
    title: "Java 2",
    price: "₹130",
    image: "bookf.jpg",
    description: "Java 2 programming book for beginners.",
      language: "English",
      pages: 175,
      isbn: "9780072224208",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2020"
    
  },
  bookg: {
    title: "JEE MAIN PYQ - Chemistry",
    price: "₹130",
    image: "bookg.jpg",
    description: "Previous year questions for JEE Chemistry.",
      language: "English",
      pages: 130,
      isbn: "9789392536399",
      width: "15cm",
      height: "23.5cm",
      weight: "540g",
      binding: "Paperback",
      year: "2023"
    
  }
};

// Function to open book detail page
function openBookDetail(bookId) {
  const book = bookData[bookId];

  if (book) {
    localStorage.setItem("selectedBook", JSON.stringify(book));
    window.location.href = "book-detail.html";
  } else {
    alert("Book details not found.");
  }
}
function checkDelivery() {
  const pin = document.getElementById("pincode").value;
  if (pin.length === 6 && /^\d+$/.test(pin)) {
    alert("Delivery available for Pincode: " + pin);
  } else {
    alert("Please enter a valid 6-digit Pincode");
   }
}

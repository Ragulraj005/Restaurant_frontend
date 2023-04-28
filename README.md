[Restarent.docx](https://github.com/Ragulraj005/Restaurant_frontend/files/11356254/Restarent.docx)
                                                 
                                                 
                                                 Restaurant Project (Front-End)

project-documentation
 
Restaurant       
________________________________________
📝 Table of Contents
•	📔About
•	System Requirements and Software used.
•	Module of the Project
•	Libraries used.
•	Built Using
•	Acknowledgments


🧐 About
The purpose of the restaurant front-end project using HTML, CSS, and JavaScript can be to create an attractive and functional website for a restaurant. In this website we included features such as a menu with images and price, customer reviews, contact information, and a map of the restaurant's location.
In this website can be designed to be responsive, so it can be viewed on various devices, including desktop computers, laptops, tablets, and smartphones. 
🔧 System Requirements and Software used
A modern computer with a dual-core processor, 4 GB of RAM, and 500 GB of hard disk space should be sufficient for most small to medium-sized organizations.
By meeting these system requirements, the Employment Management System project can be effectively developed, deployed, and used by organizations to manage their employees' information and tasks.
VSCODE - Visual Studio Code (VSCode) is a free and open-source code editor developed by Microsoft. It provides a modern and feature-rich environment for writing, debugging, and deploying code across a wide range of programming languages and platforms

Module of the Project:

 
a.Desktop View
let menu = document.querySelector('#menu-bars'); let navbar = document.querySelector('.navbar'); menu.onclick = () => { menu.classList.toggle('fa-times'); navbar.classList.toggle('active'); } 
•	The first two lines retrieve the DOM elements with IDs "menu-bars" and "navbar" respectively and assign them to the variables menu and navbar.
•	The onclick method sets up an event listener that listens for a click on the menu element. When the element is clicked, the code inside the curly braces is executed. This code toggles the fa-times class on the menu element and the active class on the navbar element.
let section = document.querySelectorAll('section'); let navlinks = document.querySelectorAll('header .navbar a'); 
•	These two lines retrieve all the section elements and the elements nested within the .navbar in the header of the webpage and assign them to section and navlinks respectively.
window.onscroll = () => { menu.classList.remove('fa-times'); navbar.classList.remove('active'); section.forEach(sec => { let top = window.scrollY; let height = sec.offsetHeight; let offset = sec.offsetTop - 150; let id = sec.getAttribute('id'); if (top >= offset && top < offset + height) { navlinks.forEach(links => { links.classList.remove('active'); document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active'); }); }; }); }
•	The onscroll method sets up an event listener that listens for when the window is scrolled. When the window is scrolled, the code inside the curly braces is executed. This code removes the fa-times and active classes from menu and navbar respectively. Then, it iterates over each section element and checks if the top of the window is within the offset range of the current section. If the window is within the offset range, it removes the active class from all navlinks elements and adds the active class to the a element that has a href attribute that contains the current section's ID.
document.querySelector('#search-icon').onclick = () => { document.querySelector('#search-form').classList.toggle('active'); } document.querySelector('#close').onclick = () => { document.querySelector('#search-form').classList.remove('active'); } 
•	These two lines set up event listeners that listen for clicks on the search icon and the close button respectively. When the search icon is clicked, it toggles the active class on the search-form element. When the close button is clicked, it removes the active class from the search-form element.
var swiper = new Swiper(".home-slider", { space-between: 30, centeredSlides: true, autoplay: { delay: 1500, disableOnInteraction: false, }, pagination: { el: ".swiper-pagination", clickable: true, }, loop: true, }); var swiper = new Swiper(".review-slider", { spaceBetween: 10, centeredSlides: true, autoplay: { delay: 1000, disableOnInteraction: false, }, loop: true, breakpoints: { 0: { slidesPerView: 1, },
 
b.mobile view
 
C.reviewer by using Swiper

1.	<div class="swiper-slide slide">: This creates a div element with two classes: swiper-slide and slide. The swiper-slide class is used by the Swiper library to identify each slide, while the slide class may be custom CSS used by the website.
2.	<i class="fas fa-quote-right"></i>: This creates an i element with two classes: fas and fa-quote-right. These classes are used by the Font Awesome library to display an icon of a right quotation mark.
3.	<div class="user">: This creates a div element with the class user. This div contains information about the reviewer, including their picture and name.
4.	<img src="reviewer4.jpg" alt="">: This creates an img element with the source file reviewer4.jpg and an empty alt attribute. This is the picture of the reviewer.
5.	<div class="user-info">: This creates a div element with the class user-info. This div contains additional information about the reviewer, such as their star rating.
6.	<h3>Gokul</h3>: This creates an h3 element with the text "Gokul". This is the name of the reviewer.
7.	<div class="stars">: This creates a div element with the class stars. This div contains the star rating of the review.
8.	<i class="fas fa-star"></i>: This creates an i element with the classes fas and fa-star. These classes are used by the Font Awesome library to display an icon of a star.
9.	The previous line is repeated five times to create five stars.
10.	</div>: This closes the div element with the class stars.
11.	</div>: This closes the div element with the class user-info.
12.	<p>Amazing food, great atmosphere, and friendly service. ... </p>: This creates a p element with the text of the review. This is where the reviewer writes their thoughts about the restaurant.





Libraries used:
1.	Google Fonts: A free and open-source font library with a wide variety of fonts available for use on the web. It provides a simple and easy-to-use API for integrating fonts into your web project. 
Link: https://fonts.google.com/
2.	Font Awesome: A popular icon font library that includes over 7,000 icons. It provides scalable vector icons that can be easily customized and styled using CSS.
3.	Swiper is a free and open-source JavaScript library that enables developers to create responsive, touch-enabled sliders and carousels for their websites and web applications.
Link: https://swiperjs.com/


⛏️ Built Using
•	HTML5 -HTML stands for Hyper Text Mark-up Language. It is used to design web pages using mark-up language. HTML is the combination of Hypertext and Mark-up language. Hypertext defines the link between the web pages. A markup language is used to define the text document within tag which defines the structure of web pages. HTML5 is the fifth and current version of HTML. It has improved the mark-up available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM).
•	CSS -Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page.
•	JavaScript - JavaScript is a lightweight, cross-platform and interpreted scripting language. It is well-known for the development of web pages, and many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments.
🎉 Acknowledgements
•	References:
FreeCodeCamp: FreeCodeCamp is an online learning platform that provides free coding challenges and projects to help you learn front-end development.


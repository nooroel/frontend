var currentPage = document.querySelector('nav ul li:nth-of-type(1) a');
var searchBox = document.querySelector('body header form')

currentPage.classList.add('activeLink');
searchBox.style.display = ("none");
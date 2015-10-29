var currentPage = document.querySelector('nav ul li:nth-of-type(1) a');
var profiel = document.querySelector('body header p')

currentPage.classList.add('activeLink');
profiel.classList.remove('to-profile');
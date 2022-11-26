
let darkbtn = document.querySelector('.darkbtn');
let slider = document.querySelector('.slider');
let body = document.body;
let navtext1 = document.querySelector('.nav1');
let navtext2 = document.querySelector('.nav2');
var search = document.querySelector('.search');
var search_opt = document.querySelector('.search-options');
var lang = document.querySelector('.languages');
var footer = document.querySelector('.footer');
var footerline2 = document.querySelector('.footerline2');

darkbtn.addEventListener('click', ()=> {
  body.classList.toggle('dark');
  slider.classList.toggle('slider-dark');
  darkbtn.classList.toggle('active');
  navtext1.classList.toggle('dark-nav');
  navtext2.classList.toggle('dark-nav');
  search.classList.toggle('input-dark');
  search_opt.classList.toggle('options');
  lang.classList.toggle('options');
  footer.classList.toggle('footer-dark');
  footerline2.classList.toggle('footerline-dark');
});

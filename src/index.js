import { loadContactForm } from "./contact-form";
import { loadAboutPage } from "./about-page";
import { welcomePage } from "./welcome-page";
import { javaScriptPort } from "./javascript-page";

const javascriptHeader = document.querySelector('.javascript-header');
const reactHeader = document.querySelector('.react-header');
const otherHeader = document.querySelector('.other-header');
const aboutHeader = document.querySelector('.about-header');
const contactHeader = document.querySelector('.contact-header');
const body = document.querySelector('.flex-container');
const homePageHeader = document.querySelector('.logo-header');


contactHeader.addEventListener('click', () => {
    body.innerHTML = '';
    loadContactForm(body);
})

aboutHeader.addEventListener('click', () => {
    body.innerHTML = '';
    loadAboutPage(body);
})

homePageHeader.addEventListener('click', () => {
    body.innerHTML = '';
    welcomePage(body);

})

javascriptHeader.addEventListener('click', () => {
    body.innerHTML = '';
    javaScriptPort(body);
})

window.onload(welcomePage(body));


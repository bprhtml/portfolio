const javascriptHeader = document.querySelector('.javascript-header');
const reactHeader = document.querySelector('.react-header');
const otherHeader = document.querySelector('.other-header');
const aboutHeader = document.querySelector('.about-header');
const contactHeader = document.querySelector('.contact-header');
const body = document.querySelector('.flex-container');

contactHeader.addEventListener('click', () => {
    body.style.width = '200px';
    body.style.height = '200px';
    body.style.backgroundColor = 'red';
})
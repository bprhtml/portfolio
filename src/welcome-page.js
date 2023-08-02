export function welcomePage(container) {

    const welcomePageContainer = document.createElement('div');
    welcomePageContainer.style.display = 'flex';
    welcomePageContainer.style.justifyContent = 'space-around';
    welcomePageContainer.style.alignItems = 'center';
    welcomePageContainer.style.width = '100vw';
    welcomePageContainer.style.height = '93vh';
    container.appendChild(welcomePageContainer)

    const introDiv = document.createElement('div');
    introDiv.style.display = 'flex';
    introDiv.style.flexDirection = 'column';
    // introDiv.style.justifyContent = 'space-between';
    introDiv.style.alignItems = 'center';
    introDiv.style.height = '70vh';
    introDiv.style.marginLeft = '10vw';
    welcomePageContainer.appendChild(introDiv)

    const brandLogo = document.createElement('img');
    brandLogo.src = '../images and fonts/brwd-square.gif';
    brandLogo.style.height = 'auto';
    brandLogo.style.clipPath = 'inset(35vh 40vh)';
    brandLogo.style.width = '40vh';
    introDiv.appendChild(brandLogo);

    const hello = document.createElement('div');
    hello.innerHTML = "Hello, I'm Ben.";
    hello.style.fontSize = '3vw';
    hello.style.marginBottom = '4vh';
    hello.style.width = '20vw';
    hello.classList.add('intro-lines')
    introDiv.appendChild(hello);

    const whatIDo = document.createElement('div');
    whatIDo.textContent = "A front-end, software, and application developer.";
    whatIDo.classList.add('intro-lines-what');
    whatIDo.style.fontSize = '1.6vw';


    const photoOfMe = document.createElement('img');
    photoOfMe.src = 'https://media.licdn.com/dms/image/D4E03AQET5GEWP7EPOA/profile-displayphoto-shrink_800_800/0/1689058766782?e=1695254400&v=beta&t=tvCFFv_14jzJGup7_MJuqcromNJ-QhdA__sgxOLl90g';
    photoOfMe.style.width = '25vw';
    photoOfMe.style.height = '25vw';
    photoOfMe.style.marginRight = '10vw';
    welcomePageContainer.appendChild(photoOfMe);

    setTimeout(() => {
        introDiv.appendChild(whatIDo);
    }, 3500);
}
     
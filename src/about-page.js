export function loadAboutPage(container) {

    const aboutMeContainer = document.createElement('div');
    aboutMeContainer.style.display = 'flex';
    aboutMeContainer.style.flexDirection = 'column';
    aboutMeContainer.style.alignItems = 'center';
    container.appendChild(aboutMeContainer);

    const aboutMeTitle = document.createElement('h1');
    aboutMeTitle.textContent = 'About Me';
    aboutMeTitle.style.marginTop = '4vh';
    aboutMeTitle.style.fontSize = '3.5vw';
    aboutMeContainer.appendChild(aboutMeTitle);

    const aboutMeTopHalfContainer = document.createElement('div')
    aboutMeTopHalfContainer.classList.add('about-me-top');
    aboutMeTopHalfContainer.style.display = 'flex';
    aboutMeTopHalfContainer.style.marginTop = '5vh';
    aboutMeTopHalfContainer.style.justifyContent = 'space-between';
    aboutMeTopHalfContainer.style.transition = '1s';
    aboutMeTopHalfContainer.style.alignItems = 'center';

    const aboutMeFirstPara = document.createElement('div');
    aboutMeFirstPara.textContent = 'An aspiring web designer, I have created a plethora of projects - predominantly in JavaScript - however I have programmed in languages such as Python to create more diverse projects - including side-scrolling games.';
    aboutMeFirstPara.style.width = '55vw';

    const photoOfMe = document.createElement('img');
    photoOfMe.src = '../images and fonts/me and gary.jpeg'
    photoOfMe.style.width = '15vw';
    photoOfMe.style.height = '15vw';
    photoOfMe.style.marginLeft = '4vw';
    photoOfMe.alt = 'Portrait photo of myself, originating from my LinkedIn page.'


    const divisionOne = document.createElement('div');
    divisionOne.style.width = '75vw';
    divisionOne.style.height = '1vh';
    divisionOne.style.backgroundColor = '#A239CA';
    divisionOne.style.marginTop = '5vh';

    setTimeout(() => {
        aboutMeContainer.appendChild(aboutMeTopHalfContainer);
        aboutMeTopHalfContainer.appendChild(aboutMeFirstPara); 
        aboutMeTopHalfContainer.appendChild(photoOfMe);  
        aboutMeContainer.appendChild(divisionOne);
    }, 300);

    const aboutMeSecondHalfContainer = document.createElement('div');
    aboutMeSecondHalfContainer.classList.add('about-me-middle');
    aboutMeSecondHalfContainer.style.display = 'flex';
    aboutMeSecondHalfContainer.style.marginTop = '5vh';
    aboutMeSecondHalfContainer.style.justifyContent = 'space-between';
    aboutMeSecondHalfContainer.style.alignItems = 'center';

    const photoOfSomething = document.createElement('img');
    photoOfSomething.style.width = '15vw';
    photoOfSomething.style.height = '15vw';
    photoOfSomething.src = '../images and fonts/react-screenshot.png';
    photoOfSomething.style.marginRight = '4vw';

    const aboutMeSecondPara = document.createElement('div');
    aboutMeSecondPara.textContent = 'Starting in 2022, I have produced over 30 projects in JavaScript and HTML/CSS, ranging from games to to-do lists, and creating websites produced from my own ideas.'
    aboutMeSecondPara.style.width = '55vw';

    const divisionTwo = document.createElement('div');
    divisionTwo.style.width = '75vw';
    divisionTwo.style.height = '1vh';
    divisionTwo.style.backgroundColor = '#4717f6';
    divisionTwo.style.marginTop = '5vh';

    setTimeout(() => {
        aboutMeContainer.appendChild(aboutMeSecondHalfContainer);
        aboutMeSecondHalfContainer.appendChild(photoOfSomething);
        aboutMeSecondHalfContainer.appendChild(aboutMeSecondPara);
        aboutMeContainer.appendChild(divisionTwo);
    }, 2000);

    const aboutMeThirdHalfContainer = document.createElement('div')
    aboutMeThirdHalfContainer.classList.add('about-me-bottom');
    aboutMeThirdHalfContainer.style.display = 'flex';
    aboutMeThirdHalfContainer.style.marginTop = '5vh';
    aboutMeThirdHalfContainer.style.justifyContent = 'space-between';
    aboutMeThirdHalfContainer.style.alignItems = 'center';

    const aboutMeThirdPara = document.createElement('div');
    aboutMeThirdPara.textContent = "In addition to programming, I have many other skills and hobbies: one of which being drumming, which I've been studying for over 20 years."
    aboutMeThirdPara.style.width = '55vw';

    const drummingPhotoDiv = document.createElement('a');
    drummingPhotoDiv.href = 'https://youtu.be/jzgb8XfIKjI';

    const drummingPhoto = document.createElement('img');
    drummingPhoto.src =  '../images and fonts/me-drumming.png'
    drummingPhoto.style.width = '15vw';
    drummingPhoto.style.height = '15vw';
    drummingPhoto.style.marginLeft = '4vw';
    drummingPhoto.alt = 'Myself drumming in a YouTube video from my channel.';


    const finalDivision = document.createElement('div');
    finalDivision.style.width = '75vw';
    finalDivision.style.height = '1vh';
    finalDivision.style.backgroundColor = '#E7DFDD';
    finalDivision.style.marginTop = '5vh';
    finalDivision.style.marginBottom = '3vh';

    setTimeout(() => {
        aboutMeContainer.appendChild(aboutMeThirdHalfContainer);
        aboutMeThirdHalfContainer.appendChild(aboutMeThirdPara);  
        aboutMeThirdHalfContainer.appendChild(drummingPhotoDiv)  
        drummingPhotoDiv.appendChild(drummingPhoto);   
        aboutMeContainer.appendChild(finalDivision); 
    }, 3600);
}
export function javaScriptPort(container) {

    container.style.display = 'flex';
    container.style.justiftyContent = 'center';

    const javaContainer = document.createElement('div');
    javaContainer.style.display = 'flex';
    javaContainer.style.textAlign = 'center';
    javaContainer.style.justifyContent = 'center';
    javaContainer.style.alignItems = 'center';
    javaContainer.style.flexDirection = 'column';
    container.appendChild(javaContainer)


    const title = document.createElement('h1');
    title.textContent = 'JavaScript Projects';
    title.style.marginTop = '4vh';
    title.style.marginBottom ='4vh';
    title.style.fontSize = '3.5vw';
    javaContainer.appendChild(title);

    const desc = document.createElement('div');
    desc.textContent = 'Below is a collage of my vanilla JavaScript projects. Please feel free to take a look!';
    desc.style.width = '40vw';
    javaContainer.appendChild(desc);

    const collageContainer = document.createElement('div');
    collageContainer.style.width = '80vw';
    collageContainer.style.height = 'auto';
    collageContainer.style.display = 'grid';
    collageContainer.style.margin = '2vh';
    javaContainer.appendChild(collageContainer);

    projects.forEach((project) => {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        const gridName = document.createElement('div');
        gridName.textContent = `${project.name}`
        const gridDesc = document.createElement('div');
        gridDesc.textContent = `${project.desc}`;
        const gridPhoto = document.createElement('img');
        gridPhoto.style.width = '10vw';
        gridPhoto.style.height = '10vw';
        gridPhoto.src = `${project.imgSrc}`;

        collageContainer.appendChild(gridSquare);
        gridSquare.appendChild(gridPhoto);
        gridSquare.appendChild(gridName);
        gridSquare.appendChild(gridDesc);
    })
    
}

let projects = [
    {name: 'Etch-a-Sketch', desc: "A sketchpad using grid squares to emulate the classic kids' toy.", imgSrc: '../images and fonts/eas-ss.png'},
    {name: 'Snake', desc: "Using the canvas to create a game of snake as found on older mobile devices.", imgSrc: '../images and fonts/s-ss.png'},
    {name: 'Calculator', desc: "Using classes to create a functioning calculator.", imgSrc: '../images and fonts/ccl-ss.png'}
]
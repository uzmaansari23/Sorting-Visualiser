// Fancy slider in the mobile view... Or a burger icon which slides when it is clicked
const navSlide = () => {
    const mobile = document.querySelector('.mobile');
    const center = document.querySelector('.center');
    const centerlinks = document.querySelectorAll('.center li');


    mobile.addEventListener('click', () => {
        //Toggle Nav
        //Actually we want that when we click the mobile then the center navlinks should get a class of center-active
        center.classList.toggle('center-active');      //We are not adding but toggling the class to center active

        //Animate Links
        centerlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `centerLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // that icon animation of 3 bars
        mobile.classList.toggle('toggle');
    });
}
navSlide();



// // Portion still in progress... For the arrow animation... The small arrow moves forward...
// const loginAnimation = () => {
//     const accountHover = document.querySelector('.account');

//     accountHover.addEventListener('mouseenter', () => {
//         accountHover.classList.toggle('hovered');
//     });

// }
// loginAnimation();



// Portion for the animation of text of the main heading
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const a = Math.floor(Math.random());
const newColor = `rgb(${r}, ${g}, ${b}, ${a})`;
const text = document.querySelector('.h1-heading');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 200);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    span.classList.add("3d");
    // Working on the the colourful text
    // span.style.backgroundColor = `-webkit-linear-gradient(#03fce3, #fcba03)`;
    
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}



//Movement Animation of Mouse For Landing Page
// Movement amnimation to happen
const container = document.querySelector('.containerForMotion');
const title = document.querySelector('.main-heading');
// Moving Animation Event
var contDimensions = container.getClientRects();
//contDimensions is a object so all the object manipulations will be used
var contHeight = contDimensions['0']['height'];
var contWidth = contDimensions['0']['width'];


container.addEventListener("mousemove", (e) => {
    let xAxis = (contHeight / 2 - e.pageX)/40;
    let yAxis = (contWidth / 2 - e.pageY)/40;

    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(190px)`;
    title.style.transform = `translateZ(350px)`;

    // container.style.perspective = `10000px`;
});

//Animate In
container.addEventListener('mouseenter', (e) => {
    container.style.transition = `all 0.2s ease`;
});

//Animate Out
container.addEventListener('mouseleave', (e) => {
    container.style.transition = `all 1s ease`;
    container.style.transform = `rotateY(0deg) rotateX(0deg)`;
});






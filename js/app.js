
//Get Data
sections = document.querySelectorAll('section');

sectionwcontent = document.getElementsByClassName('content-container');

const contentlength = document.getElementsByClassName('content-container').length;

//Set Buttons and Main Content
for (let i = 0; i < contentlength; i++) {

    sectionname = sectionwcontent[i].getAttribute('data-navi');
    createNavigationButton(i + 1, sectionname)

    createMainContentSection(i + 1, sectionname)

};

// Constants for Button and Mainsection
const buttonsection1 = document.getElementById('Button_1');
const buttonsection2 = document.getElementById('Button_2');
const buttonsection3 = document.getElementById('Button_3');
const buttonsection4 = document.getElementById('Button_4');

const mainsection1 = document.getElementById('section_1');
const mainsection2 = document.getElementById('section_2');
const mainsection3 = document.getElementById('section_3');
const mainsection4 = document.getElementById('section_4');

// Height of Header and Navigation
const headheight = document.querySelector('header').offsetHeight;
const navheight = document.querySelector('nav').offsetHeight;


//Set Data
//Create Navigation Element
function createNavigationButton(elementno, secname) {
    //create Elements
    let newNav = document.createElement('div');
    let newContent = document.createTextNode(secname);
    //Set Attributes
    newNav.setAttribute('class', 'buttonsection');
    newNav.setAttribute('id', 'Button_' + elementno);
    newNav.appendChild(newContent);
    //Insert new element in Naviagation

    const navigation = document.querySelector('nav');

    navigation.appendChild(newNav);

}

//Create Main Content Sections
function createMainContentSection(elementno, secname) {
    //create Elements
    let newHead = document.createElement('h1');
    let newHdContent = document.createTextNode(secname);

    //Set Attributes
    newHead.appendChild(newHdContent);

    //Insert new element in Naviagation
    const section = 'section_' + elementno;
    const mainsection = document.getElementById(section);

    mainsection.appendChild(newHead);
    mainsection.insertAdjacentHTML("beforeend", maintext);

}

// Function set active state Main Area
function setActiveState() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        const sectionHight = screen.height;
        const boxtop = box.top;
        const boxbutton = box.bottom;

        if (boxtop <= (sectionHight / 3)
            && boxbutton >= (sectionHight / 3)
        ) {
            section.setAttribute('class', 'Active');
        } else {
            section.setAttribute('class', '');
        }
    }
}

//Change Appearence Functions for Events
//Button Section 1
function setButtonBackgroundS1() {
    buttonsection1.setAttribute('class', 'Activebutton');
}
function setbackButtonBackgroundS1() {
    buttonsection1.setAttribute('class', 'buttonsection');
}
//Scroll to position
function selectViewS1() {
    const scrollposition = mainsection1.offsetTop;
    window.scrollTo({
        top: scrollposition - headheight - navheight,
        behavior: 'smooth'
    });
}
//Button Section 2
function setButtonBackgroundS2() {
    buttonsection2.setAttribute('class', 'Activebutton');
}
function setbackButtonBackgroundS2() {
    buttonsection2.setAttribute('class', 'buttonsection');
}
//Scroll to position
function selectViewS2() {
    const scrollposition = mainsection2.offsetTop;
    window.scrollTo({
        top: scrollposition - headheight - navheight,
        behavior: 'smooth'
    });
}
//Button Section 3
function setButtonBackgroundS3() {
    buttonsection3.setAttribute('class', 'Activebutton');
}
function setbackButtonBackgroundS3() {
    buttonsection3.setAttribute('class', 'buttonsection');
}
//Scroll to position
function selectViewS3() {
    const scrollposition = mainsection3.offsetTop;
    window.scrollTo({
        top: scrollposition - headheight - navheight,
        behavior: 'smooth'
    });
}
//Button Section 4
function setButtonBackgroundS4() {
    buttonsection4.setAttribute('class', 'Activebutton');
}
function setbackButtonBackgroundS4() {
    buttonsection4.setAttribute('class', 'buttonsection');
}
//Scroll to position
function selectViewS4() {
    const scrollposition = mainsection4.offsetTop;
    window.scrollTo({
        top: scrollposition - headheight - navheight,
        behavior: 'smooth'
    });
}

//Main Area Active state
document.addEventListener("scroll", setActiveState);

//Button Events
//Section 1
buttonsection1.addEventListener('mouseover', setButtonBackgroundS1);
buttonsection1.addEventListener('mouseout', setbackButtonBackgroundS1);
buttonsection1.addEventListener('click', selectViewS1)
//Section 2
buttonsection2.addEventListener('mouseover', setButtonBackgroundS2);
buttonsection2.addEventListener('mouseout', setbackButtonBackgroundS2);
buttonsection2.addEventListener('click', selectViewS2)
//Section 3
buttonsection3.addEventListener('mouseover', setButtonBackgroundS3);
buttonsection3.addEventListener('mouseout', setbackButtonBackgroundS3);
buttonsection3.addEventListener('click', selectViewS3)
//Section 4
buttonsection4.addEventListener('mouseover', setButtonBackgroundS4);
buttonsection4.addEventListener('mouseout', setbackButtonBackgroundS4);
buttonsection4.addEventListener('click', selectViewS4)




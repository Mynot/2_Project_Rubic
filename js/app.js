


//Get Data


sections = document.querySelectorAll('section');

sectionwcontent = document.getElementsByClassName('content-container');


const contentlength = document.getElementsByClassName('content-container').length;

for (let i = 0; i < contentlength; i++) {

    sectionname = sectionwcontent[i].getAttribute('data-navi');
    createNavigationButton(i + 1, sectionname)

    createMainContentSection(i + 1, sectionname)

};




const section1 = document.getElementById('Button_1');
const section2 = document.getElementById('Button_2');
const section3 = document.getElementById('Button_3');
const section4 = document.getElementById('Button_4');

const mainsection1 = document.getElementById('section_1');
const mainsection2 = document.getElementById('section_2');
const mainsection3 = document.getElementById('section_3');
const mainsection4 = document.getElementById('section_4');




//Set Data
//Create Navigation Element
function createNavigationButton(elementno, secname) {
    //create Elements
    let newNav = document.createElement('div');
    let newContent = document.createTextNode(secname);
    //Set Attributes
    newNav.setAttribute('class', 'section');
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

// Function set active state

function setActiveState() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        const sectionOffset = section.offsetTop;
        const sectionHight = screen.height;
        const boxtop = box.top;
        const boxbutton = box.bottom;

        if (boxtop <= (sectionHight / 2)
            && boxbutton >= (sectionHight / 2)
        ) {
            section.setAttribute('class', 'Active');
        } else {
            section.setAttribute('class', '');
        }
    }
}



//Change Appearence Functions for Events
//Section 1
function setButtonBackgroundS1() {
    section1.style.backgroundImage = 'linear-gradient(to right, DodgerBlue, white)';
    section1.style.boxShadow = '1px 1px 1px 1px #888888';
}
function setbackButtonBackgroundS1() {
    section1.style.backgroundImage = '';
    section1.style.boxShadow = '';
}
function selectViewS1() {
    mainsection1.scrollIntoView(true);
}
function selectViewS2() {
    mainsection2.scrollIntoView(true);
}
function selectViewS3() {
    mainsection3.scrollIntoView(true);
}
function selectViewS4() {
    mainsection4.scrollIntoView(true);
}
//Section 2
function setButtonBackgroundS2() {
    section2.style.backgroundImage = 'linear-gradient(to right, DodgerBlue, white)';
    section2.style.boxShadow = '1px 1px 1px 1px #888888';
}
function setbackButtonBackgroundS2() {
    section2.style.backgroundImage = '';
    section2.style.boxShadow = '';
}
//Section 3
function setButtonBackgroundS3() {
    section3.style.backgroundImage = 'linear-gradient(to right, DodgerBlue, white)';
    section3.style.boxShadow = '1px 1px 1px 1px #888888';
}
function setbackButtonBackgroundS3() {
    section3.style.backgroundImage = '';
    section3.style.boxShadow = '';
}
//Section 4
function setButtonBackgroundS4() {
    section4.style.backgroundImage = 'linear-gradient(to right, DodgerBlue, white)';
    section4.style.boxShadow = '1px 1px 1px 1px #888888';
}
function setbackButtonBackgroundS4() {
    section4.style.backgroundImage = '';
    section4.style.boxShadow = '';
}

document.addEventListener("scroll", setActiveState);

//Button Events
//Section 1
section1.addEventListener('mouseover', setButtonBackgroundS1);
section1.addEventListener('mouseout', setbackButtonBackgroundS1);
section1.addEventListener('click', selectViewS1)
//Section 2
section2.addEventListener('mouseover', setButtonBackgroundS2);
section2.addEventListener('mouseout', setbackButtonBackgroundS2);
section2.addEventListener('click', selectViewS2)
//Section 3
section3.addEventListener('mouseover', setButtonBackgroundS3);
section3.addEventListener('mouseout', setbackButtonBackgroundS3);
section3.addEventListener('click', selectViewS3)
//Section 4
section4.addEventListener('mouseover', setButtonBackgroundS4);
section4.addEventListener('mouseout', setbackButtonBackgroundS4);
section4.addEventListener('click', selectViewS4)




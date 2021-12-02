const section1 = document.getElementById('Button_1');
const section2 = document.getElementById('Button_2');
const section3 = document.getElementById('Button_3');
const section4 = document.getElementById('Button_4');

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

//Button Events
//Section 1
section1.addEventListener('mouseover', setButtonBackgroundS1);
section1.addEventListener('mouseout', setbackButtonBackgroundS1);
//Section 2
section2.addEventListener('mouseover', setButtonBackgroundS2);
section2.addEventListener('mouseout', setbackButtonBackgroundS2);
//Section 3
section3.addEventListener('mouseover', setButtonBackgroundS3);
section3.addEventListener('mouseout', setbackButtonBackgroundS3);
//Section 4
section4.addEventListener('mouseover', setButtonBackgroundS4);
section4.addEventListener('mouseout', setbackButtonBackgroundS4);
const section1 = document.getElementById('Button_1');
const section2 = document.getElementById('Button_2');
const section3 = document.getElementById('Button_3');
const section4 = document.getElementById('Button_4');

//Change Appearence Finctions for Events
//Section 1
function setButtonBackgroundS1() {
    section1.style.backgroundColor = 'grey';
}
function setbackButtonBackgroundS1() {
    section1.style.backgroundColor = 'aliceblue';
}
//Section 2
function setButtonBackgroundS2() {
    section2.style.backgroundColor = 'grey';
}
function setbackButtonBackgroundS2() {
    section2.style.backgroundColor = 'aliceblue';
}
//Section 3
function setButtonBackgroundS3() {
    section3.style.backgroundColor = 'grey';
}
function setbackButtonBackgroundS3() {
    section3.style.backgroundColor = 'aliceblue';
}
//Section 4
function setButtonBackgroundS4() {
    section4.style.backgroundColor = 'grey';
}
function setbackButtonBackgroundS4() {
    section4.style.backgroundColor = 'aliceblue';
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
const button1 = document.getElementById('Button_1');
const button2 = document.getElementById('Button_2');
const button3 = document.getElementById('Button_3');
const button4 = document.getElementById('Button_4');



button1.addEventListener('mouseover', setButtonBackground)
    // function () {
    //  document.getElementById("Button_1").style.backgroundColor = 'grey';
    //}
    ;
button1.addEventListener('mouseout', setbackButtonBackground)
    // function () {
    //  document.getElementById("Button_1").style.backgroundColor = 'grey';
    //}
    ;


function setButtonBackground() {
    button1.style.backgroundColor = 'grey';
}
function setbackButtonBackground() {
    button1.style.backgroundColor = 'aliceblue';
}
//button1.addEventListener('mouseenter', setButtonBackground(button1), false)
    // function () {
    //   document.getElementById("Button_1").style.backgroundColor = 'grey';
    //}
  //  ;

//button1.onpointerenter = setButtonBackground(button2);
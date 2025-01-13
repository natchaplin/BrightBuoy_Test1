// let div1 = document.getElementById("div1");
// div1.style.fontSize = "4em";
// The following code does not do anything at this moment. It is meant as a way to create a differemt type of navigation bar, however will not work.
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//   }
//   function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//   }

function toggleBigMenuOnOff() {
  const elements = document.getElementsByClassName('bigMenu');

  elements[0] && elements[0].classList.toggle('on');
  //   console.log('toggleBigMenuOnOff');
}
function toggleButtonOnOff() {
  const elements = document.getElementsByClassName('button');

  elements[0] && elements[0].classList.toggle('on');
    console.log('toggleButtonOnOff');
}
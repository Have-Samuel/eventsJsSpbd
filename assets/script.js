// const formElement = document.querySelector('form');

// formElement.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log('you just submitted the form!');
// });

// // listen for the keypress everywhere
// document.addEventListener("keypress", function(event) {
//   event.preventDefault();
//   if (event.key === "a") {
//     alert("you just pressed the 'a' key!");
//   }
// });

// const form = document.querySelector('form');
// const friendList = document.querySelector('#friend-list');

// const buttons = document.querySelectorAll('button');
// for (let button of buttons) {
//   button.addEventListener('click', function (event) {
//     event.target.parentElement.remove();
//   })
// }

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const newFriendIput = document.querySelector('#first-name');
//   const newLi = document.createElement('li');
//   const newButton = document.createElement('button');
//   newLi.innerText = newFriendIput.value;
//   newButton.innerText = 'Remove@';

//   // newButton.addEventListener('click', function () {
//   //   event.target.parentElement.remove();
//   // });

//   friendList.addEventListener('click', function (e) {
//     if (e.target, tagName === 'button') {
//       event.target.parentElement.remove();
//     }
//   });

//   newLi.append(newButton);
//   friendList.append(newLi);
//   form.reset();
// });

function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#teal');
btn.ondblclick = function () {
  makeBody('teal');
};
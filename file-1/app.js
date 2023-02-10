function makeBody(color) {
  document.body.style.backgroundColor = color;
}

const btn = document.querySelector('#teal');
btn.ondblclick = function() {
  makeBody('teal');
};

// Older Method that is not Recommended
// const h1 = document.querySelector('h1');

// btn.ondblclick = function() {
//   h1.style.color = 'cyan';
// };

const violetBtn = document.querySelector('#violet');

violetBtn.addEventListener('click', function() {
  makeBody('violet');
});

violetBtn.addEventListener('click', function() {
  h1.style.color = 'cyan';
});
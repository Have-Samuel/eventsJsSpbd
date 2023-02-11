const p = document.querySelector('p');

p.addEventListener('click', function(event) {
  console.log(event.type);
});

p.addEventListener('mousedown', function(event) {
  console.log(event.type);
});

p.addEventListener('mouseup', function(event) {
  console.log(event.type);
});
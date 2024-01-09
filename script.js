const container  = document.querySelector('#container');
// Selects the #container div

console.dir(container.firstElementChild);
//Selects the first child of the #container => .display

const controls  = document.querySelector('.controls');
//Select the .controls div

console.dir(controls.previousElementSibling);
// Selects the prior sibling => .display
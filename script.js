const container  = document.querySelector('#container');
// Selects the #container div

const content = document.createElement('div');
content.classList.add('content');

content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Red Paragraph
const paragraph = document.createElement('p');
paragraph.classList.add('red-text');

paragraph.textContent = 'Hey I am red.';

paragraph.style.cssText = "color:red";

container.appendChild(paragraph);


//Blue Heading
const heading3 = document.createElement('h3');
heading3.classList.add('blue-h3');

heading3.textContent = 'I am a blue h3 Heading';

heading3.style.cssText = "color:blue";

container.appendChild(heading3);

//Black border div
const pinkContent = document.createElement('div');
pinkContent.classList.add('black-border-pink');

pinkContent.style.cssText = 'border:1px solid black; background-color:pink';

const header1 = document.createElement('h1');
header1.textContent = 'I am in a div';

const paragraphOne = document.createElement('p');
paragraphOne.textContent = 'ME TOO!';

pinkContent.append(header1, paragraphOne);

container.appendChild(pinkContent);
const main = document.querySelector('main#main');
main.remove();

const newHeader = document.createElement('h1#victory');
newHeader.id = 'victory';

const yourName = 'Epharus'; 
newHeader.textContent = `${yourName} is the champion`;

const body = document.querySelector('body');
body.appendChild(newHeader);
import './index.css';
import JSimage from './assets/JSimage.png';



console.log('Hello World!');

const H1 = document.createElement('h1');
H1.textContent = "I Love JS";

document.body.prepend(H1);

const jsImageHTML = document.createElement('img');
jsImageHTML.src = JSimage;

document.body.append(jsImageHTML);
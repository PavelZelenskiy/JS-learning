import "./index.css";
import JS_image from './assets/JSimage.png';



console.log('Hello World!');

const H1 = document.createElement('h1');
H1.textContent = "I Love JS";

document.body.append(H1);

const jsImageHTML = document.createElement('img');
jsImageHTML.src = JS_image;

document.body.append(jsImageHTML);
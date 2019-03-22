'use strict';
const main = document.querySelector('main');

const image = document.createElement('img');
image.src = 'http://placekitten.com/320/160';
image.alt = 'Kisse';

const figcaption = document.createElement('figcaption');
figcaption.innerHTML = 'Caption';

const figure = document.createElement('figure');
figure.appendChild(image);
figure.appendChild(figcaption);

const title = document.createElement('h2');
title.innerHTML = 'Title 2 Here';

const header = document.createElement('header');
header.appendChild(title);

const text = document.createElement('p');
text.innerHTML = "I am a paragraph";

const article = document.createElement('article');
article.appendChild(header);
article.appendChild(figure);
article.appendChild(text);
main.appendChild(article);


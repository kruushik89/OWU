let htmlP = document.createElement('p');
htmlP.innerText = 'Hello js';
htmlP.setAttribute('id', 'paragraph');
htmlP.setAttribute('class', 'par');
document.body.appendChild(htmlP);
// document.getElementById('paragraph').innerText = 'Whats up';
document.getElementsByClassName('par').style.color = "green";


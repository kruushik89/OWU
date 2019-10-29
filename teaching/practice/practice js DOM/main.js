let arrDiv = document.getElementsByClassName('divka');
let buttonLeft = document.getElementById('left');
let buttonRight = document.getElementById('right');

let j = 0;
arrDiv[j].style.display = 'block';

buttonLeft.onclick = () => {
    arrDiv[j].style.display = 'none';
    if (j <= 0) {
        j = arrDiv.length;
    }

    j -= 1;
    arrDiv[j].style.display = 'block';
};

buttonRight.onclick = () => {
    arrDiv[j].style.display = 'none';
    if (j >= arrDiv.length -1){
        j = -1;
    }

    j += 1;
    arrDiv[j].style.display = 'block';
};
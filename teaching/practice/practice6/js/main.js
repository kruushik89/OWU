let container_btn = document.querySelector('.container_btn');
let nav_menu = document.querySelector('.nav_menu');
container_btn.onclick = function () {
    if (nav_menu.style.display === 'block') {
        nav_menu.style.display = 'none';
    } else {
        nav_menu.style.display = 'block';
    }
};

{
    let arrDiv = document.getElementsByClassName('carousel_img');
    let image = document.querySelector('.xxx');
    let buttonLeft = document.getElementById('left');
    let buttonRight = document.getElementById('right');

    let j = 0;
    arrDiv[j].style.display = 'block';
    image.style.width = '135px';

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
}

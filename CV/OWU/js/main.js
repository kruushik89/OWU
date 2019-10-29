// menu
let btnMenu = document.querySelector('.c-hamburger');
let menu = document.querySelector('.menu-mobile');
btnMenu.onclick = () => {
    menu.classList.toggle('d-block');
};

// end menu

// c-hamburger
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
});
// end c-hamburger


let listInner = document.querySelectorAll('.list-inner');
let itemList = document.querySelectorAll('.item-list-content');
for (let i = 0; i < listInner.length; i++) {
    listInner[i].onclick = function () {
        let listItem = document.querySelectorAll('.list-item');
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].style.color = '#ffffff';
        }
        listItem[i].style.color = '#F48120';
        for (let k = 0; k < itemList.length; k++) {
            itemList[k].style.display = 'none';
        }
        itemList[i].style.display = 'block';
    }
}






let listContent = document.querySelectorAll('.list-content');
let arr = Array.from(listContent);
let listContentText = document.querySelectorAll('.list-content-text');
let listTitle = document.querySelectorAll('.list-content-title h4');

for (let i = 0; i < listContent.length; i++) {
    listContent[i].onclick = function (e) {
        for (let item of arr) {
            item.style.borderColor = '#ffffff'
        }
        for (let i = 0; i < listContentText.length; i++) {
            listContentText[i].style.display = 'none';
        }
        for (let i = 0; i < listTitle.length; i++) {
            listTitle[i].style.color = '#ffffff';
        }
        listContentText[i].style.display = 'block';
        listTitle[i].style.color = '#F48120';
        listContent[i].style.borderColor = '#F48120'
    };
}
//
// document.onclick = function (e) {
//     console.log(e);
// };


// modal window
let rec = document.querySelector('.rec-courses');
let modal = document.querySelector('.body-modal');

rec.onclick = () => {
    modal.classList.add('d-block');
};

let close = document.querySelector('.close-image img');
close.onclick = () => {
    modal.classList.remove('d-block');
};

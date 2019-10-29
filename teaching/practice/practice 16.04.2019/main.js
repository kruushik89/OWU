let button = document.querySelector('#btn');
// let containerId = document.querySelector('#container');



button.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(users => {
            return users.json()
        })
        .then(u => {
            console.log(u);
        })
        .catch(reason => {
            console.log(reason);
        })
}


function divBilder(userArr) {
    for (let i = 0; i < userArr.length; i++) {
        const buttonElement = button[i];

    }
}















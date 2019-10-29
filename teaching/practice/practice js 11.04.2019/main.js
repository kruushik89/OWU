let myName = document.getElementById('my_name');
let myAddress = document.getElementById('my_address');
let myForm = document.querySelector('form');
console.log(myForm);

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const obj = {
        name: myName.value,
        address: myAddress.value
    };

    window.localStorage.setItem('obj', JSON.stringify(obj));

});

let localData = JSON.parse(window.localStorage.getItem('obj'));

// myName.value = localData.name;
myAddress.value = localData.address;

localData && localData.name ? myName.value = localData.name : myName.value = null;
localData && localData.address ? myAddress.value = localData.address : myAddress.value = null;

function fun1() {
    var chbox;
    chbox = document.getElementById('one');
    if (chbox.checked){
        prompt("Выбран");
    }
    else{
        prompt("Не выбран");
    }
}
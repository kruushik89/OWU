let i = 0;
let j = 0;
let k = 0;
let s = 0;
function press(e){
    let qaz = document.querySelector('.strelka-block');
    let pedalQaz = document.querySelector('.qaz');
    let pedalTormoz = document.querySelector('.tormoz');
    let ekran = document.querySelector('.ekran');
if (e.key == 'w') {
    i += 10;
    j+=4;
    s+=6;
qaz.style.transform = "rotate("+ i + "deg)";
pedalQaz.style.transform = "rotateX("+ j + "deg)";
ekran.innerHTML = s;
if (i>=250) {
    i=252;
    j = 52;
    s=220;
    qaz.style.transform = "rotate("+ i + "deg)";
    pedalQaz.style.transform = "rotateX("+ j + "deg)";
    ekran.innerHTML = s;
}
}
else if (e.key == 's') {
    i-=10;
    j-=2;
    k+=10;

qaz.style.transform = "rotate("+ i + "deg)";
pedalQaz.style.transform = "rotateX("+ j + "deg)";
pedalTormoz.style.transform = "rotateX("+ k + "deg)";

if (k>=50) {
    k=50;
}
if (i<0) {
    i=0;
    j=0;
    qaz.style.transform = "rotate("+ i + "deg)";
    pedalQaz.style.transform = "rotateX("+ j + "deg)";
}
if(s<=0){
s=0;
}else{
    s-=4;
    ekran.innerHTML =s;
}

}

if(i==30){
    s=15;
    j = 12;
    }
    else if(i==50){
        s=30;
        k = 20;
        }
else if(i==100){
    s=70;
    j = 28;
    }
    else if(i==150){
        s=130;
        j = 36;
        }
        else if(i==200){
            s=170;
            j = 44;
            }
            else if(i==250){
                s=220;
                j = 50;
                }
                if(i>150){
                    ekran.style.background = 'darkred';
                }
                else{
                    ekran.style.background = 'rgb(50, 127, 146)';
                }
}


let qaz2 = document.querySelector('#qaz2');
document.onkeydown = press;
document.onkeyup
setInterval(() => {
    let qaz = document.querySelector('.strelka-block');
    let pedalQaz = document.querySelector('.qaz');
    let pedalTormoz = document.querySelector('.tormoz');
    let ekran = document.querySelector('.ekran');
        i-=2;
        j-=2;
        k-=2;
        if(i>0){
            qaz.style.transform = "rotate("+ i + "deg)";
        }
        else if(i<=0){
            i=0;
        }

        if (j>0) {
            pedalQaz.style.transform = "rotateX("+ j + "deg)";
        }
        else if(j<=0){
            j=0;
        }

        if (k>0) {
            pedalTormoz.style.transform = "rotateX("+ k + "deg)";
        }
        else if(k<=0){
            k=0;
        }
        s-=1;
        if (s<=0) {
            s=0;
            ekran.innerHTML = '00';
        }
        else  {
            ekran.innerHTML = s;
        }

if(i==30){
    s=15;
    }
    else if(i==50){
        s=30;
        }
    else if(i==100){
        s=70;
        }
        else if(i==150){
            s=130;
            }
            else if(i==200){
                s=170;
                }
                else if(i==250){
                    s=220;
                    }
                    if(i>150){
                        ekran.style.background = 'darkred';
                    }
                    else{
                        ekran.style.background = 'rgb(50, 127, 146)';
                    }
}, 50);
alert("ГАЗ - W, ТОРМОЗ - w");
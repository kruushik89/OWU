fetch('http://api.openweathermap.org/data/2.5/weather?id=702550&appid=a2de3daeb7ffc71d0bbf2b6f110044de')
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)} &deg`;
        document.querySelector('.condition').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/01n@2x.png
        document.querySelector('.wheather-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
    })
    .catch(function () {
        // catch any errors
    });

console.log(this);

window.navigator.geolocation.getCurrentPosition(function (p) {
    console.log(p.coords.latitude + " " + p.coords.longitude);
});
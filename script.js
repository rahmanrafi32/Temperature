document.getElementById('submitButton').addEventListener('click', function () {
    const city = document.getElementById('cityName').value;
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=75278c8087bf1d38f9b5cdcc6bba7d9b&units=metric')
        .then(res => res.json())
        .then(data => {
            const temp = data.main.temp;
            const weatherStatus = data.weather[0].main;
            getElement('temp', temp);
            getElement('weather', weatherStatus);
            getElement('city', city);
        });
});

function getElement(id, value) {
    document.getElementById(id).innerText = value;
}
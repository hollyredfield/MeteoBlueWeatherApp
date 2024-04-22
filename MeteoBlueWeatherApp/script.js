document.getElementById('getWeather').addEventListener('click', function() {
    fetch('https://my.meteoblue.com/packages/basic-day?lat=47.5&lon=7.5&asl=300&tz=Europe%2FZurich&apikey=ZtPoSM43nlfCXvqw')
        .then(response => response.json())
        .then(data => {
            let weatherData = '';
            for(let i = 0; i < data.data_day.time.length; i++) {
                weatherData += `<div class="weather-card card mt-3">`;
                weatherData += `<div class="card-body">`;
                weatherData += `<h2 class="card-title">Fecha: ${data.data_day.time[i]}</h2>`;
                weatherData += `<p class="card-text">Temperatura máxima: ${data.data_day.temperature_max[i]}°C</p>`;
                weatherData += `<p class="card-text">Temperatura mínima: ${data.data_day.temperature_min[i]}°C</p>`;
                weatherData += `<p class="card-text">Temperatura media: ${data.data_day.temperature_mean[i]}°C</p>`;
                weatherData += `</div>`;
                weatherData += `</div>`;
            }
            document.getElementById('weatherData').innerHTML = weatherData;
        });
});
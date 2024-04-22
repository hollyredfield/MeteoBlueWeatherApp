document.getElementById('getWeather').addEventListener('click', function() {
    fetch('https://my.meteoblue.com/packages/basic-day?lat=47.5&lon=7.5&asl=300&tz=Europe%2FZurich&apikey=ZtPoSM43nlfCXvqw')
        .then(response => response.json())
        .then(data => {
            let weatherData = '';
            for(let i = 0; i < data.data_day.time.length; i++) {
                weatherData += `Fecha: ${data.data_day.time[i]} - `;
                weatherData += `Temperatura m\u00E1xima: ${data.data_day.temperature_max[i]} - `;
                weatherData += `Temperatura m\u00EDnima: ${data.data_day.temperature_min[i]} - `;
                weatherData += `Temperatura media: ${data.data_day.temperature_mean[i]}\n`;
            }
            document.getElementById('weatherData').innerText = weatherData;
        });
});
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e1e49d5a25mshb95df0869c21d43p116175jsna0b5f9dd3da4',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather=(city)=>{

    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_degrees.innerHTML = response.wind_degrees
        // wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        console.log(response)
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})
getWeather("Patna");
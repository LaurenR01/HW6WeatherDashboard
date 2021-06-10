// setting the API key

    const api = {
        key: '5eb289bb53abf02581c3494d598b36af',
        base: 'http://api.openweathermap.org/data/2.5/'
    }
    // capturing zip code
    var store = 0;
    var button = $(".submitBtn");
    $(button).on('click', function(event){
        zipcode = $("#zip-code").val();
        console.log(zipcode);
        localStorage.setItem(store, zipcode);
        for (i=0; i<8; i++){
            store = store+ 1;
        }
        getWeather(zipcode);
    });
    
    // grabbing weather info from the API
    function getWeather(zipcode) {
        fetch (`${api.base}weather?zip=${zipcode}&units=imperial&appid=${api.key}`)
        .then (response => {
            return response.json();})
        .then(showWeather);
    }
    
    // show weather on screen
    function showWeather (response) {
            console.log(response);
            let location = document.querySelector('.location');
            location.innerText = response.name;
            let currentTemp = document.querySelector('.current-temp');
            currentTemp.innerText = `${response.main.temp}°F`;
            let highLow =  document.querySelector('.high-low');
            highLow.innerHTML = `${response.main.temp_max}°F / ${response.main.temp_min}°F`;
            let description = document.querySelector('.description');
            description.innerText = response.weather[0].description;
        }
    // })
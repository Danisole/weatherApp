const container = document.getElementById("container");
const searchCity = document.getElementById("searchCity");
const searchInput = document.getElementById("searchInput");
const currentTemp = document.getElementById("currentTemp");
const icon = document.getElementById("icon");
const iconDesc = document.getElementById("iconDesc");
const ciudad = document.getElementById("ciudad");
const min = document.getElementById("min");
const max = document.getElementById("max");

 const city = "Rosario"; //feo lo vamos a rockear

//funcion mostrar los datos

const displayInfo = (data) => {
    // console.log(data)

    currentTemp.innerHTML = data.main.temp;
    ciudad.innerHTML = data.name;
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    iconDesc.innerHTML = data.weather[0].description;
    min.innerHTML = data.main.temp_min;
    max.innerHTML = data.main.temp_max;
}

const getCityWeather = async(city) => {
    const APIkey = "8b5d1643bc6e8bf76d3524718e737f97";

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=sp&appid=${APIkey}`

    const response = await fetch(api)
    const data = await response.json()

    // console.log(response);
    // console.log(data);

    displayInfo(data)

}

getCityWeather(city)

//header 

//codigos de status son como el 404 not found (400-499) son errores del cliente

//buscador

searchCity.addEventListener("submit", (e) => {// cuando estes el el input qiero que llames al evento este es el evento que produce

    e.preventDefault() //e es de evento
    // console.log(searchInput.value);
    getCityWeather(searchInput.value)

})

window.onload = () => {

    getCityWeather("San Juan");
}
async function weather(){
  let name = document.getElementById('city_input').value
  let name2 = document.getElementById('country_input').value
  try {
    let per = await fetch(`http://api.weatherstack.com/current?access_key=f9206f8e86a7b3cbcc87727b3bb892ae&query=${name},${name2}`)
    .then(function(response) {
        return response.json()
    })
    .then(function (weather_data) {
        let td1 = document.getElementById('city').innerHTML = `City: ${weather_data.location.name}`
        let td2 = document.getElementById('temp').innerHTML = `Temperature: ${weather_data.current.temperature}&#176;C`
        let td3 = document.getElementById('real_temp').innerHTML = `Feels like: ${weather_data.current.feelslike}&#176;C`
        let td4 = document.getElementById('speed').innerHTML = `Wind speed: ${weather_data.current.wind_speed}km/h`
        let td5 = document.getElementById('d_speed').innerHTML = `Wind direction: ${weather_data.current.wind_dir}`
        let td6 = document.getElementById('pressure').innerHTML = `Pressure: ${weather_data.current.pressure} MB`
    })
  } catch (error) {
		///document.querySelectorAll('td').forEach(td => td.remove())
		///let newMessage = document.createElement("p").innerHTML = 'Такого города не существует'
		///document.body.append(newMessage)
		alert('Такого города не существует')
  }
}

document.getElementById('city_input').onkeypress=function(e){
    if(e.keyCode==13){
        document.getElementById('submit').click();
    }
}
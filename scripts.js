"https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric"

        const API_KEY =" 483cac55aed3ed5d0d886eed477c82b6" //1a761d3bb408836cd1af3641ce1604c9

        let form = document.querySelector('form')
        let city = document.querySelector("#city")
        let weatherConatiner = document.querySelector("#weather-data")

       async function fetchWeather(city){
           let result =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

           let data = await result.json()

           let card = document.createElement('div')
           card.innerHTML = `<h4>city: $(data.name)</h4><h4>Temp: $()</h4><h4>Humidity: </h4> <h4>Wind: </h4>`
            
            weatherConatiner.innerHTML = ""
            
                weatherConatiner.append(card)
            
            

        }



        form.addEventListener("submit",(event)=>{
            event.preventDefault()
            fetchWeather(city.value)
        })
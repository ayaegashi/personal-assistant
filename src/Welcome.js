import React, { useEffect, useState } from 'react'

function Welcome() {
    const [position, setPosition] = useState()
    const [weather, setWeather] = useState()

    if (window.navigator.geolocation) {
        console.log("yes")
        window.navigator.geolocation.getCurrentPosition(setPosition, console.log("error"), {timeout:10000})
    } else {
        console.log("nope!")
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=42.365250&lon=-71.105011&appid=db5bbba816b58757082ce2230c7754a6&units=imperial")
            const data = await res.json()
            setWeather(data)
        }
        fetchData()
    }, [])
    weather === undefined ? console.log("waiting") : console.log(weather)
    console.log(position)

    // const temperature = weather.main.temp
    // const feels_like = weather.main.feels_like
    // const city = weather.name
    // const weather_report = weather.weather.main

    return (
        <div>
            Hello!
            { weather !== undefined ? <p>In { weather.name } it is.</p> : "Can't read city."}
        </div>
    )
}

export default Welcome
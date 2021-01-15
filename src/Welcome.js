import React, { useEffect, useState } from 'react'
import { Container, LabelAddNew, WelcomePage, StyledLink } from './styles'

function Welcome() {
    const [position, setPosition] = useState()
    const [weather, setWeather] = useState()

    if ('geolocation' in navigator) {
        console.log("yes")
        window.navigator.geolocation.getCurrentPosition(setPosition, console.log("error"), {timeout:10000000})
    } else {
        console.log("nope!")
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position ? position.coords.latitude : 42.365250}&lon=${position ? position.coords.longitude : -71.105010}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
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
        <Container>
            <WelcomePage>
                <LabelAddNew>Hello!</LabelAddNew>
                { weather !== undefined ? 
                    <p>Today, in { weather.name } it is { weather.main.temp } degrees Fahrenheit and the weather report says: { weather.weather[0].main }.</p> 
                : "Can't read city."}
                <p>Ready to get started?</p>
                <StyledLink to="/to-do">To my to-dos!</StyledLink>
            </WelcomePage>
        </Container>
    )
}

export default Welcome
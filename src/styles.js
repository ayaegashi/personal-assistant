import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: seashell;
    font-family: sans-serif;
    margin-top: 5vh;
    height: 90vh;
`

export const LabelAddNew = styled.label`
    font-size: 1.5em;
    color: palevioletred;
`

export const LabelToDo = styled.label`
    font-size: 1.5em;
    color: palevioletred;
    margin-top: 40px;
    margin-bottom: 10px;
    justify-content: left;
`

export const InputField = styled.input`
    width: 200px;
    height: 25px;
    margin: 10px;
    border: 3px solid peachpuff;
    text-align: center;

    &:focus {
        outline: none;
        border: 3px solid orange;
    }
`

export const SubmitButton = styled.input`
    margin: 10px;
    width: 50px;
    height: 30px;
    border: 3px solid orange;
    background-color: orange;
    color: white;
    font-weight: bold;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: white;
        color: orange;
    }
`

export const Form = styled.form`
    margin-top: 50px;
    margin-bottom: 5px;
`

export const AddIt = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`

export const ListBlock = styled.div`
    margin-top: 10px;
    padding: 0px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    border: 3px solid orange;
    width: 500px;
    text-align: center;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: disc;
    margin-bottom: 15px;
`

export const DeleteButton = styled.button`
    border: 3px solid peachpuff;
    background-color: peachpuff;
    color: red;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: white;
    }
`

export const WelcomePage = styled.div `
    font-size: 1.2em;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledLink = styled(Link) `
    margin: 10px;
    width: 200px;
    height: 30px;
    border: 3px solid orange;
    background-color: orange;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: white;
        color: orange;
    }
`
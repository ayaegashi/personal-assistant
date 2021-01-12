import React from 'react'
import { LabelAddNew, InputField, SubmitButton, Form, AddIt } from '../styles'

function NewItemForm({ addTodo }) {
    const [value, setSubmission] = React.useState("")

    const handleSubmit = event => {
        event.preventDefault();
        if (!value) {
            return
        }
        addTodo(value)
        setSubmission("")
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <LabelAddNew>
                What do you need to get done today? <br/>
            </LabelAddNew>
            <AddIt>
                <InputField 
                        type="text"
                        value={ value }
                        onChange={(e) => setSubmission(e.target.value)}
                />
                <SubmitButton type="submit" value="Add!" />
            </AddIt>
        </Form>
    )
}

export default NewItemForm
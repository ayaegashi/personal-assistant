import React from 'react'
import { ListItem, DeleteButton } from '../styles'

function ToDoItem( { todo, deleteTodo }) {
    const handleDelete = event => {
        event.preventDefault();
        deleteTodo(todo.id)
    }

    return (
        <ListItem>
            ・ { todo.text }
            <DeleteButton onClick={handleDelete}>
                Delete!
            </DeleteButton>
        </ListItem>
    )
}

export default ToDoItem;
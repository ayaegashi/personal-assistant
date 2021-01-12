import React from 'react'
import ToDoItem from "./toDoItem"
import { ListBlock, LabelToDo } from '../styles'

function ToDoList( { todos, deleteTodo, count }) {
    return (
        <>
        <LabelToDo className="to-do">Your To-Do List:</LabelToDo>
        <ListBlock> 
            {count !== 0 ?            
                <ul>
                    { todos.map((todo, index) => (
                        <ToDoItem
                            key={ index }
                            todo={ todo }
                            deleteTodo={ deleteTodo }
                        />
                    ))}
                </ul>
            : 
                <p>Nothing to do!</p>
            }
        </ListBlock>
        </>
    )
}

export default ToDoList;
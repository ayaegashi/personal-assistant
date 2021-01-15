import React from 'react'
import './App.css';
import NewItemForm from './components/newItemForm'
import ToDoList from './components/toDoList'
import { Container, InputField, StyledLink } from './styles'

function App() {
  const [todoList, setTodos] = React.useState([])
  const [count, setCount] = React.useState(0)

  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResults, setSearchResults] = React.useState([])

  const addTodo = (newTodoText) => {
    const newCount = count + 1
    setCount(newCount)
    const newTodoList = [{text: newTodoText, id: newCount}, ...todoList]
    setTodos(newTodoList)
    setSearchResults(newTodoList)
  }

  const deleteTodo = (deleteIndex) => {
    const updatedList = searchResults.filter(todo => todo.id !== deleteIndex)
    setTodos(updatedList)
    setSearchResults(updatedList)
    const newCount = count - 1
    setCount(newCount)
  }

  React.useEffect(() => {
    const results = todoList.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResults(results)
  }, [ searchTerm ])


  return (
    <Container>
      <NewItemForm addTodo={ addTodo }/>

      <InputField           
          type="text"
          placeholder="Search"
          value={ searchTerm }
          onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ToDoList todos={ searchResults } deleteTodo={ deleteTodo } count={ count } />
      <br/><br/>
      <StyledLink to="/">Back to Home</StyledLink>
    </Container>
  );
}

export default App;

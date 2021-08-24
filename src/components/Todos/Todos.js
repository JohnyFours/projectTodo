import "./Todos.scss";
import {
  Button,
  Checkbox, FormControlLabel,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import IOSSwitch from "../IOSSwitch/IOSSwitch";
import TodoItem from "../TodoItem/TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [newTodo, setNewTodo] = useState('');

  const inputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      status: 'new',
    }

    setTodos((prevState) => [newTodoItem, ...prevState])
    setNewTodo('')

  };

  function saveTodos () {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  useEffect(() => {
    saveTodos()
  }, [todos])

  return (
      <div className="todos">
        <form className="todos__form"
              onSubmit={addTodo}>
          <TextField label="Your new todo..."
                     type="text"
                     size="small"
                     name="todo"
                     value={newTodo}
                     onChange={inputChange}
                     variant="outlined" />
          <Button variant="contained"
                  type="submit"
                  color="primary">Add todo!!!</Button>
        </form>
        {todos.length ? <Button variant="outlined"
                                color="primary"
                                className="todos__save"
                                onClick={saveTodos}>Save todos</Button> : null}

        <div className="todos__autosave">
          <FormControlLabel
              control={<IOSSwitch checked={true}
                                  onChange={() => {}} />}
              label="iOS style"
          />

          <Checkbox
              color="default"
              checked={true}
              onChange={() => {}}
          />
          Autosave
        </div>

        <div className="todos__list">
          {todos.length
              ? (todos.map((todo) => <TodoItem key={todo.id}
                                               todo={todo}
                                               todos={todos}
                                               setTodos={setTodos} />))
              : <h2>No todos...</h2>}
        </div>
      </div>
  );
};

export default Todos;

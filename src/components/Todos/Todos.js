import './Todos.scss';
import {useState} from "react";
import {Button, IconButton, TextField} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";



const Todos = ()=> {
/*    const [todos, setTodos] = useState([
        {
        id:1,
        text:"first todos",
            status:"new"
        },
        {
        id:2,
        text:"second todos",
            status:"new"
        },
        {
        id:3,
        text:"third todos",
        status:"new"
        },
    ]);*/


    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('');


    const inputChange = (e) =>{
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        const newTodoItem = {
            id: Date.now(),
            text: newTodo,
            status: "new"
        }
        setTodos((prevState) => [newTodoItem, ...prevState])
        setNewTodo('')


         };
    function deleteTodo(id){
        setTodos(todos.filter(todo=>todo.id !== id))

    }
    const editTodo = id =>{
        
    }

        return (
            <div className="todos">
                <form className="todos_form"
                      onSubmit={addTodo}>
                    <TextField id="outlined-basic"
                               type="text"
                               name="todo"
                               label='Your new todo...'
                               variant="outlined"
                               onChange={inputChange}
                               value={newTodo}
                               size="small"
                               />
{/*                    <input type="text"
                           placeholder='Your new todo...'
                           value={newTodo}
                           onChange={inputChange}
                    />*/}
                    <Button variant="contained"
                            color="primary"
                             type='submit'>Add Todo</Button>
                </form>
                <div className="todos__list">
                    {todos.length
                        ? (todos.map(({id, text}) => {
                            return (
                                <div className="todos__item"
                                     key={id}>
                                    <p>{text}</p>
                                    <div className="todos__actions">
                                     <IconButton size="small"
                                                 color="primary"><Edit /></IconButton>
                                    <Button startIcon={<Delete/>} onClick={()=>deleteTodo(id)}>Delete</Button>
                                    </div>
                                </div>
                            );
                        }))
                        : <h2>No Todos...</h2>}
                </div>
            </div>
        );
    };


export default Todos;
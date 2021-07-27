import './Todos.scss';
import {useState} from "react";

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

        return (
            <div className="todos">
                <form className="todos_form"
                      onSubmit={addTodo}>
                    <input type="text"
                           placeholder='Your new todo...'
                           value={newTodo}
                           onChange={inputChange}/>
                    <button type="submit">Add todo</button>
                </form>
                <div className="todos__list">
                    {todos.length
                        ? (todos.map(({id, text}) => {
                            return (
                                <div className="todos__item"
                                     key={id}>
                                    {text}
                                </div>
                            );
                        }))
                        : <h2>No Todos...</h2>}
                </div>
            </div>
        );
    };


export default Todos;
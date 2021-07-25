import './Todos.scss';
import {useState} from "react";

const Todos = ()=> {
    const [todos, setTodos] = useState([
        {
        id:1,
        text:"first todos"
        },
        {
        id:2,
        text:"second todos"

        },
        {
            id:3,
            text:"third todos"
        },
    ]);


    const [newTodo, setNewTodo] = useState("")
    const inputChange = (e) =>{
        setNewTodo(e.target.value);
    };
    const addTodo = (e) =>{
        e.preventDefault();
        console.log(newTodo);
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
                {todos.map(({id,text}) => {
                   const finalText = text +1;
                    return <div className="todos__item" key={id}>
                        {finalText}
                    </div>;
                })}
            </div>
        </div>
    );
}


export default Todos;
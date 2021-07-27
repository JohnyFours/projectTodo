import React, {Component} from 'react';

class TodosClass extends Component {

    state = {
        newTodo:'',
        todos:[],
    }

    addTodo = (e) =>{
        e.preventDefault();
        const newTodoItem = {
            id: Date.now(),
            text: this.state.newTodo,
            status: "new",
        }
        this.setState((prevState)=> (
            {
                newTodo:"",
                todos:[newTodoItem, ...prevState.todos],
            }
            ))
    }

    inputChange = (event) =>{
        this.setState({newTodo:event.target.value},()=>{
            console.log(this.state.newTodo)
        })
    }

    render() {
        const {newTodo,todos} = this.state
        return (
            <div className="todos">
                <form className="todos_form"
                      onSubmit={this.addTodo}>
                    <input
                        type="text"
                        placeholder='Your new todo...'
                        value={newTodo}
                        onChange={this.inputChange}
                    />
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
    }
}

export default TodosClass;
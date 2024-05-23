import { useState, useEffect, useReducer } from "react";
import Todo from "../components/Todo";
import NewTodoForm from "../components/NewTodoForm";
import { useTodoContext } from "../hooks/useTodoContext";


const Home = () => {
    const {todos, addTodo, initTodos} = useTodoContext()
    const {loading, error} = useGetTodos(initTodos)

    return (
        <>
            <NewTodoForm addTodo={addTodo}/>

            <div className="todos">
                {todos && todos.map((todo, index) => {
                    return (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                        />
                    )
                })}
            </div>
        </>
    )
}


export default Home


const useGetTodos = (initTodos) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getTodos = async () => {
            // const response = await fetch(url)
            // const data = await response.json()
            const data = [
                {id:1, title: 'eat food', desc:"eat amala by 2pm.", done:false}, 
                {id:2, title: 'perform exercise', desc:"run 12 miles at 12pm.", done:false},
                {id:3, title: 'go to class', desc:"class starts by 10am, dont be late.", done:false},
                {id:4, title: 'revise for test', desc:"chemistry test is after biology so prepare on time.", done:false},
            ]
            initTodos(data)
        }

        getTodos()
    }, [])

    return {loading, error}
}
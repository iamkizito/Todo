import { useState, useEffect } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

const Todo = ({todo, ...props}) => {
    const [removeStatus, setRemoveStatus] = useState(false);
    useRemoveTodo(removeStatus, todo)
    

    return (
       <div style={{display: "flex"}}>
            <button onClick={() => setRemoveStatus(true)}>delete</button>
            <input type="checkbox" defaultChecked={todo.done}/>
            <div>{todo.title}: </div>
            <div>{todo.desc}</div>
       </div>
    )
}


export default Todo


const useRemoveTodo = (status, todo) => {
    const { removeTodo } = useTodoContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const formData = {taskId: todo.id}

    useEffect(() => {
        const postData = async () => {
            // const response = await fetch(url, {method:"POST", body: JSON.stringify(formData)})
            // const task = await response.json()
            // dispatch({type:"removeTask", payload: task.id})
            removeTodo(todo)
        }

        status && postData()
    }, [status])

    return {loading, error}
}
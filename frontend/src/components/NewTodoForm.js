import { useState, useEffect } from "react";


const NewTodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [formData, setFormData] = useState(null)
    const {loading, error} = useSubmit(formData, setFormData, addTodo)

    const onSubmit = (e) => {
        e.preventDefault()
        if (title === "") return

        console.log('submitted', title, " : ", desc)
        setFormData({title:title, desc:desc})
        setTitle('')
        setDesc('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="title">Enter Title: </label>
                <input name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label htmlFor="desc">Enter Description: </label>
                <textarea name="desc" onChange={(e) => setDesc(e.target.value)} value={desc}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}


export default NewTodoForm


const useSubmit = (formData, setFormData, addTodo) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const postTodo = async () => {
            // const response = await fetch(url, {method:"POST", body: formData})
            // const task = await response.json()
            // dispatch({type:"addTask", payload: task})
            addTodo({...formData, id: crypto.randomUUID()})
            setFormData(null)
        }
        
        formData && postTodo()
    }, [formData])

    return {loading, error}
}
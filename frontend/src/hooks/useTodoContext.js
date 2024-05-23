import { createContext, useReducer, useContext} from "react";

const todoContext = createContext()

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'initTodos': 
            return [...action.payload]
        case 'addTodo': 
            return [...state, action.payload]
        case 'removeTodo': 
            return state.filter((todo) => todo.id !== action.payload.id)
        case 'updateTodo': 
            return state.todos.map((task) => {
                if (task.id === action.payload.id) {return action.payload} else {return task}
            });
        default: 
            return state
    }
}


export const TodoContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todoReducer, [])

    const initTodos = (todos) => {
        dispatch({type: "initTodos", payload: todos})
    }
    const addTodo = (todo) => {
        dispatch({type: "addTodo", payload: todo})
    }
    const removeTodo = (todo) => {
        dispatch({type: "removeTodo", payload: todo})
    }
    const updateTodo = (todo) => {
        dispatch({type: "updateTodo", payload: todo})
    }

    return (
        <todoContext.Provider
            value={{todos, initTodos, addTodo, removeTodo, updateTodo}}
        >
            {children}
        </todoContext.Provider>
    )
}


export const useTodoContext = () => useContext(todoContext)
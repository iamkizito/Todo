
import Home from "./pages/Home";
import { TodoContextProvider } from "./hooks/useTodoContext";

const App = () => {
    return (
        <TodoContextProvider>
            <Home/>
        </TodoContextProvider>
    )
}



export default App;
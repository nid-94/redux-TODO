import "./App.css";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
    return (
        <div className="App">
            <h1>to do</h1>
            <AddTask />
            <TaskList />
        </div>
    );
}

export default App;

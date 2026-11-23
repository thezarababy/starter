import {useState} from "react";

function App() {
  const [tasks, setTasks]=useState<string[]>([]);
  const [newTask, setNewTask]=useState<string>("");

  const addTask=()=>{
    if(newTask.trim()==="")return
    setTasks([...tasks, newTask.trim()])
    setNewTask("")
  }
  return (
    <main>
      <h1>Daily Tasks</h1>
      <p>Organise your day, one task at a time.</p>
      <input type="text" placeholder="enter a new task" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
      <button>Add Task</button>
      <ul></ul>
    </main>
  );
}

export default App;
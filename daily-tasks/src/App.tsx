import {useState} from "react";

interface Task{
  id:number;
  title:string;
  completed:boolean;
}

function App() {
  const [tasks, setTasks]=useState<Task[]>([]);
  const [newTask, setNewTask]=useState<string>("");

  const addTask=()=>{
    if(newTask.trim()==="")return

   const task:Task={
    id:Date.now(),
    title:newTask,
    completed:false
   }
    setTasks([...tasks, task])
    setNewTask("")
  }
  return (
    <main>
      <h1>Daily Tasks</h1>
      <p>Organise your day, one task at a time.</p>
      <input type="text" placeholder="enter a new task" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {
          tasks.map((task)=>(
            <li key={task.id}>
              {task.title}
              </li>
          ))
        }
      </ul>
    </main>
  );
}

export default App;
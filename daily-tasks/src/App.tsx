import {useState} from "react";

function App() {
  const [tasks, setTasks]=useState<string[]>([]);
  return (
    <main>
      <h1>Daily Tasks</h1>
      <p>Organise your day, one task at a time.</p>
      <input type="text" placeholder="enter a new task" />
      <button>Add Task</button>
      <ul></ul>
    </main>
  );
}

export default App;
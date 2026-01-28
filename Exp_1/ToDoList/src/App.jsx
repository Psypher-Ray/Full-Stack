import React, { useState } from "react";
import "./App.css";


export default function TodoApp() {
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");


const addTask = () => {
if (input.trim() === "") return;
setTasks([...tasks, input]);
setInput("");
};


const deleteTask = (index) => {
setTasks(tasks.filter((_, i) => i !== index));
};


return (
<div className="container">
<h1>Simple To-Do List</h1>


<div className="input-box">
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Enter a task"
/>
<button onClick={addTask}>Add</button>
</div>


<ul>
{tasks.map((task, index) => (
<li key={index}>
{task}
<button className="delete" onClick={() => deleteTask(index)}>
X
</button>
</li>
))}
</ul>
</div>
);
}
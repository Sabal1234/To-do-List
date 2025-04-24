import { useState } from 'react'
import { DeleteToDo } from './component/DeleteTask';
import './App.css'
import { EditTask } from './component/EditTask';

function App() {
 const [todoList, setTodoList] = useState([]);
 const [taskName, setTaskName] = useState("");
 const handleChange = (e) => {
 setTaskName(e.target.value);
};
 const submitTask = () => {
 const newTask = {
 id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
task: taskName, }; setTodoList([...todoList, newTask]); setTaskName("");
 };
 const deleteList = (id) => {
 const updateList = todoList.filter((task) => task.id !== id);
 setTodoList(updateList);
  };
const editTask = (id, updatedTask) => {
  const updatedList = todoList.map((task) =>
    task.id === id ? { ...task, ...updatedTask } : task
  );
  setTodoList(updatedList);
};


 return (
 <div className="container">
 <div className="input-section">
  <input type="text" value={taskName} onChange={handleChange} />
  <button onClick={submitTask}>Add Task</button>
 </div>
          <div className="list-section">
              
             {todoList.map((value) => (
  <div key={value.id} className="task-wrapper">
    <DeleteToDo
      taskName={value.task}
      id={value.id}
      deleteTask={deleteList}
    />
    <EditTask
      taskName={value.task}
      id={value.id}
      editTask={editTask}
    />
  </div>
))}

                  
             
 </ div>
    </div>
);
}
export default App;
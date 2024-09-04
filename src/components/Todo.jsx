import React,{useState} from "react";
import useStorage from "../storage/useStorage";

const Todo = () => {
  const { todo, addTask ,delTask} = useStorage()

  const [task,setTask] = useState('')
  const handleAdd =(e) => {
    e.preventDefault()
    addTask(task)
  }
  

  return (
    <>
    <form onSubmit={handleAdd}>
    <input value={task} onChange={(e) => setTask(e.target.value)} type="text" />
    <button>Add</button>
    </form>
      {todo.map((el) => (
        <div key={el.id} className="ctn">
          <p>{el.task}</p> 
            <button onClick={()=>delTask(el.id)}>Del</button>
        </div>
      ))}
    </>
  );
};

export default Todo;

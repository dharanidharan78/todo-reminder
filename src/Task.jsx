import { useState } from "react";

function Task({addTask}){
    const [task ,setTask]=useState("");
    const handleSubmit =(e) =>{
        e.preventDefault();



    if (task.trim()==="")return;
    addTask(task);
    setTask("");
    };
    
    
    
    return(



       <form className="mt-6 flex flex-col items-center gap-4" onSubmit={handleSubmit}>
    
        <input className="border border-gray-300 rounded-lg w-70 h-10 px-3" value={task}  onChange={(e)=>setTask(e.target.value)}placeholder="Enter a Task"/>

        <button  className="task-addbtn flex w-fit rounded-lg bg-blue-500 px-4 py-2 text-white border border-gray-500 hover:bg-blue-700" type="submit">add task</button>

    </form>);

}

export default Task;
import { useState, useEffect } from "react";
import Task from "./Task";
import TaskItem from "./TaskItem";

function App() {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      // normalize older formats where tasks were stored as strings
      return Array.isArray(parsed)
        ? parsed.map((t) => (typeof t === "string" ? { text: t, completed: false } : t))
        : [];
    } catch (e) {
      return [];
    }
  });
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const addTask = (newTask) => {
    setTask([
      ...task,
      {
        text: newTask,
        completed: false,
      },
    ]);
  };

  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const completeTask = (index) => {
    setTask(
      task.map((item, i) =>
        i === index
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );
  };

  const editTask = (index) => {
    const newTask = prompt("you change to the task edit  :", task[index].text);

    if (newTask == null || newTask.trim() === "") {
      return;
    }

    setTask(
      task.map((item, i) => (i === index ? { ...item, text: newTask } : item))
    );
  };

  // compute filtered tasks
  const filteredTask = task.filter((item) => {
    const text = (typeof item === "string" ? item : item.text) || "";
    const matchesSearch = text.toLowerCase().includes(search.toLowerCase());
    if (!matchesSearch) return false;
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <h1 className="title text-4xl"  >Task manager</h1>
      <div className="search-row">
        <input
          className="input-search border border-gray-300 rounded-lg"
          type="text"
          placeholder="search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Task addTask={addTask} />

     

     

      <div className=" flex justify-center gap-6  pt-30">
        <button  className=" flex bg-blue-500 gap-10 rounded-lg p-1 border border-gray-500 text-white hover:bg-blue-700"onClick={() => setFilter("all")}>all</button>
        <button  className=" flex bg-blue-500 gap-10 rounded-lg p-1 border border-gray-500 text-white hover:bg-blue-700"onClick={() => setFilter("active")}>active</button>
        <button  className=" flex bg-blue-500 gap-10 rounded-lg p-1 border border-gray-500 text-white hover:bg-blue-700"onClick={() => setFilter("completed")}>completed</button>
      </div>


       <div className="">
        {filteredTask.map((item) => {
        const index = task.indexOf(item);
        return (
          <TaskItem className="output "
            key={index}
            task={item}
            index={index}
            deleteTask={deleteTask}
            completeTask={completeTask}
            editTask={editTask}
          />
        );
      })}
       </div>
     {filteredTask.length === 0 ? (
        <p className=" task-output  flex items-center flex-col justify-center pt-4">
          {search
            ? "no tasks found"
            : filter === "completed"
            ? "no completed tasks"
            : filter === "active"
            ? "no active tasks"
            : "no tasks yet. add a task!"}
        </p>
      ) : null}
    
    
    
    
    </>
  );
}

export default App;

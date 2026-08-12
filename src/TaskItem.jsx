function TaskItem({task,index,deleteTask,completeTask ,editTask}){


    return(


             <div className="mx-auto mt-4 w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            {task.completed ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 10-1.414 1.414L9 12.414l4.707-4.707z" clipRule="evenodd" />
                                </svg>
                            ) : null}

                            <span
                                className="text-lg font-medium text-gray-800"
                                style={{ textDecoration: task.completed ? "line-through" : "none" }}
                            >
                                {task.text}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                        <button aria-label="Delete task" title="Delete" className="rounded-lg border border-gray-300 bg-red-500 p-2 text-white hover:bg-red-600" onClick={()=>deleteTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 10-2 0v7a1 1 0 102 0V8zm4 0a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button aria-label={task.completed ? "Undo complete" : "Mark complete"} title={task.completed ? "Undo" : "Complete"} className="rounded-lg border border-gray-300 bg-green-500 p-2 text-white hover:bg-green-600" onClick={()=> completeTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                {task.completed ? (
                                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L9 10.586l3.293-3.293a1 1 0 111.414 1.414L9 13.414 6.293 10.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                ) : (
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3z" clipRule="evenodd" />
                                )}
                            </svg>
                        </button>

                        <button aria-label="Edit task" title="Edit" className="rounded-lg border border-gray-300 bg-yellow-500 p-2 text-white hover:bg-yellow-600" onClick={()=>editTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 010 2.828l-9.193 9.193a1 1 0 01-.464.263l-4 1a1 1 0 01-1.213-1.213l1-4a1 1 0 01.263-.464l9.193-9.193a2 2 0 012.828 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    );

  
}

export default TaskItem;
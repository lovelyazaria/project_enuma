import { useEffect, useState } from "react";
function useTask() {
    const [tasks, setTasks] = useState(()=>{
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    const addTask = (task)=>{
        const newTask = {
            id: +new Date(),
            description: task.trim(),
            status: "0"
        }
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const deleteTask = (id)=>{
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const updateTask = (id, newDescription)=>{
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, description: newDescription} : task));
    };

    const toggleStatus = (id)=>{
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, status: task.status === "0" ? "1" : "0"} : task));
    };

  
    return {tasks, addTask, deleteTask, updateTask, toggleStatus};
}

export default useTask;
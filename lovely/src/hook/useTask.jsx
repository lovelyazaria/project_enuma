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

    const updateTask = (id, newDesription)=>{
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? {...task, description: newDesription} : task));
    };

  
    return {tasks, addTask, deleteTask, updateTask};
}

export default useTask;
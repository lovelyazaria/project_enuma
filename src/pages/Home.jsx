import { useState } from "react";
import useTask from "../hook/useTask";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
    const { tasks, addTask, deleteTask, updateTask, toggleStatus } = useTask();
    console.log(toggleStatus);
    const [filter, setFilter] = useState("all");
    const handleEdit= (id) => {
        const newTasks = prompt('Edit tugas:');
        if (newTasks) {
            updateTask(id, newTasks);
        }
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.status === "1";
        if (filter === "pending") return task.status === "0";
        return true;
    });
    
    return (
    <div className="home-container">
        <div className="home-section">
                <h1 className="home-title">Daftar Tugas</h1>
                <p className="home-subtitle">Kelola prioritas harian Anda dengan mudah.</p>

            <TodoForm onAddTask={addTask} />
            </div>

        <div className="task-section">
            <div className="task-header">
            <h3>DAFTAR TUGAS</h3>
            
            <div className="filter">
                <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
                    Semua
                </button>
                <button className={filter === "pending" ? "active" : ""} onClick={() => setFilter("pending")}>
                    Belum Selesai
                </button>
                <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>
                    Selesai
                </button>
            </div>
        </div>

            <div className="task-container">
                <TodoList tasks={filteredTasks} onDelete={deleteTask} onEdit={handleEdit} onToggle={toggleStatus} />
            </div>
        </div>
    </div>
  );
}

import useTask from "../hook/useTask";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
    const { tasks, addTask, deleteTask, updateTask } = useTask();
    const handleEdit= (id) => {
        const newTasks = prompt('Edit tugas:');
        if (newTasks) {
            updateTask(id, newTasks);
        }
    };
    
    return (
    <>
    <h1>Todo Task</h1>
    <TodoForm onAddTask={addTask} />
    <TodoList tasks={tasks} onDelete={deleteTask} onEdit={handleEdit} />
    </>
  );
}
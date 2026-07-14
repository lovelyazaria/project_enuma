import TodoItem from "./TodoItem";
function TodoList({tasks, onDelete, onEdit, onToggle}) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />

      ))}
    </div>
  );
}

export default TodoList;
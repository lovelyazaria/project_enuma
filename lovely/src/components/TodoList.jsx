import TodoItem from "./TodoItem";
function TodoList({tasks, onDelete, onEdit}) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />

      ))}
    </div>
  );
}

export default TodoList;
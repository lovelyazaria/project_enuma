import TodoItem from "./TodoItem";
function TodoList() {
  return (
    <div className="todo-list">
      <TodoItem task="Tugas 1" />
      <TodoItem task="Tugas 2" />
      <TodoItem task="Tugas 3" />
      <TodoItem task="Tugas 4" />
      <TodoItem task="Tugas 5" />
      <TodoItem task="Tugas 6" />
    </div>
  );
}

export default TodoList;
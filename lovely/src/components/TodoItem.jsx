function TodoItem({task, onDelete, onEdit}) {
  return (
    <div className="tugas">
      <input type="checkbox" />
      <p>{task.description}</p>

      <button onClick={() => onEdit(task.id)}>
        Edit
      </button>

      <button onClick={() => onDelete(task.id)}>
        Hapus
      </button>
    </div>
  );
}

export default TodoItem;
function TodoItem({task, onDelete, onEdit, onToggle}) {
  return (
    <div className="tugas">
      <div className="task-left">
      <input
        type="checkbox"
        checked={task.status === "1"}
        onChange={() => onToggle(task.id)}
      />

      <p className={task.status === "1" ? "completed" : ""}>
        {task.description}
      </p>
    </div>

    <div className="task-action">
      <button className="btn-edit" onClick={() => onEdit(task.id)}>
        Edit
      </button>

      <button className="btn-delete" onClick={() => onDelete(task.id)}>
        Hapus
      </button>
    </div>
    </div>
  );
}

export default TodoItem;
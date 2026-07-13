function TodoItem({task}) {
  return (
    <div className="tugas">
      <input type="checkbox" />
      <p>{task}</p>
      <button>edit</button>
      <button>hapus</button>
    </div>

  );
}

export default TodoItem;
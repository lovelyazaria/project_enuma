import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTask(input);
      setInput("");
    };

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Masukkan tugas baru' value={input} onChange={(e) => setInput(e.target.value)}/>  
      <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default TodoForm;
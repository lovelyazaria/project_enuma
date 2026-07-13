function TodoForm(onAddTask) {
  return ( <>

    <div className="form">
    <form>
      <input type="text" placeholder='Masukkan tugas baru' />  
      <button>Tambah</button>
      </form>
    </div>
    </>
  );
}

export default TodoForm;
export default function Project() {
  return (
    <div className="project-container">
        <h1 className="project-title">Project</h1>
        <p className="project-subtitle">Beberapa project yang pernah saya buat</p>

    <div className="project-grid">
      <div className="project-card">
        <img src="" alt=""/>
        <h2>Todo App</h2>
        <p>Aplikasi sederhana untuk mencatat daftar kegiatan.</p>
        <span>React</span>
      </div>
    </div>

    <h2 className="section-title">Bootcamp</h2>

    <div className="bootcamp-grid">
      <div className="bootcamp-card">
        <h3>🎓 Bootcamp</h3>

        <p>
          Saat ini saya belum pernah mengikuti bootcamp
          atau pelatihan di luar sekolah.
        </p>

        <span>Status: Belum Pernah Mengikuti</span>
      </div>
    </div>

    </div>
);
}
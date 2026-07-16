import { useState } from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpeg";

export default function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      image: project1,
      title: "Herbify.id",
      description:
        "Website informasi dan katalog produk herbal.",
      tech: "HTML • CSS",
    },
    {
      image: project2,
      title: "Arena Book",
      description:
        "Website pemesanan lapangan olahraga berbasis web.",
      tech: "HTML • CSS • PHP • MySQL",
    },
    {
      image: project3,
      title: "Booking salon",
      description:
        "Website booking salon berbasis web yang dirancang untuk memudahkan pelanggan dalam melakukan pemesanan layanan perawatan dan mengatur jadwal kunjungan.",
      tech: "Laravel • PHP • HTML • CSS • MySQL",
    },
  ];

  return (
    <>
      <div className="project-container">
        <h1 className="project-title">Project</h1>
        <p className="project-subtitle">
          Beberapa project yang pernah saya buat
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="clickable-image"
                onClick={() => setSelectedImage(project.image)}
              />

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.tech}</span>
            </div>
          ))}
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

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="close-button"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
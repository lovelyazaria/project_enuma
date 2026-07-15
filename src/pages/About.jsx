import { useState } from "react";
import "../App.css";
import day11 from "../assets/day1-1.png";
import day12 from "../assets/day1-2.png";
import day13 from "../assets/day2-1.png";
import day14 from "../assets/day2-2.png";
import day15 from "../assets/day2-3.png";
import day16 from "../assets/day2-4.png";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);
    const activities = [
    {
        day: "Pelatihan PKL Day 1",
         date: "13 Juli 2026",
         documentation: [
        {
            image: day11,
            title: "Pengenalan React JS",
            description:
            "Mempelajari dasar React JS, struktur project, JSX, component, serta cara menjalankan project menggunakan Vite.",
        },
        {
            image: day12,
            title: "Pengenalan Git & GitHub",
            description:
            "Mempelajari dasar version control menggunakan Git serta cara membuat repository, commit, push, dan pull melalui GitHub.",
        },
    ],
    },
    {
    day: "Pelatihan PKL Day 2",
    date: "14 Juli 2026",
    documentation: [
        {
        image: day13,
        title: "Antigravity dan Supabase",
        description:
            "Mempelajari pembuatan website dengan mengintegrasikan Antigravity dan Supabase. Website memanfaatkan fitur Supabase, yaitu Authentication untuk sistem login dan registrasi, Database untuk menyimpan serta mengelola data, dan Storage untuk mengunggah serta menyimpan file atau gambar yang digunakan dalam aplikasi.",
        },
        {
        image: day14,
        },
        {
        image: day15,
        },
        {
        image: day16,
        title: "Vercel",
        description:
            "Mempelajari proses deployment website menggunakan Vercel dengan menghubungkan repository GitHub. Setelah repository terhubung, website dapat di-deploy secara otomatis sehingga setiap perubahan yang di-push ke GitHub akan langsung diperbarui pada website yang telah dipublikasikan.",
        },
    ],
    },
    {
    day: "Pelatihan PKL Day 3",
    date: "15 Juli 2026",
    documentation: [
        {
        image: null,
        title: "Supabase Authentication",
        description:
            "Mengimplementasikan fitur Register, Login, Logout, serta Protected Route menggunakan Supabase Authentication.",
        },
        {
        image: null,
        title: "Database CRUD",
        description:
            "Membuat fitur Create, Read, Update, dan Delete menggunakan database Supabase untuk menyimpan data aplikasi.",
        },
    ],
    },
    {
    day: "Pelatihan PKL Day 4",
    date: "16 Juli 2026",
    documentation: [
        {
        image: null,
        title: "Supabase Storage",
        description:
            "Mempelajari cara mengunggah, menyimpan, dan menampilkan gambar menggunakan fitur Storage pada Supabase.",
        },
        {
        image: null,
        title: "Penyelesaian Project",
        description:
            "Melakukan penyempurnaan tampilan website, memperbaiki bug, serta mempresentasikan hasil project kepada pembimbing.",
        },
    ],
    },
    ];

  return (
  <>
    <section className="about-container">
      <div className="about-header">
        <h1>Dokumentasi Kegiatan Persiapan PKL</h1>
        <p>
          Halaman ini berisi dokumentasi kegiatan selama mengikuti
          pelatihan Praktik Kerja Lapangan (PKL).
        </p>
      </div>

      {activities.map((activity, index) => (
        <div className="about-day-card" key={index}>
          <div className="about-day-title">
            <h2>{activity.day}</h2>
            <span>{activity.date}</span>
          </div>

          {activity.documentation.map((doc, i) => (
            <div className="about-activity" key={i}>
              <div className="about-activity-image">
                {doc.image ? (
                  <img src={doc.image} alt={doc.title} className="clickable-image" onClick={() => setSelectedImage(doc.image)} />
                ) : (
                  <div className="image-placeholder">Belum ada dokumentasi</div>
                )}
              </div>

              <div className="about-activity-content">
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
    
    {selectedImage && (
      <div className="image-modal" onClick={() => setSelectedImage(null)}>
        <img src={selectedImage} alt="Preview" className="modal-image" onClick={(e) => e.stopPropagation()} />
        <button className="close-button" onClick={() => setSelectedImage(null)}>✕</button>
      </div>
    )}
  </>
);
}
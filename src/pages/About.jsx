import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import day11 from "../assets/day1-1.png";
import day12 from "../assets/day1-2.png";
import day13 from "../assets/day1-3.png";
import day14 from "../assets/day1-4.png";
import day15 from "../assets/day1-5.png";
import day16 from "../assets/day2-1.png";
import day17 from "../assets/day2-2.png";
import day18 from "../assets/day2-3.png";
import day19 from "../assets/day2-4.png";
import day20 from "../assets/day3-1.png";
import day21 from "../assets/day3-2.png";

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
            link: "https://project-enuma.vercel.app",
        },
        {
        image: day14,
        },
        {
        image: day15,
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
        image: day16,
        title: "Antigravity dan Supabase",
        description:
        "Mempelajari pembuatan website dengan mengintegrasikan Antigravity dan Supabase. Website memanfaatkan fitur Supabase, yaitu Authentication untuk sistem login dan registrasi, Database untuk menyimpan serta mengelola data, dan Storage untuk mengunggah serta menyimpan file atau gambar yang digunakan dalam aplikasi.",
        link:"https://instership-journey.vercel.app",
        },
        {
        image: day17,
        },
        {
        image: day18,
        },
        {
        image: day19,
        title: "Vercel",
        description:
            "Mempelajari proses deployment website menggunakan Vercel dengan menghubungkan repository GitHub. Setelah repository terhubung, website dapat di-deploy secara otomatis sehingga setiap perubahan yang di-push ke GitHub akan langsung diperbarui pada website yang telah dipublikasikan.",
        },
    ],
    },
    {
    day: "Pelatihan PKL Day 3",
    date: "16 Juli 2026",
    documentation: [
        {
        image: day20,
        title: "Antigravity & AI Agent",
        description:
        "Gravity AI Coding Agent digunakan sebagai pendamping dalam proses pengembangan website portofolio, mulai dari menyusun struktur halaman, membantu penulisan kode HTML, CSS, dan JavaScript.",
        link: "https://portofolio-lovely-eight.vercel.app",
        },
        {
        image: day21,
        title: "Tinkercad",
        description:
            "Mengenal website Tinkercad sebagai media untuk mendesain objek 3D. Pada praktik ini, dibuat sebuah model balok tanpa tutup menggunakan fitur-fitur dasar Tinkercad, seperti mengatur ukuran, menyusun bentuk, dan menggabungkan objek menjadi satu desain 3D.",
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

                {doc.link && (
                  <a href={doc.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    🔗 Lihat Hasil Project
                  </a>
                )}
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
import lovely from "../assets/lovely.jpeg";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <p className="profile-subtitle">Kenalan lebih dekat</p>

      <div className="profile-content">
        <div className="card about">
          <h2>About me</h2>
          <p>
            Halo! Saya Lovely Azaria Riskya, siswi SMK Negeri 2 Surakarta jurusan Pengembangan Perangkat Lunak dan Gim. Saya memiliki ketertarikan dalam pengembangan website serta senang mempelajari teknologi baru untuk terus meningkatkan kemampuan dan pengalaman di bidang teknologi informasi.
          </p>
        </div>

        <div className="card profile-box">
          <img src={lovely} alt="Foto Profile Lovely" />
          <h2>Hello I'm</h2>
          <h1>Lovely</h1>

          <div className="social">
            <a
              href="https://github.com/lovelyazaria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/ell0ovee?igsh=MW1tYjF3YjFtZjViMA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
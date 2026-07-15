import lovely from "../assets/lovely.jpeg";
import { FaGithub, FaInstagram} from "react-icons/fa"

export default function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <p className="profile-subtitle">Kenalan lebih dekat</p>
      
      <div className="profile-content">
        <div className="card details">
          <h2>Details</h2>
          <p><strong>Nama</strong></p>
          <span>Lovely Azaria Riskya</span>

          <p><strong>Status</strong></p>
          <span>Pelajar</span>

          <p><strong>Sekolah</strong></p>
          <span>SMK Negeri 2 Surakarta</span>

          <p><strong>Jurusan</strong></p>
          <span>PPLG</span>
        </div>

        <div className="card about">
        <h2>About me</h2>
        <p>Halo! Aku Lovely Azaria Riskya, seorang siswa SMK Negeri 2
            Surakarta jurusan Pengembangan Perangkat Lunak dan Gim.
            Saat ini aku sedang belajar membuat website menggunakan
            HTML, CSS, JavaScript, dan React.</p>
            <button>Lihat Project</button>
        </div>

        <div className="card profile-box">
          <img src={lovely} alt="Foto Profile Lovely"/>
          <h2>Hello I'm</h2>
          <h1>Lovely</h1>

          <div className="social">
            <a href="https://github.com/lovelyazaria" target="blank" rel="noopener noreferrer">
            <FaGithub />
            </a>

            <a href="https://www.instagram.com/ell0ovee?igsh=MW1tYjF3YjFtZjViMA==" target="blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}

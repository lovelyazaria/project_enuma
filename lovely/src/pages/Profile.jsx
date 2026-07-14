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
          <img src="" alt=""/>
          <h2>Hello I'm</h2>
          <h1>Lovely</h1>

          <p>Siswa PPLG yang senang belajar membuat website sederhana.</p>

          <div className="social">
            <FaGithub />
            <FaInstagram />
          </div>
        </div>


      </div>
    </div>
  );
}

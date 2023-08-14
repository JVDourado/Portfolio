import {FaGithub} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'
import {IoLogoWhatsapp} from 'react-icons/io'
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contate-me</h3>
          <p href='mailto:barbosa.joaodourado@gmail.com?'>Email: barbosa.joaodourado@gmail.com</p>
          <p>Telefone: +55 11 98630-3196</p>
        </div>

        <div className="footer-section">
          <h3>Links rápidos</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contato">Contate-me</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes</h3>
          <ul className="social-links">
            <li><a href="https://github.com/JVDourado" className="github_icon"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/jvdouradobarbosa/" className="linkedin_icon"><ImLinkedin/></a></li>
            <li><a href="https://wa.me/5511986303196" className="whatsapp_icon"><IoLogoWhatsapp/></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} By João Victor D. Barbosa. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
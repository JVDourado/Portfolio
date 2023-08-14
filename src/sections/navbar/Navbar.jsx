import {useState} from 'react'
import {BsFillSunFill} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'
import './navbar.css'
import Logo from '../../assets/logo.png'
import data from './data.js'


function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav>
      <div className='container nav__container'>
        <a href='index.html' className='nav__logo'>
          <img src={Logo} alt='Logo'></img>
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <a id='theme__icon' className={isDarkMode ? 'moon' : ''} onClick={handleThemeToggle}>
          {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
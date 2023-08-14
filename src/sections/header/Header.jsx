import { TypeAnimation } from 'react-type-animation'
import HeaderImage from '../../assets/header.jpg'
import data from './data.js';
import './header.css';

function Header() {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt='Header Portrait'></img>
        </div>
        <h3>
          <TypeAnimation 
            cursor={false} 
            sequence={[
              'João Victor Dourado Barbosa', 10000 
            ]}
          />
        </h3>
        <p>Olá, meu nome é João e sou um estagiário dedicado, buscando aprender e contribuir. Comprometido com o crescimento da equipe e ansioso para adquirir experiência prática em desenvolvimento.</p>
        <div className='header__cta'>
          <a href='#contato' className='btn primary'>Vamos conversar</a>
          <a href='#portfolio' className='btn light'>Meus Projetos</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
import {useState} from 'react'
import { RiMailSendFill } from 'react-icons/ri';
import CodeGif from '../../assets/coding-unscreen.gif';
import './contato.css';

function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  return (
    <section id='contato'>
      <form action="https://formspree.io/f/mwkdlqko"  method="POST">
        <h2>Contato</h2>
        <label>
          <h4>Nome</h4>
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          <h4>Email</h4>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <h4>Mensagem</h4>
          <textarea value={message} onChange={handleMessageChange} />
        </label>
        <button type="submit" className='btn primary'>
          Enviar
          <RiMailSendFill />
        </button>
      </form>
      <img type='gif' src={CodeGif} alt='' className='coding'></img>
    </section>
  );
}

export default Contato;

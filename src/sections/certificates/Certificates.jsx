import data from './data'
import Card from '../../components/Card';
import {BiShow} from 'react-icons/bi'
import './certificates.css';

const Certificates = () => {
  return (
    <section id='certificados'>
      <h2>Cursos e certificados</h2>
    <p>Cursos e certificados realizados nos últimos anos</p>
    <div className='container certificates__container'>
      {
        data.map(item => ( 
          <Card key={item.id} className='certificate light'>
            <div className='certificate__icon'>{item.icon}</div>
            <div className='certificate__details'>
              <h4>{item.title}</h4>
            </div>
            <a href={item.href} target='_blank' rel="noopener noreferrer" className='btn primary'><BiShow/></a>
        </Card>))
      }
    </div>
  </section>
  )
}

export default Certificates
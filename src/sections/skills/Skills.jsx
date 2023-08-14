import data from './data'
import Card from '../../components/Card';
import './skills.css';

function Skills() {
  return (
    <section id='habilidades'>
      <h2>Habilidades</h2>
      <p>Habilidades que venho desenvolvendo nos últimos anos</p>
      <div className='container services__container'>
        {
          data.map(item => ( 
            <Card key={item.id} className='service light'>
              <div className='service__icon'>{item.icon}</div>
              <div className='service__details'>
                <h4>{item.title}</h4>
              </div>
          </Card>))
        }
      </div>
    </section>
  )
}

export default Skills
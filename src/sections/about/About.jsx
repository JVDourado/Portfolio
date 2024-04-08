import AboutImage from '../../assets/coding2-unscreen.gif'
import CV from '../../assets/JoãoBarbosaCV.pdf'
import Card from '../../components/Card'
import data from './data'
import {RiFileDownloadFill} from 'react-icons/ri'
import './about.css'

const About = () => {
    return (
        <section id='sobre'>
            <div className="container about__container">
                <div className='about__left'>
                    <div className='about__portrait'>
                        <img src={AboutImage} alt='About'></img>
                    </div>
                </div>
                <div className='about__right'>
                    <h2>Sobre mim</h2>
                    <div className='about__cards'>
                        {
                            data.map(item => (<Card key={item.id} className='about__card'>
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>))
                        }
                    </div>
                    <p>Sou Bacharel em Sistemas de Informação de pela UNICAMP, onde adquiri uma sólida base em programação, design de bancos de dados e análise de sistemas. Ao longo do curso fui capaz de me aprimorar habilidades técnicas e a mentalidade necessária para contribuir com meu conhecimento para a área.</p>
                    <p>Possuo por volta de 14 mêses de experiência no mercado de trabalho, onde tive a oportunidade de estagiar na área administrativa em um escritório de contabilidade (sendo responsável por tratar de leads e prospects e assistência aos usuários dos sistemas do escritório), também atuei como estagiário numa empresa de geotecnologias, sendo responsável pelo desenvolvimento de aplicações web tanto front-end como back-end. E atualmente sou Desenvolvedor Web Junior, desenvolvendo e realizando manutenção de sites e aplicações tanto no front-end quanto no back-end</p>
                    <a href={CV} download={CV} className='btn primary'>Download CV<RiFileDownloadFill/></a>
                </div>
            </div>
        </section>
    )
}

export default About

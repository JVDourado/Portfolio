import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import data from './data'
import './portfolio.css';

function Portfolio() {

  //disable autoplaying carousel when  screen width is below 1080px
  const [autoPlay, setAutoPlay] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setAutoPlay(false);
    } else {
      setAutoPlay(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id='portfolio'>
    <h2>Portfolio</h2>
    <Carousel infiniteLoop showArrows autoPlay={autoPlay} stopOnHover>
      {data.map((data, index) => (
        <div key={index}>
          <a className='legend' target='_blank' rel='noreferrer' href={data.href} >{data.title}</a>
          <img src={data.imageUrl} alt={data.title} />
          <p className='description'>{data.description}</p>
        </div>
      ))}
    </Carousel>
  </section>
  )
}

export default Portfolio
import { useState } from 'react'
import data from './data'
import './floating-nav.css'

function FloatingNav() {

    const [activeIcon, setActiveIcon] = useState(null);

    const handleIconClick = (itemId) => {
        setActiveIcon(itemId);
    };

    return (
        <section id='floating__nav'>
            <div className='container floatnav__conatiner'>
                {
                    data.map(item => (
                        <a key={item.id} href={item.href} onClick={() => handleIconClick(item.id)}
                        className={activeIcon === item.id ? 'active' : ''}>{item.icon}
                        </a>
                    ))
                }
            </div>
        </section>
    );
}

export default FloatingNav
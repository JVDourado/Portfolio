import './card.css'

function Card ({children, className, onClick}) {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default Card
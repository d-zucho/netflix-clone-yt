import { useState, useEffect } from 'react'
import './styles/nav.styles.css'

const Nav = () => {
  const [show, setShow] = useState(true)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    console.log('useeffect')
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img
          src='https://pngimg.com/uploads/netflix/netflix_PNG25.png'
          className='nav__logo'
          alt='Netflix Logo'
        />
        <img
          width={150}
          src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
          className='nav__avatar'
          alt='netflix-avatar'
        />
      </div>
    </div>
  )
}

export default Nav

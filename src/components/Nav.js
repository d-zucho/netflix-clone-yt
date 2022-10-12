import './styles/nav.styles.css'

const Nav = () => {
  return (
    <div className='nav nav__black'>
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

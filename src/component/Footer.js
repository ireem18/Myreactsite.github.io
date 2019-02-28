import React from 'react'


export default function footer() {
  return (
    <footer className="navbar-fixed-bottom" style={{ backgroundColor: ' black', height: 75 }}>
      <div className="container">

        <div className="linkler d-flex justify-content-center align-items-center ">

          <a href={'https://github.com/ireem18/'} >
            <i className="fab fa-github fa-2x m-1" />
          </a>
          <a href={'https://www.linkedin.com/in/irem-demir%C3%B6z-80998517b/'} >
            <i className="fab fa-linkedin-in fa-2x m-1" />
          </a>
          <a href={'https://www.instagram.com/_iremdemiroz_/'} >
            <i class="fab fa-instagram fa-2x m-1" />
          </a>
        </div>
        <div className="uzantı d-flex justify-content-center align-items-center ">
        <p><strong>© 2018 Copyright:</strong>
          <a href="mailto:iremmdemiroz@gmail.com/"><strong>İrem Demiröz </strong></a></p>
        </div>

      </div>

    </footer>

  )
}

import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
            <div className="container justify-content-center alig-items-center">
                <a className="navbar-brand text-uppercase" href="/">{props.titulo}</a>
            </div>
    </nav>
  )
}

export default Navbar


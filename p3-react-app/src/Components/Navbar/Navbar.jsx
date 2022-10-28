import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Navbar = () => {
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
         
          <a href='#' className='logo flex'>
            <h1><MdOutlineTravelExplore className="icon"/>viaHero</h1>
          </a>

        </div>

        <div className='navBar'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>
                <H>Home</H>
                
              </a>
            </li>
          </ul>

        </div>
      
      
      </header>  
    
    
    </section>

  )
}

export default Navbar
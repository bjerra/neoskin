import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-nav.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-size-5"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo" >
                <img src={logo} alt="NeoSkin" style={{ maxHeight: '100%', width: '175px'}} />        
            </Link>        
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              style={{height: '75px', width: '75px'}}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">       
              <Link className="navbar-item" to="/about">
                About
              </Link>                      
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>    
              <Link className="navbar-item" to="/products">
                 Products
                </Link>   
                    
            </div>
            <div className="navbar-end has-text-centered">      
                <a class="navbar-item" href="https://www.bokadirekt.se/places/neoskin-jkpg-33692">
                  <span className="bd-btn">BOKA</span>
                </a>      
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

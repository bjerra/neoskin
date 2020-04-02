import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-nav.png'
import bokadirekt from '../img/bokadirekt.png'

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
        className="navbar-container"
        role="navigation"
        aria-label="main-navigation"
      >      
        <div className="container" style={{height: '100%'}}>
          <div className="navbar-logo">
            <Link to="/" className="navbar-item" title="Logo" >
                <img src={logo} alt="NeoSkin" style={{ maxHeight: '100%', width: '175px'}} />        
            </Link>         
          </div>

          <div
            className="navbar-main"
          >          
              <Link className="navbar-item" to="/about">
                Om
              </Link>                      
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>          
              <Link className="navbar-item" to="/products">
                 Behandlingar
                </Link>   
         </div>
         <div className="navbar-bd">      
                <a href="https://www.bokadirekt.se/places/neoskin-jkpg-33692" target="_blank" rel="noopener noreferrer">
                  <img src={bokadirekt} alt="BokaDirekt.se" style={{ maxHeight: '100%', width: '175px'}} />        
                </a>      
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar

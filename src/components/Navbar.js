import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-nav.png'
import bokadirekt from '../img/bokadirekt.png'
import beautybar from '../img/beautybar_logo.png'

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
            <Link to="/" className="navbar-logo" title="Logo" >
                <img src={logo} alt="NeoSkin" style={{ maxHeight: '100%', width: '175px'}} />        
            </Link>         

          <div
            className="navbar-main"
          >          
              <Link className="navbar-item" to="/om">
                Om
              </Link>                      
              <Link className="navbar-item" to="/blog">
                Blogg
              </Link>          
              <Link className="navbar-item" to="/behandlingar">
                 Behandlingar
              </Link>   
              <Link className="navbar-item" to="/kontakt">
                Kontakt
              </Link>   
         </div>
         <div className="navbar-bd">    
                <a href="https://www.beauty-bar.se/partner/neoskin/?ref=39" target="_blank" rel="noopener noreferrer">
                  <img src={beautybar} alt="beauty-bar.se" />        
                </a>   
                <a href="https://www.bokadirekt.se/places/neoskin-jkpg-33692" target="_blank" rel="noopener noreferrer">
                  <img src={bokadirekt} alt="BokaDirekt.se" />        
                </a>      
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar

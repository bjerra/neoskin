import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">    
                 
                
        <div className="content has-text-centered">
          
          <div className="container">

            <div className="columns is-centered" style={{marginRight: 0, marginLeft: 0}}>
              
              <div className="column is-3">             
                <img
                  src={logo}
                  alt="Neoskin"
                  style={{ width: '16em'}}
                />
              </div>
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list" style={{margin: '0 1rem'}}>                
                    <li>
                    <a href="tel:+46722065222" title="+46722065222">
                    <FontAwesomeIcon icon={faPhone} size="lg" color="#eee"/>    
                    <p className="contact-text">
                      072-2065222     
                    </p>
                          
                </a>
            </li>
             <li>
             <a href="mailto:anais@neoskin.se" title="anais@neoskin.se">
             <FontAwesomeIcon icon={faEnvelope} size="lg" color="#eee"/>   
             <p className="contact-text">
             anais@neoskin.se    
                    </p>
             
                  
              </a> 
             </li>
             <li>
                    <a rel="nofollow noopener noreferrer external" href="https://www.google.com/maps/search/?api=1&amp;query=57.7815209,14.1746004" target="_blank">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#eee"/>     
                    <p className="contact-text">
                      Smedjegatan <br/> 38 553 20<br/> 
                      Jönköping City  
                      </p>
                    </a>   
                    </li>    
                  </ul>
                </section>
              </div>        
              <div className="column is-3 social">
                <a href="https://www.facebook.com/neoskin.se/" target="_blank" rel="noopener noreferrer" title="neoskin.se@facebook">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>       
                <a href="https://instagram.com/neoskin.se" target="_blank" rel="noopener noreferrer" title="neoskin.se@Instagram">
                  <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                </a>       
                         
              </div>
              
            </div>
            
            <div className="columns" style={{display: "flex"}}>
              <div className="column">
              <Link to="/blog">
                    Blogg    
                  </Link> 
              </div>
            <div className="column">
            <a href="#" className="ch2-open-settings-btn">Kakor</a>
            </div>
          <div className="column">
          <a                        
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         <p className="contact-text">
                         Admin
                          </p>
                        
                      </a>
          </div>
        </div>
           
          </div>
                     
        </div>
       

      </footer>
    )
  }
}

export default Footer

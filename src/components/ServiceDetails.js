import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import boka from '../img/bokadirekt.png'

    const ServiceCard = ({service, isOffer}) => {
    
    const {price, time, url, variant} = service

    return(
            <div className="service-details">                                                                                             
                    {isOffer && 
                    <div className="container has-text-centered">                        
                        <span style={{margin: '1rem'}}>
                        ERBJUDANDE!
                        </span>                       
                            <FontAwesomeIcon icon={faStar} color="gold" />
                    </div>
                    }                              
                    <div className="columns" style={{margin: 0, display: 'flex'}}> 
                    <div className="column">
                        <p className="service-text">
                            {time}
                        </p> 
                    </div>
                    <div className="column">                   
                        <p className="service-text">
                            {price}
                        </p> 
                    </div>
                    <div className="column">
                        <a href={url} target="_blank" rel="noopener noreferrer">    
                            <img className="bd-btn" src={boka} alt={url}/>                                      
                        </a>
                    </div>                                                  
                    </div>   
                    <p className="variant-text">
                        {variant}
                    </p>                                                                                       
            </div>                          
    )
}

export default ServiceCard
import React from 'react'
import InfoCard from './ServiceInfoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const ServiceCard = ({data}) => {

    const {title, time, price, variant, info, url, alt, offer} = data
    
    const altInfo = () => (
        <div className="service-info">
                        <p className="service-title">
                            {alt.title}
                        </p>                        
                            <div className="columns" style={{margin: 0, display: 'flex'}}>
                            <div className="column"></div>
                        <div className="column">
                        <p className="service-text">
                            {alt.time}
                            </p> 
                        </div>
                        <div className="column">
                           
                            <p className="service-text">
                                {alt.price}
                            </p> 
                        </div>
                        <div className="column">
                            <a className="bd-btn" href={alt.url} target="_blank">BOKA</a>
                        </div>                                                  
                        </div>   
                                                    
    </div>    
    )

    

    return(
            <div className="service-card">                                                             
                    <div className="service-info">
                        <p className="service-title">
                            {title}
                        </p>      
                        {offer && 
                        <div className="container has-text-centered">
                            <FontAwesomeIcon icon={faStar} color="gold"/>
                            <span style={{margin: '1rem'}}>
                            ERBJUDANDE!
                            </span>
                           
                        <FontAwesomeIcon icon={faStar} color="gold" />
                        </div>
                        }
                                           
                            <div className="columns" style={{margin: 0, display: 'flex'}}>
                            <div className="column"></div>
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
                            <a className="bd-btn" href={url} target="_blank">BOKA</a>
                        </div>                                                  
                        </div>   
                                          
                    </div>     
                   
                    {alt &&
                        altInfo()
                    }
                     <p className="variant-text">
                            {variant}
                        </p>  
                    <InfoCard data={info} />                           
            </div>                          
    )
}

export default ServiceCard
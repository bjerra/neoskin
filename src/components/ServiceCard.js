import React from 'react'
import InfoCard from './ServiceInfoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const ServiceCard = ({data, color}) => {

    const {title, info, alts} = data
    
    const serviceInfo = (service) => (
        <div>
       
        <div className="service-info">
            {alts &&
                <h2 style={{textAlign: 'center', fontSize: '1.5rem', backgroundColor: '#dcdcdc'}}>
                {service.title}
            </h2>  
            }
        
            {service.offer && 
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
                {service.time}
                </p> 
            </div>
            <div className="column">
                
                <p className="service-text">
                    {service.price}
                </p> 
            </div>
            <div className="column">
                <a className="bd-btn" href={service.url} target="_blank">BOKA</a>
            </div>                                                  
            </div>   
            <p className="variant-text">
                {service.variant}
            </p>                                                  
        </div>    
        </div>
    )

    return(
            <div className="service-card" style={{backgroundColor: color}}>     
            <h2 className="category-title">
                            {title}                            
                        </h2>                                                                          
                    {alts ? 
                            alts.map((alt) => serviceInfo(alt))
                            : serviceInfo(data)
                    }         
                    <InfoCard data={info} />        
                                       
            </div>                          
    )
}

export default ServiceCard
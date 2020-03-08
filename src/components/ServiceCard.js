import React from 'react'



const ServiceCard = ({data}) => {
    const {title, info, time, price, url } = data;
    return(   
            <div className="service-card" >                          
                    <p className="title is-4">
                        {title}
                    </p>      
                    <div className="service-info">
                    <div className="columns">
                        <div className="column">
                            {time}
                        </div>
                        <div className="column">
                            {price}
                        </div>
                        <div className="column">
                            <a className="bd-btn" href={url} target="_blank">BOKA</a>
                        </div>
                    </div>     
                    </div>
                   
                    <p className="is-size-6">
                        {info}
                    </p>                                                 
            </div>                          
    )
}

export default ServiceCard
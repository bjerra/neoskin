import React from 'react'



const ServiceCard = ({data}) => {
    const {title, info, time, price, url } = data;
    return(   
            <div className="service-card" >                          
                    <p className="title is-4" style={{fontWeight: 350, color: 'black'}}>
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
                    <div className="content" dangerouslySetInnerHTML={{__html: info}}>
                    </div>                                                                                           
            </div>                          
    )
}

export default ServiceCard
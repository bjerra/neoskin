import React from 'react'


const ServiceCard = ({showInfo, title, time, price, variant, info, url}) => (
            <div className="service-card">                                                             
                    <div className="service-info" onClick={() => showInfo(info)}>
                        <p className="service-title">
                            {title}
                        </p>                         
                            <div className="columns" style={{margin: 0, display: 'flex'}}>
                        <div className="column" style={{paddingTop: 0, paddingBottom:0, flex: 5}}>
                           
                        <p className="variant-text">
                            {variant}
                        </p>  
                       
                        </div>
                        <div className="column" style={{paddingTop: 0, paddingBottom:0, flex: 2}}>
                            <p className="service-text">
                            {time}
                            </p> 
                            <p className="service-text">
                                {price}
                            </p> 
                        </div>
                        <div className="column" style={{paddingTop: 0, paddingBottom:0}}>
                            <a className="bd-btn" href={url} target="_blank">BOKA</a>
                        </div>                               
                        </div>   
                                                 
                    </div>                                           
            </div>                          
    )


export default ServiceCard
import React from 'react'



const ServiceCard = ({data, close}) => {
    const { title, services, info } = data;
    return(   
        <div class="modal is-active">
            <div class="modal-background fade-in" onClick={close}>></div>
            <div class="modal-content slide-in">
            <div className="service-card" >                          
                    <p className="title is-4" style={{fontWeight: 350, color: 'black'}}>
                        {title}
                    </p>      
                    <div className="service-info">{
                    services.map((service, index) => (
                        <div className="columns" key={index}>
                        <div className="column">
                            {service.time}
                        </div>
                        <div className="column">
                            {service.price}
                        </div>
                        <div className="column">
                            <a className="bd-btn" href={service.url} target="_blank">BOKA</a>
                        </div>
                    </div>   
                    ))
                    }
                     
                    </div>   
                    {
                    info.map((infoData) => (
                        <div>
                        <div className="content" dangerouslySetInnerHTML={{__html: infoData.title}}>
                        </div>     
                        <div className="content" dangerouslySetInnerHTML={{__html: infoData.text}}>
                        </div>   
                        </div>
                    ))          
                    }    
                    
                                                                                                          
            </div> 
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
                                   
    )
}

export default ServiceCard
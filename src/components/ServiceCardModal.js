import React from 'react'



const ServiceCard = ({data, close}) => {
    const {title, info, time, price, url } = data;
    return(   
        <div class="modal is-active">
            <div class="modal-background" onClick={close}>></div>
            <div class="modal-content">
                <div className="service-card" style={{margin: '2rem'}}>                          
                    <p className="title is-4"style={{fontWeight: 350, color: 'black'}}>
                        {title}
                    </p>      
                    <div className="service-info">
                        <div className="columns" style={{display: 'flex'}}>
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
                   
                    <p style={{fontWeight: 350, color: 'black'}}>
                        {info}
                    </p>                                                 
                </div>  
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
                                   
    )
}

export default ServiceCard
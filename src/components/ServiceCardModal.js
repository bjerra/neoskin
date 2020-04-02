import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceCardModal = ({data, close, isOpen}) => {
    
    if(!data) return null;
    return(   
        <div className="modal is-active slider slide-in">
            <div className="modal-background fade-in" onClick={close}>></div>
            <div className="modal-content">
                <ServiceCard data={data} />
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
                                   
    )
}

export default ServiceCardModal
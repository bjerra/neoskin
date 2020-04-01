import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceCardModal = ({data, close, isOpen}) => {
    
    return(   
        <div className={`modal is-active slider ${isOpen ? 'slide-in' : 'slide-out'}`}>
            <div className="modal-background fade-in" onClick={close}>></div>
            <div className="modal-content">
                { data &&
                <ServiceCard data={data} />
                }
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
                                   
    )
}

export default ServiceCardModal
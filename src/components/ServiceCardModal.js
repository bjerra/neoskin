import React from 'react'
import ServiceCard from './ServiceCard'


const ServiceCardModal = ({data, close}) => {
    return(   
        <div class="modal is-active">
            <div class="modal-background fade-in" onClick={close}>></div>
            <div class="modal-content slide-in">
                <ServiceCard data={data} />
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
                                   
    )
}

export default ServiceCardModal
import React from 'react'
import CategoryCard from './CategoryCard'


const ServiceCardModal = ({data, close}) => {
    return(   
        <div class="modal is-active">
            <div class="modal-background fade-in" onClick={close}>></div>
            <div class="modal-content slide-in">
                <CategoryCard data={data} />
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
                                   
    )
}

export default ServiceCardModal
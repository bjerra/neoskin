import React, { useState } from 'react'
import useServicedata from './ServiceData'

const ServiceCategories = ({currentCategory, selectCategory }) => {
 
    const data = useServicedata().reduce((acc, current) => [...acc,current.category],[])
    const [isOpen, openMenu] = useState(false)
    return(   
        <div className="container has-text-centered is-hidden-tablet">
            <div 
            className={`dropdown ${isOpen ? 'is-active' : ''}`}>
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => openMenu(!isOpen)}>
                    <span>{currentCategory}</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                    {
                        data.map((category, index) => (
                            <a className="dropdown-item" onClick={
                                () => {
                                    selectCategory(category)
                                    openMenu(false)
                                }
                                }>
                            {category}
                        </a>
                        
                        )) 
                    }   
                    </div>
                </div>
            </div>   
            </div>
    )
}

export default ServiceCategories

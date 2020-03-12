import React, { useState } from 'react'
import arrow from '../img/logo.svg'

const ServiceList = ({ data, selectService, currentCategory }) => {
    
    const [expanded, toggleMenu] = useState(false)

    const menu = () => (
        <aside className="menu">                            
            <ul className="menu-list" style={{margin: '.25em'}}> 
            {
                data.map(({category, services }) => {
                return(                                        
                        <li key={category} >
                        <div className=" category-button"                         
                            onClick={() => selectService({category, services })}>
                        {category}
                        </div>                        
                        </li> 
        
            )})
            }                   
            </ul>                    
        </aside>
    )

    const dropdown = () => (      
            <div class={`dropdown ${expanded ? 'is-active' : ''}`} style={{width: '100%'}}>
            <div class="dropdown-trigger "style={{width: '100%', padding: '0 2rem'}}>
                <button class="button" style={{width: '100%'}} aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => toggleMenu(!expanded)}>
                <span>{currentCategory}</span>
                <span class="icon is-small">
                <img
                    src={arrow}
                    style={{ width: '14em', height: '10em' }}
                />
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                     <div class="dropdown-content">
                     { 
                         data.map(({category, services }) => {
                         return(   
                             <div className="dropdown-item">
                                 <div className="button category-button"                         
                                 onClick={() => {
                                     toggleMenu(false)
                                     selectService({category, services })}
                                 }>
                                 {category}
                                 </div>  
                             </div>
                         )})
                     }
                     
                 </div>             
            </div>
            </div>
    )

    return(
        <div>
            <div className="only-desktop">
                {menu()}
            </div>
            <div className="only-touch">
                {dropdown()}
            </div>      
        </div>
       
    )
}

export default ServiceList


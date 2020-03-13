import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Menu = ({ data, selectCategory, currentCategory }) => {
    
    const [expanded, toggleMenu] = useState(false)


    return(
        <div class={`dropdown ${expanded ? 'is-active' : ''}`} style={{width: '100%'}}>
            <div class="dropdown-trigger "style={{width: '100%', padding: '0 2rem'}}>
                <button class="category-button" style={{width: '100%', padding: '1rem', backgroundColor: '#fff', textAlign: 'center'}} aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => toggleMenu(!expanded)}>
                <span>Kategorier</span>              
                 <FontAwesomeIcon icon={faAngleDown} pull="right"/>
                
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu" style={{width: '100%'}}>
                     <div class="dropdown-content">
                     { 
                         data.map(({category }, index) => {
                         return(   
                             <div key={category} className="dropdown-item" style={{padding: '1rem'}}>
                                 <div className="category-button"                         
                                 onClick={() => {
                                     toggleMenu(false)
                                     selectCategory(index)}
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
}

export default Menu
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import filters from './FilterList'


const Filter = ({ selectFilter, currentFilter }) => {
    
    const [expanded, toggleMenu] = useState(false)


    return(
        <div class={`dropdown ${expanded ? 'is-active' : ''}`} style={{width: '100%'}}>
            <div class="dropdown-trigger "style={{width: '100%'}}>
                <button class="category-button" style={{width: '100%', padding: '1rem', backgroundColor: '#fff', textAlign: 'center'}} aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => toggleMenu(!expanded)}>
                <span>Områden</span>              
                 <FontAwesomeIcon icon={faAngleDown} pull="right"/>
                
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu" style={{width: '100%'}}>
                     <div class="dropdown-content">
                     { 
                         filters.map((filter , index) => {
                         return(   
                             <div key={filter} className="dropdown-item" style={{padding: '.5rem', marginLeft: '1rem'}}>
                                 <div className="category-button"                         
                                 onClick={() => {
                                     toggleMenu(false)
                                     selectFilter(filter)}
                                 }>
                                 {filter}
                                 </div>  
                             </div>
                         )})
                     }
                     
                 </div>             
            </div>
            </div>    
    )
}

export default Filter
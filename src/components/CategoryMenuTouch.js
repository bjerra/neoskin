import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import filters from './FilterList'

const Menu = ({ data, selectCategory, currentCategory, currentFilter, selectFilter }) => {
    
    const [expanded, toggleMenu] = useState("")

    const dropdown = ({items, label, onSelect}) => (
        <div className="column" style={{padding: '0'}}>
<       div className={`dropdown ${expanded === label ? 'is-active' : ''}`} style={{width: '100%'}}>
            <div className="dropdown-trigger "style={{width: '100%'}}>
                <button class="category-button" 
                    style={{width: '100%', padding: '.5rem', backgroundColor: '#fff', textAlign: 'center'}} 
                    aria-haspopup="true" 
                    aria-controls="dropdown-menu" 
                    onClick={() => toggleMenu(expanded === label ? '' : label)}>
                <span className="subtitle">{label}</span>              
                 <FontAwesomeIcon icon={faAngleDown} pull="right" color="#ddd"/>
                
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu" style={{width: '100%'}}>
                     <div className="dropdown-content">
                     { 
                         items.map((item, index) => {
                         return(   
                             <div key={item} className="dropdown-item" style={{padding: '.5rem'}}>
                                 <div className="category-button"                         
                                 onClick={() => {
                                     toggleMenu("")
                                     onSelect(index)}
                                 }>
                                 {item}
                                 </div>  
                             </div>
                         )})
                     }
                     
                 </div>             
            </div>
        </div> 
        </div>
    )

    const categories = data.reduce((acc, current) => ([...acc, current.category]),[])
    return( 
        <div className="columns" style={{width: '100%', margin: '0 1rem', display:'flex'}}>
            {dropdown({items: filters(), label: 'Områden', onSelect: selectFilter})}
            {dropdown({items: categories, label: 'Kategorier', onSelect: selectCategory})} 
        </div>
          
    )
}

export default Menu
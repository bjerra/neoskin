import React, { useState } from 'react'
import colors from './Colors'
import filters from './FilterList'

const Menu = ({ data, selectCategory, currentCategory, selectFilter, currentFilter }) => {
    
    const [tab, setTab] = useState(0)

    return(
        <div>
            <div className="tabs">
             <ul>
                <li className={`${tab === 0 ? 'is-active' : ''}`}>     
                    <a                                                
                        onClick={() => setTab(0)}>                                    
                        Behandlingstyp                           
                    </a>  
                    </li>
                    <li className={`${tab === 1 ? 'is-active' : ''}`}>
                        <a                                       
                        onClick={() => setTab(1)}>                                    
                        Behandlingsområde                           
                        </a> 
                    </li>
                </ul>
            </div>
            <aside className="menu category-menu">      
            {tab === 0 ? (                              
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    data.map(({category}, index) => {
                    return(                                        
                            <li key={category} >
                            <div className={`category-button ${currentFilter === -1 && currentCategory === index ? 'is-active' : ''}`}                         
                                onClick={() => selectCategory(index)}>                                    
                            {category}                        
 
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>    
            ) : (             
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    filters.map((filter, index) => {
                    return(                                        
                            <li key={filter} >
                            <div className={`category-button ${currentFilter === index ? 'is-active' : ''}`}                         
                                onClick={() => selectFilter(index)}
                                >
                                    
                            {filter}                        
                               
                           
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>   
            ) }   
            </aside>
        </div>
               
    )
}

export default Menu


import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import filters from './FilterList'

const Menu = ({ data, selectCategory, currentCategory, currentFilter, selectFilter }) => {
    
    const [tab, setTab] = useState(-1)

    return(
        <div className="category-menu">
            <div className="tabs">
             <ul>
                <li className={`${tab === 0 ? 'is-active' : ''}`}>     
                    <a onClick={() => setTab(tab === 0 ? -1 : 0)}>                                    
                        Kategori                           
                    </a>  
                    </li>
                    <li className={`${tab === 1 ? 'is-active' : ''}`}>
                        <a onClick={() => setTab(tab === 1 ? -1 : 1)}>                                    
                        Område                           
                        </a> 
                    </li>
                </ul>
            </div>
            <aside className="menu">      
            {tab === 0  &&                 
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    data.map(({category}, index) => {
                    return(                                        
                            <li key={category} >
                            <div className={`category-button ${currentFilter === -1 && currentCategory === index ? 'is-active' : ''}`}                         
                                onClick={() => {
                                    selectCategory(index)
                                    setTab(-1)
                                }}>                                    
                            {category}                        
 
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>                         
            }
             {tab === 1  &&          
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    filters.map((filter, index) => {
                    return(                                        
                            <li key={filter} >
                            <div className={`category-button ${currentFilter === index ? 'is-active' : ''}`}                         
                                onClick={() => {
                                    selectFilter(index)
                                    setTab(-1)
                                }}
                                >
                                    
                            {filter}                        
                               
                           
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>   
            }   
            </aside>
        </div>
               
    )
}

export default Menu
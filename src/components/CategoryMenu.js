import React, { useState } from 'react'
import colors from './Colors'
import filters from './FilterList'

const Menu = ({ data, selectCategory, currentCategory, selectFilter, currentFilter }) => {
    
    return(
                <aside className="menu" style={{}}>   
                <p class="category-title">
                    Kategorier
                </p>                         
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
                <p class="category-title">
                    Områden
                </p>     
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
        </aside>
    )
}

export default Menu


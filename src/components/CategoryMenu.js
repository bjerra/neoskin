import React, { useState } from 'react'
import colors from './Colors'

const Menu = ({ data, selectCategory, currentCategory }) => {
    
    return(
                <aside className="menu" style={{}}>   
                <p class="category-title">
                Kategorier
                </p>                         
                <ul className="menu-list" style={{margin:0, padding: ' 0 1rem'}}> 
                {
                    data.map(({category}, index) => {
                        const color = colors[index]
                    return(                                        
                            <li key={category} >
                            <div className={`category-button ${currentCategory === index ? 'is-active' : ''}`}                         
                                onClick={() => selectCategory(index)}
                                style={{backgroundColor: color}}>
                                    
                            {category}                        
                               
                           
                            </div>                        
                            </li>            
                )})
                }                   
                </ul>                    
        </aside>
    )
}

export default Menu


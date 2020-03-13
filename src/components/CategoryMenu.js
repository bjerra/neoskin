import React, { useState } from 'react'
import colors from './Colors'

const Menu = ({ data, selectCategory, currentCategory }) => {
    
    return(
                <aside className="menu" style={{paddingLeft: '2rem'}}>   
                <p class="category-title" style={{backgroundColor: '#eee'}}>
                Kategorier
                </p>                         
                <ul className="menu-list" style={{}}> 
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


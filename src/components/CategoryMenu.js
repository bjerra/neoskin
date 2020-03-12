import React, { useState } from 'react'

const Menu = ({ data, selectCategory, currentCategory }) => {
    
    return(
                <aside className="menu" style={{paddingLeft: '2rem'}}>   
                <p class="menu-label" style={{backgroundColor: '#eee'}}>
                    Välj Kategori
                </p>                         
                <ul className="menu-list" style={{}}> 
                {
                    data.map(({category}, index) => {
                    return(                                        
                            <li key={category} >
                            <div className={`category-button ${currentCategory === index ? 'is-active' : ''}`}                         
                                onClick={() => selectCategory(index)}>
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


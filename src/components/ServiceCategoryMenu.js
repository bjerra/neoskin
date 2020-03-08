import React, { useState } from 'react'



const ServiceCategories = ({data, currentCategory, selectCategory}) => {

    return(   
        <aside className="menu">                          
        <ul className="menu-list"> {
            data.map(({category }) => (   
                                      
                <li key={category}>
                <a style={{fontSize: '1rem', padding: '0.25em'}}className={`${category === currentCategory ? 'is-active' : ''}`} onClick={() => selectCategory(category)}>{category}</a>                      
               </li> 
            )) 
            }                   
        </ul>                    
        </aside>
    )
}

export default ServiceCategories
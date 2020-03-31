import React, { useState } from 'react'
import colors from './Colors'
import filters from './FilterList'

const Menu = ({ data, selectCategory, currentCategory, selectFilter, currentFilter }) => {
    
    const [tab, setTab] = useState(0)

    return(
        <div>
             <div className="columns" style={{width: '100%', margin: '0 1rem', display:'flex'}}>
                <button 
                    className={`button column ${tab === 0 ? 'is-active' : ''}`}                         
                    onClick={() => setTab(0)}>                                    
                    Kategorier                            
                </button>   
                <button 
                    className={`button column ${tab === 1 ? 'is-active' : ''}`}                         
                    onClick={() => setTab(1)}>                                    
                    Områden                            
                </button>                     
            </div>
            <aside className="menu">      
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


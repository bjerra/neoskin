import React from 'react'

const ServiceList = ({ data, selectService }) => {
    
    return(
        <aside className="menu ">                          
            <ul className="menu-list" style={{margin: '.25em'}}> {
                data.map(({category, services }) => {
                    return(                                        
                            <li key={category} >
                            <button className="category-button"                         
                             onClick={() => selectService({category, services })}>
                            {category}
                            </button>
                             </li> 

                )}) 
                            }                   
            </ul>                    
            </aside>
    )
}

export default ServiceList
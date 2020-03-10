import React from 'react'

const ServiceList = ({ data, selectService }) => {
    
    return(
        <aside className="menu ">                          
            <ul className="menu-list" style={{margin: '.25em'}}> {
                data.map(({category, services }) => {
                    return(                                        
                            <li key={category} >
                            <a className="subtitle" 
                                style={{paddingTop: '1em', marginBottom: 0, borderBottom: '1px solid #baa477', fontWeight: 350}}
                                onClick={() => selectService({category, services })}>
                            {category}
                            </a>
                             </li> 

                )}) 
                            }                   
            </ul>                    
            </aside>
    )
}

export default ServiceList
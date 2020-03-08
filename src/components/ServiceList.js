import React from 'react'


const ServiceList = ({ data, selectService, refs }) => {
    
    return(
        <aside className="menu ">                          
            <ul className="menu-list"> {
                data.map(({category, services }) => (   
                                          
                            <li key={category} ref={refs[category]}>
                            <p className="title is-4" >{category}</p>
                            <ul className="menu-list ">  {                           
                                    services.map(({title, info, time, price, url }, index) => (  
                                        <li className="servicelist-item">     
                                            <a className="subtitle" onClick={() => selectService({title, info, time, price, url })}>                                      
                                                 {title}   
                                            </a> 
                                                                                                                                                                               
                                        </li> 
                                    )) 
                                }         
                           </ul>
                </li> 

                )) 
                            }                   
            </ul>                    
            </aside>
    )
}

export default ServiceList
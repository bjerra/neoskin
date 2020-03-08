import React from 'react'


const ServiceList = ({ data, selectService, refs }) => {
    
    return(
        <aside className="menu ">                          
            <ul className="menu-list" style={{margin: '.25em'}}> {
                data.map(({category, services }) => (   
                                          
                            <li key={category} ref={refs[category]}>
                            <p className="title is-4" style={{paddingTop: '1em', borderBottom: '2px solid #ababab'}}>{category}</p>
                            <ul className="menu-list ">  {                           
                                    services.map(({title, info, time, price, url }, index) => (  
                                        <li className="servicelist-item">     
                                            <a className="subtitle is-6" onClick={() => selectService({title, info, time, price, url })}>                                      
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
import React from 'react'

const ServiceList = ({ data, selectService }) => {
    
    return(
        <aside className="menu ">                          
            <ul className="menu-list" style={{margin: '.25em'}}> {
                data.map(({category, services, variants, info }) => {
                    return(                                        
                            <li key={category} >
                            <a className="subtitle" 
                                style={{paddingTop: '1em', marginBottom: 0, borderBottom: '1px solid #baa477', fontWeight: 350}}
                                onClick={() => selectService({title: category, services: variants, info })}>
                            {category}
                            </a>

                            <ul className="menu-list" style={{backgroundColor: '#fafafa'}}>  {                           
                                    services.map((service, index) => (  
                                        <li className="servicelist-item">     
                                            <a className="subtitle is-6" 
                                                onClick={() => selectService({title: service.title, services: [{time: service.time, price: service.price, url:service.url }], info: service.info})}>                                      
                                                 {service.title}   
                                            </a> 
                                                                                                                                                                               
                                        </li> 
                                    )) 
                                }         
                           </ul>

                </li> 

                )}) 
                            }                   
            </ul>                    
            </aside>
    )
}

export default ServiceList
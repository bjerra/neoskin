import React, { useState, useEffect } from 'react'


const ServiceList = ({ data, selectService }) => {
    
    const refs = data.reduce((acc, value) => {
        acc[value.category] = React.createRef();
        return acc;
      }, {});
    
      const scrollTo = category =>
        refs[category].current.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });

    const [expanded, expandMenu] = useState(null)
    useEffect(() => {
        if(expanded){
            const top = refs[expanded].current.getBoundingClientRect().top;
            if (top > window.innerHeight * .6)
                scrollTo(expanded)
        }           
      });


    return(
        <aside className="menu ">                          
            <ul className="menu-list" style={{margin: '.25em'}}> {
                data.map(({category, services }) => {

                    const ref = React.createRef();
                    const scrollIntoView = () =>
                        ref.current.scrollIntoView({
                        block: 'start',
                        });

                    return( 
                                          
                            <li key={category} ref={refs[category]}>
                            <a className="subtitle" 
                                style={{paddingTop: '1em', borderBottom: '2px solid #ababab'}} 
                                onClick={() => expandMenu(expanded === category ? '' : category )}>
                            {category}
                            </a>
                            {expanded === category &&
                            <ul className="menu-list" style={{backgroundColor: '#fcfcfc'}}>  {                           
                                    services.map(({title, info, time, price, url }, index) => (  
                                        <li className="servicelist-item">     
                                            <a className="subtitle is-6" onClick={() => selectService({title, info, time, price, url })}>                                      
                                                 {title}   
                                            </a> 
                                                                                                                                                                               
                                        </li> 
                                    )) 
                                }         
                           </ul>
}
                </li> 

                )}) 
                            }                   
            </ul>                    
            </aside>
    )
}

export default ServiceList
import React, { useState } from 'react'

const ServiceInfoCard = ({data}) => {
    
    const [expanded, showMore] = useState(false);
    const expandable = data.length > 1;
    const visibleItems = expanded ? data : data.slice(0,1);
    return(   
            <div className="info-card" >                                                           
                    <div>                  
                    {
                     visibleItems.map(({title, text}, index) => (
                         <div>
                             <div className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>
   
                              <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>
 
                         </div>
                     ))          
                     }         
                        <div className="has-text-centered">
                            {expandable && 
                            <div className="button is-outlined" onClick={() => showMore(!expanded)}>{expanded ? 'Mindre' :'Mer Info'}</div>   
                            }
                           
                            </div>   
                                    
                    </div>                                                                       
               </div>                          
    )
}

export default ServiceInfoCard
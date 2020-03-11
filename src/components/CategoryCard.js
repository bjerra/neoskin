import React, { useState } from 'react'
import ServiceCard from './ServiceCard'


const CategoryCard = ({data}) => {
    const { category, services } = data;
    const [info, showInfo] = useState(null)
    
    return(   
            <div className="category-card" >                          
                    <p className="title is-4" style={{fontWeight: 350, color: 'black'}}>
                        {category}
                    </p>      
                    <div className="card">
                        {
                            services.map((service) => (
                              <ServiceCard 
                                showInfo={showInfo}                              
                                {...service}/>
                            ))
                        }                   
                    </div>   
                    { info &&
                    <div>                  
                    {
                     info.map(({title, text}) => (
                         <div>
                             <div className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black'}} dangerouslySetInnerHTML={{__html: title}}/>
   
                              <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>
 
                         </div>
                     ))          
                     }
                    </div>
                 
                    }                                                                         
               </div>                          
    )
}

export default CategoryCard
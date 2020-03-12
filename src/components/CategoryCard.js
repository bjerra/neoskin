import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'



const CategoryCard = ({data, selectService, currentService}) => {
    const { category, services } = data;
    const isGold = category.toLowerCase().includes('gold')

    let modifiedServices = isGold ? [] : [...services];
    if(isGold){
        services.forEach(service => {     
            const splitTitle = service.title.split(',') 
            let isAlt = false;
            modifiedServices.forEach(s => {               
                if(s.title.includes(splitTitle[0])){
                    s.alt = { title: splitTitle[1], url: service.url,time: service.time, price: service.price }
                    isAlt = true
                    
                } 
            })
            if(!isAlt)
                modifiedServices.push({...service})           
        })
    }

    return(   
            <div className="category-container" >   
            <h2 className="category-title">
                {category}
            </h2>                                         
                        {
                            modifiedServices.map((service) => (
                              <div onClick={() => selectService(service)}>
                                  <div className={`category-card ${currentService === service.title ? 'is-active' : ''}`}>
                                  <FontAwesomeIcon icon={faAngleRight} pull="right" />
                                      <span style={{marginRight: '1 rem'}}>
                                      {service.title}
                                      </span>
                                   
                                    
                                  </div>
                            </div>
                            ))
                        }                                                                                                         
               </div>                          
    )
}

export default CategoryCard
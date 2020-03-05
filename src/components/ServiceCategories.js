import React from 'react'
import useServicedata from './ServiceData'

const ServiceCategories = ({ selectCategory }) => {
 
    const data = useServicedata().reduce((acc, current) => [...acc,current.category],[])

    return(   
        <div className="menu sticky">				
            <p  className="menu-label"><b>Kategorier</b></p>
            <ul id="menu" className="menu-list">       
            {
                data.map((category, index) => (
                    <li> <a className="" onClick={() => selectCategory(category)}>
                    {category}
                </a></li>
                   
                )) 
            }
            </ul>
        </div>
            
       
    )
}

export default ServiceCategories
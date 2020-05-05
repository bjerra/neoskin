import React from 'react'
import { Link } from 'gatsby'
import { useServiceData } from './ServiceData'
import ServiceDetails from './ServiceDetails'

const CategoryCard = ({data}) => {
    const { title, services } = data;
    console.log(useServiceData())
    const filteredServices = useServiceData().reduce((acc, current) => {
            if(services.includes(parseInt(current.id)))
              acc.push(current)
        return acc;
      },[])
    
    return(   
       
            <div className="category-container" >   
            <h2 className="category-title ">
                {title}
            </h2>                                         
                {
                filteredServices.map((service) => (                       
                    <div className="service-card">                 
                            <h3 className="service-title">
                                {service.title}                            
                            </h3>   
                            <ServiceDetails service={service}/>  
                        <Link to={`/behandlingar/${service.slug}`} state={{
                            modal: true
                        }}> Mer Info
                        </Link>       
                    </div>       
                ))
                }                                                                                                         
            </div> 
                                    
    )
}

export default CategoryCard
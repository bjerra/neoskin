import React from 'react'
import ServiceCard from './ServiceCard'
import useServicedata from './ServiceData'

const ServiceList = ({category}) => {
 
    const data = useServicedata().find(el => el.category === category);
    const services = data  ? [...data.services] : [];

    return(   
        <section className="section">                             
            {
                        services.map((serviceData, index) => (                         
                            <ServiceCard                         
                            {...serviceData}/>                          

                        )) 
                    }
        </section> 
    )
}

export default ServiceList
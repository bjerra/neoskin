import React, { useState , useEffect} from 'react'


const ServiceCard = ({data}) => {
    const { category, services } = data;
    const [info, showInfo] = useState([])

    return(   
            <div className="service-card" >                          
                    <p className="title is-4" style={{fontWeight: 350, color: 'black'}}>
                        {category}
                    </p>      
                    <div className="service-info">{
                    services.map((service, index) => (
                        <div className="box" onClick={() => showInfo(service.info)}>
                            {service.title}
                            <div className="columns" key={index}>
                        <div className="column">
                            {service.time}
                        </div>
                        <div className="column">
                            {service.price}
                        </div>
                        <div className="column">
                            <a className="bd-btn" href={service.url} target="_blank">BOKA</a>
                        </div>
                        
                    </div>   
                    
                            {service.variant}
                        </div>

                    ))
                    }
                     
                    </div>   
                    {
                        info.map((infoData) => (
                            <div>
                                <div className="content" dangerouslySetInnerHTML={{__html: infoData.title}}/>
      
                                 <div className="content" dangerouslySetInnerHTML={{__html: infoData.text}}/>
    
                            </div>
                        ))          
                           
        
                    }
                    
                                                                                                          
            </div>                          
    )
}

export default ServiceCard
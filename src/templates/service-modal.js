import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { navigate } from 'gatsby'
import { useServiceData } from '../components/ServiceData'
import ServiceDetails from '../components/ServiceDetails'

const ServiceModal = ({pageContext}) => { 

    const serviceId = pageContext.id;
    const service = useServiceData().find(service =>  service.id === serviceId)
   
    const {info, title, ...details} = service

    return(
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
        modal ? (
        <div className="" style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onClick={() => navigate('/behandlingar')}>

                <div className="service-modal"> 
                <button class="modal-close is-large" aria-label="close" onClick={() => navigate('/behandlingar')}></button>    
                    <h2 className="category-title">
                        {title}                            
                    </h2>                 
                    <div className="info-card" >                                                                         
                        {
                        info.map(({title, text}, index) => (
                            <div>
                                <div className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>
    
                                <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>
    
                            </div>
                        ))          
                        }                                                                                                         
                </div>               
               <ServiceDetails service={details}/>                                                    
            </div>   
                
         </div>

        ) : (           
            <div className="container">    
            <h2 className="category-title">
                {title}                            
            </h2>                 
            <div className="info-card" >                                                                         
                {
                 info.map(({title, text}, index) => (
                     <div>
                         <div className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>

                          <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>

                     </div>
                 ))          
                 }                                                                                                         
           </div>  
           <ServiceDetails service={details}/>   
           </div>         
        )

    )}
  </ModalRoutingContext.Consumer>
  
)}

export default ServiceModal
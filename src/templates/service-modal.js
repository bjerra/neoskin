import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { navigate, graphql } from 'gatsby'
import ServiceDetails from '../components/ServiceDetails'

const ServiceModal = ({data}) => { 

    const {info, title, ...details} = data.serviceDataJson

    return(
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
        modal ? (
        <div className="" style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}} onClick={() => navigate('/behandlingar')}>

                <div className="service-modal"> 
                <button class="modal-close is-large" aria-label="close" onClick={() => navigate('/behandlingar')}></button>    
                    <h1 className="category-title">
                        {title}                            
                    </h1>                 
                    <div className="info-card" >                                                                         
                        {info &&
                        info.map(({title, text}, index) => (
                            <div>
                                <h2 className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>
    
                                <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>
    
                            </div>
                        ))          
                        }                                                                                                         
                </div>               
                <div style={{margin: '2rem'}}>
                    <ServiceDetails service={details}/>  
                </div>                                           
            </div>   
                
         </div>

        ) : (           
            <div className="container">    
            <h2 className="category-title">
                {title}                            
            </h2>                 
            <div className="info-card" >                                                                         
                {info &&
                 info.map(({title, text}, index) => (
                     <div>
                         <div className="content" style={{fontSize: '1.25rem', margin: '0', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>

                          <div className="content" style={{fontSize: '1rem', paddingLeft: '2rem'}} dangerouslySetInnerHTML={{__html: text}}/>

                     </div>
                 ))          
                 }                                                                                                         
           </div>  
           <div style={{margin: '2rem'}}>
            <ServiceDetails service={details}/>  
           </div>
           
           </div>         
        )

    )}
  </ModalRoutingContext.Consumer>
  
)}

export default ServiceModal

export const query = graphql`
  query($serviceId: String!) {
    serviceDataJson(id: {eq: $serviceId}) {
        variant
        url
        title
        time
        slug
        price
        offer
        id
        info {
          text
          title
        }
      }
  }
`
import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { navigate, graphql } from 'gatsby'
import ServiceDetails from '../components/ServiceDetails'

const ServiceModal = ({data}) => { 

    const {info, title, ...details} = data.serviceDataJson
    let description = ""
    if(info != null){
        info.forEach(element => {
            description += element.text
        });
    } 
    return(
  <ModalRoutingContext.Consumer>
    
    {({ modal, closeTo }) => (
        modal ? (
            <div className="service-modal" onClick={() => navigate('/behandlingar')}>
                 <Helmet titleTemplate={`%s | Behandlingar`}>
                        <title>{title}</title>
                        <meta
                        name="description"
                        content={description}
                        />
                    </Helmet>
        
                <div className="modal-main"> 
                   
                    <button className="modal-close is-large" aria-label="close" onClick={() => navigate('/behandlingar')}></button>    
                    <h1 className="category-title">
                        {title}                            
                    </h1>                 
                    <div className="info-card" >                                                                         
                        {info &&
                        info.map(({title, text}, index) => (
                            <div key={index}>
                                <h2 className="content" style={{fontSize: '1.25rem', margin: '1rem', borderBottom: '1px solid black', textAlign: 'center'}} dangerouslySetInnerHTML={{__html: title}}/>
    
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
            <Helmet titleTemplate={`%s | ${title}`}>
                        <title>{title}</title>
                        <meta
                        name="description"
                        content={description}
                        />
                    </Helmet>
        
            <h2 className="category-title">
                {title}                            
            </h2>                 
            <div className="info-card" >                                                                         
                {info &&
                 info.map(({title, text}) => (
                     <div key={title}>
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
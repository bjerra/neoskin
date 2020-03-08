import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ServiceList from '../components/ServiceList'
import useServicedata from '../components/ServiceData'
import ServiceCategoryMenu from '../components/ServiceCategoryMenu'
import ServiceCard from '../components/ServiceCard'
import ServiceCardModal from '../components/ServiceCardModal'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
}) => {

  const [currentService, selectService] = useState(null)
  const serviceData = useServicedata();

  const refs = serviceData.reduce((acc, value) => {
    acc[value.category] = React.createRef();
    return acc;
  }, {});
  console.log(refs)
  const scrollTo = category =>
    refs[category].current.scrollIntoView({
      block: 'start',
    });

  return(
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
        </div>
          <div className="container">
            <div className="only-touch">
            {currentService && 
                < ServiceCardModal data={currentService} close={() => selectService(null)}/>
              } 
       
            </div>
             
          
            <div className="section">   
                    
              <div className="columns">
                  
                <div className="column">                     
                  <div className="columns">    

                          <div className="column is-4">
                            <div className="sticky">
                              <ServiceCategoryMenu 
                                data={serviceData} 
                                currentCategory={null} 
                                selectCategory={scrollTo}/>
                            </div>
                          </div>

                          <div className="column" style={{borderRight: '1px solid #ababab', borderLeft: '1px solid #ababab'}}>                                    
                            <ServiceList 
                              data={serviceData} 
                              refs={refs}
                              selectService={selectService}/>
                          </div>
                  </div>
                </div>                                         
                <div className="column is-4 only-desktop">
                  {currentService && 
                    <div className="sticky">
                    <ServiceCard data={currentService}/>
                    </div>  
                  }                                         
                </div>
              </div>     
            </div>
          </div>      
    </div>
  )
}

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  
  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}             
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`

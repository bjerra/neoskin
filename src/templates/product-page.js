import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ServiceList from '../components/ServiceList'
import useServicedata from '../components/ServiceData'
import CategoryCard from '../components/CategoryCard'
import ServiceCardModal from '../components/ServiceCardModal'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
}) => {

  const [currentService, selectService] = useState(null)
  const serviceData = useServicedata();

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
             
          
            <div className="section" style={{padding:0}}>   
                    
              <div className="columns">
                                        
                <div className="column is-4">                                    
                  <ServiceList 
                    data={serviceData} 
                    selectService={selectService}/>
                </div>
                                      
                <div className="column only-desktop" style={{borderLeft: '1px solid #ababab'}}>
                  {currentService && 
                    <div className="sticky">
                    <CategoryCard data={currentService}/>
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

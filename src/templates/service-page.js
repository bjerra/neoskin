import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useCategoryData } from '../components/CategoryData'

import Layout from '../components/Layout'
import CategoryMenu from '../components/CategoryMenu'
import CategoryMenuTouch from '../components/CategoryMenuTouch'
import CategoryCard from '../components/CategoryCard'

export const ServicePageTemplate = ({
  image,
  title,
}) => {
  
  const initalData = useCategoryData()[0]
  const [data, setData] = useState(initalData)
    

  return(
    <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    >
      <h1
        className="page-title"
      >
        {title}
      </h1>
      </div>
        <div className="container">
          <div className="section" style={{padding:0}}>   
            <div className="columns">
                                      
              <div className="column is-3 only-desktop">                                    
                <CategoryMenu 
                  setData={setData}/>
              </div>
                                    
              <div className="column is-6 " style={{padding:0, marginBottom: '2rem'}}>
              <div className="only-touch">
                <div>                          
                  <CategoryMenuTouch setData={setData} />
                </div>
                </div> 
                    <CategoryCard 
                    data={data} 
                    />                      
              </div>
              <div className="column is-3" style={{padding:0}}>         
             
              </div>
               
            </div>     
          </div>
        </div>      
  </div>
  )
}

ServicePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const image = frontmatter.image 
  const title = frontmatter.title
  return (
    <Layout>
      <ServicePageTemplate
        image={image}
        title={title}          
      />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
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
      }
    }
  }
`
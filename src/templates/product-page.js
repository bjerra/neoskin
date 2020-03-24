import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CategoryMenu from '../components/CategoryMenu'
import CategoryMenuTouch from '../components/CategoryMenuTouch'
import useServicedata from '../components/ServiceData'
import CategoryCard from '../components/CategoryCard'
import ServiceCard from '../components/ServiceCard'
import ServiceCardModal from '../components/ServiceCardModal'
import Filter from '../components/Filter'
import colors from '../components/Colors'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
}) => {
  
  let serviceData = useServicedata();
  const [currentCategory, selectCategory] = useState(0)
  const [currentFilter, setFilter] = useState("")
  const [currentService, selectService] = useState(null)

  const data = () => {
    let data =serviceData[currentCategory];
    if(currentFilter != "") {
      data = {category: currentFilter, services: []}
      data.services = serviceData.reduce((acc, current) => {
      current.services.forEach(service => {
          if(service.keywords.toLowerCase().includes(currentFilter.toLowerCase()))
          acc.push(service)
      })
      return acc;
    },[])
    } 

   return data
  }

  const handleSelectCategory = (categoryIndex) => {
    selectCategory(categoryIndex)   
    selectService(null)
    setFilter("")
    
  }

  const handleSelectFilter = (filter) => {       
    setFilter(filter) 
    selectCategory(-1)  
    selectService(null)
  }


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
            boxShadow: '0.5rem 0 0 #00000077, -0.5rem 0 0 #00000077',
            backgroundColor: '#00000077',
            color: '#eee',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
        </div>
          <div className="container">
            <div className="section" style={{padding:0}}>   
                    
              <div className="columns">
                                        
                <div className="column only-desktop" style={{padding:0, marginBottom: '2rem'}}>                                    
                  <CategoryMenu 
                    data={serviceData} 
                    selectCategory={handleSelectCategory}
                    currentCategory={currentCategory}
                    selectFilter={handleSelectFilter}
                    currentFilter={currentFilter}/>
                </div>
                                      
                <div className="column" style={{padding:0, marginBottom: '2rem'}}>
                <div className="only-touch">
                    <ServiceCardModal data={currentService} close={() => selectService(null)} isOpen={currentService != null} />
                  <div className="category-menu">
                      <Filter selectFilter={handleSelectFilter} currentFilter={currentFilter} />          
                    <CategoryMenuTouch  data={serviceData} 
                      selectCategory={handleSelectCategory}
                      currentCategory={currentCategory}
                      />
                  </div>
                  </div>
                
                  <CategoryCard 
                  data={data()} 
                  selectService={selectService}
                  currentService={currentService ? currentService.title : ''}
                  color={colors[currentCategory]}/>
                 
                                                         
                </div>
               
                <div className="column is-4 only-desktop" style={{padding:0, marginBottom: '2rem'}}>         
                {currentService &&         
                  <ServiceCard data={currentService} color={colors[currentCategory]}/>
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

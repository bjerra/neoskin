import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CategoryMenu from '../components/CategoryMenu'
import CategoryMenuTouch from '../components/CategoryMenuTouch'
import useServicedata from '../components/ServiceData'
import CategoryCard from '../components/CategoryCard'
import ServiceCard from '../components/ServiceCard'
import ServiceCardModal from '../components/ServiceCardModal'
import colors from '../components/Colors'
import filters from '../components/FilterList'

export const ProductPageTemplate = ({
  image,
  title,
}) => {
  
  let serviceData = useServicedata();
  const [currentCategory, selectCategory] = useState(0)
  const [currentFilter, setFilter] = useState(-1)
  const [currentService, selectService] = useState(null)

  const data = () => {
    if(currentFilter === -1) return serviceData[currentCategory];
    else {
      const filter = filters[currentFilter]
      const data = {category: filter, services: []}
      data.services = serviceData.reduce((acc, current) => {
      current.services.forEach(service => {
          if(service.keywords.toLowerCase().includes(filter.toLowerCase()))
          acc.push(service)
      })
      return acc;
    },[])
    return data
    } 
  }

  const handleSelectCategory = (categoryIndex) => {
    selectCategory(-1)   
    setFilter(-1)
    selectCategory(categoryIndex)   
    selectService(null)
  }

  const handleSelectFilter = (filter) => {       
    setFilter(filter) 
    selectService(null)
  }

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
                                        
                <div className="column is-3 only-desktop" style={{padding:0, marginBottom: '2rem'}}>                                    
                  <CategoryMenu 
                    data={serviceData} 
                    selectCategory={handleSelectCategory}
                    currentCategory={currentCategory}
                    selectFilter={handleSelectFilter}
                    currentFilter={currentFilter}/>
                </div>
                                      
                <div className="column is-5 " style={{padding:0, marginBottom: '2rem'}}>
                <div className="only-touch">
                  <ServiceCardModal data={currentService} close={() => selectService(null)} isOpen={currentService != null} />
              
                  <div>                          
                    <CategoryMenuTouch  data={serviceData} 
                      selectCategory={handleSelectCategory}
                      currentCategory={currentCategory}
                      selectFilter={handleSelectFilter} 
                      currentFilter={currentFilter}/>
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
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  
  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}           
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
      }
    }
  }
`

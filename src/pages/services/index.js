import React, { useState } from "react"
import Layout from '../../components/Layout'
import ServiceCategories from '../../components/ServiceCategories'
import ServiceList from '../../components/ServiceList'


const ServicesPage = () => {

      const [category, selectCategory] = useState(0)
         
      return (
        <Layout>    
          <div class="columns">
                <div class="column">
                  
                </div>
                <div class="column is-half">
                  <ServiceList category={category}/>
                </div>
                <div class="column">
                  <ServiceCategories selectCategory={selectCategory}/>
                  </div>
          </div>        
        </Layout>
      )   
  }

  export default ServicesPage

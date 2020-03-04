import React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/Layout'
import ServiceCard from '../../components/ServiceCard'

export default class ServicesPage extends React.Component {
    constructor(props) {
      super(props)  
    }
  
    render() {     
      const { data, location } = this.props;
      if(!location.state) return null;
      const { category } = location.state;  
        const group = data.dynamo.services.filter(service => service.group === category);
      return (
        <Layout>    
          <section className="section">
            <div className="container">
              <div className="content">
                <div class="columns">                  
                    </div>
                    {group.map((serviceData, index) => (
                      <ServiceCard 
                        key={index}
                        {...serviceData}/>                 
                    ))}
                    </div>                   
            </div>
          </section>
        </Layout>
      )
    }
  }

export const pageQuery = graphql`
query Query {
    dynamo {
      id
      services {
        price
        staff
        time
        title
        url
        info
        group
      }
    }
  }
`

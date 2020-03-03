import React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/Layout'

export default class ServicesPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = { }
    }
  
    render() {
        const { data } = this.props
      return (
        <Layout>
          <section className="section">
            <div className="container">
              <div className="content">
                {data.dynamo.treatments.map(({ title }, index) => (
                    <div key={index}>
                    <p>{title}</p> 
                    </div>
                ))}
              </div>
            </div>
          </section>
        </Layout>
      )
    }
  }

export const pageQuery = graphql`
    query MyQuery {
        dynamo {
        id
        treatments {
            group
            info
            price
            staff
            time
            title
            url
          }
        }
    }
`

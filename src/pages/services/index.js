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
                <div class="">

                    {data.dynamo.treatments.map(({ title,price, time, info, url }, index) => (
                        <div key={index} class="box">

                            <div class="card">
                                <div class="card-content">
                                    <p class="title">
                                        {title}
                                    </p>
                                    <p class="subtitle">
                                        {info}
                                    </p>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                    <span>
                                        {time}
                                    </span>
                                    <span>
                                        {price}
                                    </span>
                                    </p>
                                    <p class="card-footer-item">
                                    <span>
                                       <a href={url}>BOKA</a>
                                    </span>
                                    </p>
                                </footer>
                                </div>
                                
                        </div>
                    ))}
                    </div>
                      
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

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const ServiceCategories = class extends React.Component {

  render() {
      const { data } = this.props;
      const categories = data.dynamo.services.reduce((acc, current) => {
        if(!acc.includes(current.group))
            acc.push(current.group);
        return acc;
      }, []);
    return (
        <div className="container"> 
            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                    <span>Behandlingar</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div class="dropdown-content">
                    {categories.map((category, index) => (
                        <div class="dropdown-item">
                         <Link 
                          key={index} 
                          className="navbar-item" 
                          to="/services" 
                          state={{ category }}>
                        {category}  
                    </Link>
                    </div>
                                            
                ))}
                    
                </div>
            </div>
        </div>

        </div>
    )
  }
}


export default () => (
  <StaticQuery
    query={graphql`
    query MyQuery {
      dynamo {
        services {       
          group
        }
      }
    }
    `}
    render={data => (
      <ServiceCategories data={data}/>
    )}
  />
)
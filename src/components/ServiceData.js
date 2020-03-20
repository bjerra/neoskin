import { graphql, useStaticQuery } from 'gatsby'

const useServicedata = () => {
  const { dynamo } = useStaticQuery(
    graphql`
    query SERVICES_QUERY {
      dynamo {
        services {
          services {
            info {
              title
              text
            }
            price
            staff
            time
            title
            url
            offer
            variant
            keywords
          }       
          category       
        }
      }
      }
    `
  )
  return dynamo.services
}

export default useServicedata

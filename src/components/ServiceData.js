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
          }
          variants {
            info 
            price
            staff
            time
            title
            url
            offer
          }
          category
          info {
            title
            text
          }
        }
      }
      }
    `
  )
  return dynamo.services
}

export default useServicedata

import { graphql, useStaticQuery } from 'gatsby'

const useServicedata = () => {
  const { dynamo } = useStaticQuery(
    graphql`
    query SERVICES_QUERY {
      dynamo {
        services {
          services {
            info
            price
            staff
            time
            title
            url
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

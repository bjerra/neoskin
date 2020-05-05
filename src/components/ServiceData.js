import { graphql, useStaticQuery } from 'gatsby'

export const useServiceData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
    query SERVICES_QUERY {      
        dataJson {
          services {
            price
            slug
            time
            title
            url
            variant
            id
            info {
              text
              title
            }
          }     
        }
      }     
    `
  )
  return dataJson.services
}

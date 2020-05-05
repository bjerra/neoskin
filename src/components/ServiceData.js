import { graphql, useStaticQuery } from 'gatsby'

export const useServiceData = () => {
  const { allServiceDataJson } = useStaticQuery(
    graphql`
    {
      allServiceDataJson {
        nodes {
          id
          title
          info {
            text
            title
          }
          price
          slug
          time
          url
          variant
          offer
        }
      }   
    }
     
    `
  )
  return allServiceDataJson.nodes
}

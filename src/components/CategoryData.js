import { graphql, useStaticQuery } from 'gatsby'

export const useCategoryData = () => {
  const { allCategoryDataJson } = useStaticQuery(
    graphql`
    query CATEGORY_QUERY {      
      allCategoryDataJson {
        nodes {
            title
            services
          }
      }
      }     
    `
  )
  return allCategoryDataJson.nodes
}

import { graphql, useStaticQuery } from 'gatsby'

export const useCategoryData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
    query CATEGORY_QUERY {      
        dataJson {      
          categories {
            title
            services
          }
        }
      }     
    `
  )
  return dataJson.categories
}

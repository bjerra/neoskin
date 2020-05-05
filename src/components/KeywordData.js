import { graphql, useStaticQuery } from 'gatsby'

export const useKeywordData = () => {
  const { dataJson } = useStaticQuery(
    graphql`
    query KEYWORDS_QUERY {      
        dataJson {       
          keywords {
            title
            services
          }  
        }
      }     
    `
  )
  return dataJson.keywords
}

import { graphql, useStaticQuery } from 'gatsby'

export const useKeywordData = () => {
  const { allKeywordDataJson } = useStaticQuery(
    graphql`
    query KEYWORDS_QUERY {      
      allKeywordDataJson {
        nodes {
            title
            services
        }
      }
      }     
    `
  )
  return allKeywordDataJson.nodes
}

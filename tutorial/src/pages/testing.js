import React from "react"
import { graphql } from "gatsby"

const Testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <div>
      <h2>author : {author}</h2>
    </div>
  )
}

// page componentでqueryがexportされると、propsのdata propertyとしてquery結果がsetされる。data以外の変数名を指定してもprops.dataでaccessすることになるので変数名は何でもおｋ
export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`
export default Testing

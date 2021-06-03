import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* graphql``で返ってくるものは、下記のdata propertyの値部分のobject
{
  "data": {
    ...
  }
}
*/
const getData = graphql`
  {
    site {
      siteMetadata {
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

// react hooksのcomponent名は、uppercaseであることが必須
const FetchData = () => {
  // useStaticQueryはcomponent内で実行しないとerror
  // const data = useStaticQuery(getData)
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>Name : {data.site.siteMetadata.person.name}</h2> */}
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData

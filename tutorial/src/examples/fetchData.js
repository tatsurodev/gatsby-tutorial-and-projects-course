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
  # query nameはgatsby内でuniqueであること必須、またquery nameが変わった時はgatsby cleanが必要
  query FirstQuery {
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

// react hooksのcomponent名は、uppercaseであることが必須
const FetchData = () => {
  // useStaticQueryはcomponent内で実行しないとerror
  // const data = useStaticQuery(getData)
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>Name : {data.site.info.person.name}</h2> */}
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData

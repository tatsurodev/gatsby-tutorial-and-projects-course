import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// StaticImageではdynamic dataを扱えないのでGatsbyImageを使用
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    # childImageSharpではsvg不可なので除外
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          # gatsbyImageDataはgatsby v3から実装、v2ではfixed, fluid等を使用していた
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  console.log(data)

  return (
    <div>
      <h2>simple image gallery</h2>
    </div>
  )
}

export default Gallery

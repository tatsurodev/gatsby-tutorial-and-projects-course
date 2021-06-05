import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// StaticImageではdynamic dataを扱えないのでGatsbyImageを使用
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        // childImageSharp propertyが存在しない時にgatsbyImageDataにaccessしようとするとerrorとなるので、getImage helperでoptional chainingを行い、error防止。引数はchildImageSharpをpropertyに持つobjectをset
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery

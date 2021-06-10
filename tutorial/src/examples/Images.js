import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        {/* propsに関しては https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/ */}
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
`

export default Images

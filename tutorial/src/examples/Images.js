import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained</h4>
        {/* propsに関しては https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/ */}
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
          height={300}
          // height, widthの注意点
          // その1、For a fixed layout, these define the size of the image displayed on screen. For a constrained image these define the maximum size, as the image will scale down to fit smaller containers if needed.
          // その2、layoutがfullWidthの時にheightを与えるとerrorとなるので、class指定のcssでheightを与えるとbetter
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>full width</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="dominantColor"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    .example-img {
      height: 200px;
    }
  }
`

export default Images

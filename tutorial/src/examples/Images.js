import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      {/* StaticImageのattributeは外部に依存できない、src={props.src}とかはダメ */}
      <StaticImage src="../assets/images/big.jpg" alt="food" />
      <StaticImage
        src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1613583026/course%20slides/js-2_mo9uqy.png"
        alt="code"
      />
      <h2>gatsby image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images

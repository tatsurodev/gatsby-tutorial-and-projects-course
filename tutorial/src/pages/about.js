// rafce
import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  // css fileに.module.cssの拡張子を付与することでcss moduleとしてgatsbyに認識され、class名にrandomなclass名が付与されるので名前衝突を回避できる
  // console.log(aboutStyles)

  return (
    <Layout>
      <Wrapper>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          adipisci illum, consequatur quos, dolore qui sint earum tempore, rerum
          similique autem error! Illo eveniet libero cupiditate quis fugiat,
          odit cum!
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: yellowgreen;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about

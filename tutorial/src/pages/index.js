import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        {/* global cssよりinline cssの方が強い */}
        <h1>home page</h1>
        <h1>hello world</h1>
        <h1>hello people</h1>
        <p className={text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          animi suscipit, sapiente, beatae velit ea quis assumenda excepturi
          blanditiis voluptatibus impedit maxime ratione sit sunt, accusamus
          voluptate debitis aperiam illo!
        </p>
      </div>
    </Layout>
  )
}

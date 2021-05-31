import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      {/* global cssよりinline cssの方が強い */}
      <h1 style={{ color: "green", textTransform: "capitalize" }}>home page</h1>
      <h1>hello world</h1>
      <h1>hello people</h1>
    </Layout>
  )
}

import React from "react"
import Layout from "../components/Layout"

// 404 pageはfile名が404.jsであることが必須だが、component名が数字だとreactでerrorが出るので変更
const Error = () => {
  return (
    <Layout>
      <h1>Error page</h1>
    </Layout>
  )
}

export default Error

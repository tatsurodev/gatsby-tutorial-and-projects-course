import React from "react"
import Layout from "../components/Layout"

// 404 pageはfile名が404.jsであることが必須だが、component名が数字だとreactでerrorが出るので変更
const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <seciton>
          <h1>404</h1>
          <h3>page not found</h3>
        </seciton>
      </main>
    </Layout>
  )
}

export default Error

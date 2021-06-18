import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

// pageContext vs params
// pageContextはqueryで取得したfield(ここではtitle)に、paramsではurlに関連する値にaccessできる
const ProjectTemplate = ({ pageContext, params, data }) => {
  const { title } = pageContext
  // console.log("pageContext", pageContext)
  // console.log("params", params)

  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{data.strapiProject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query GetSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate

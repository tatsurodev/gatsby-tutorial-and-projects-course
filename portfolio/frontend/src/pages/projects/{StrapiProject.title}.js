import React from "react"

// pageContext vs params
// pageContextはqueryで取得したfield(ここではtitle)に、paramsではurlに関連する値にaccessできる
const ProjectTemplate = ({ pageContext, params }) => {
  const { title } = pageContext
  // console.log("pageContext", pageContext)
  // console.log("params", params)

  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default ProjectTemplate

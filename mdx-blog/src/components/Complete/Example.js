import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})()
`

const Example = props => {
  // console.log(props)
  // props.children.props以下にcode blockの情報がある
  // ex. className: ```jsxならlanguage-jsxが得られる
  const className = props.children.props.className
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      // code blockの中身
      code={props.children.props.children.trim()}
      // ```languageで指定した言語の種類
      language={language}
      // 使用するtheme
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Example

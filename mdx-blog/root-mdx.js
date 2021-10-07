// gatsby-browser.js, gatsby-ssr.jsの両方に記述するcodeは、変更の際両方のcodeを変更しないといけなくなるのでまとめておく
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote } from './src/components/Complete'

// https://mdxjs.com/table-of-components/
const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

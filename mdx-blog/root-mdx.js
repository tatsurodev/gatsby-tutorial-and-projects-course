// gatsby-browser.js, gatsby-ssr.jsの両方に記述するcodeは、変更の際両方のcodeを変更しないといけなくなるのでまとめておく
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  // logic
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

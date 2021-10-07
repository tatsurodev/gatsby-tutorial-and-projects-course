// gatsby-browser.js, gatsby-ssr.jsの両方に記述するcodeは、変更の際両方のcodeを変更しないといけなくなるのでまとめておく
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h3: () => <span>and you thought you will a h3</span>,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

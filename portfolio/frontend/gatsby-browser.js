const React = require("react")
const Layout = require("./src/components/Layout").default

// 全page componentをwrapする。elementがpageの中身
// wrapPageElementとwrapRootElementはbrowser apiとssr apiの両方に存在するので両方の設定fileに書く。wrapPageElementはlayout系、wrapRootElementはredux等のproviderに使うとよい
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

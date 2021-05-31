import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

// develop環境ではこのglobal cssを取り込んでいないpageでも何故かこのcssが適用されるが、production環境ではglobal cssは取り込んだ場所のみに適用される
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout

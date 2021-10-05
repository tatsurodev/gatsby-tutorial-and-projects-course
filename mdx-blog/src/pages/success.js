import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Success = () => {
  return (
    <Layout>
      <div className="page-center">
        <h2>your submission was recieved !</h2>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </Layout>
  )
}

export default Success

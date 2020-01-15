import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const pageTitle = "Home"

const IndexPage = () => (
  <Layout pageId={pageTitle}>
    <SEO title={pageTitle} />
    <h1>Hi carecs ლ(ಠ益ಠლ)</h1>
    <p>Welcome to profesor Carec Himba's FrontEnd learning blog.</p>
    <p>
      Each post will haave some comment section, feel free to ask questions and
      share materials there.
    </p>
    <p>
      You can propose topics for next lessons filling this form{" "}
      <a href="3">Form</a>{" "}
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/JavaScript/arrays/">Array functions</Link>
    <Link to="/JavaScript/lesson1/">Go to page js</Link>
    <Link to="/Html/section-vs-article/">Section Vs Article</Link>
  </Layout>
)

export default IndexPage

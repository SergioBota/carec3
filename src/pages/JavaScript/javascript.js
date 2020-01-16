import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const Javascript = () => (
  <Layout pageId="JS-home">
    <SEO title="JavaScript intro" />

    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
    <Link to="/JavaScript/arrays/">Array functions</Link>
    <Link to="/JavaScript/lesson1/">Go to page js</Link>
  </Layout>
);

export default Javascript;

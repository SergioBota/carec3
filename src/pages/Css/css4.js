import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const css4 = () => (
  <Layout
    pageId="CSS4"
    headerClass="cream-light"
    bodyClass="cream"
    footerClass="cream-light"
    initialMenuColor="#001858"
  >
    <SEO title="CSS4" />

    <article>
      <h1>CSS4</h1>
      <Link to="/">Go back to the homepage</Link>

      <h2>CSS 4 will not hit the market and will not transform anything.</h2>
      <p>
        Don't let them fool you. “CSS4” has no technical meaning whatsoever. All
        current CSS{" "}
        <a href="https://www.w3.org/Style/CSS/current-work">specifications</a>{" "}
        have their own specific versions ranging from 1 to 4, but CSS as a whole
        does not have a version, and it doesn’t need one, either.
      </p>
      <h2>Conclution</h2>
      <p>There is no actual CSS4, but it may be marketed that way.</p>

      <ul>
        <p>Checkout this article about CSS4.</p>
        <li>
          <a href="https://css-tricks.com/css4/">CSS level 4 </a>
        </li>
      </ul>
    </article>
  </Layout>
);

export default css4;

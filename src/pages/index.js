import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";

const pageTitle = "Home";

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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Link to="/JavaScript/javascript/">JavaScript intro</Link>
    <Link to="/JavaScript/arrays/">Array functions</Link>
    <Link to="/JavaScript/lesson1/">Go to page js</Link>
    <Link to="/Html/section-vs-article/">Section Vs Article</Link>
    [![Netlify
    Status](https://api.netlify.com/api/v1/badges/7151ec07-0a49-4f07-b6b6-3f637b3222c8/deploy-status)](https://app.netlify.com/sites/csb-bp9n8/deploys)
  </Layout>
);

export default IndexPage;

import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
//import Image from "../components/image"
import SEO from "../components/seo";
import "../assets/scss/main.scss";
const pageTitle = "Home";

const IndexPage = () => (
  <Layout pageId={pageTitle}>
    <SEO title={pageTitle} />
    <h1>Hi carecs ლ(ಠ益ಠლ)</h1>
    <p>Welcome to profesor Carec Himba's FrontEnd learning blog.</p>
    <p>
      Each post will have some comment section on{" "}
      <a href="https://disqus.com/">Disqus</a>; feel free to ask questions and
      share materials there.
    </p>
    <article className="box dark-container">
      You can propose topics for next lessons filling this form{" "}
      <a href="3">Form</a>{" "}
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <p>
          <label>
            Select a category:{" "}
            <select name="category[]" multiple>
              <option value="js">JS</option>
              <option value="css">CSS</option>
              <option value="html">Html</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Suggest a topic:{" "}
            <textarea
              name="topic"
              placeholder="I suggest  React or VUE or whatever."
            >
              {" "}
            </textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </article>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <div>
      <Link to="/JavaScript/javascript/">JavaScript intro</Link>
      <Link to="/Css/history-of-css/">CSS intro</Link>
      <Link to="/Html/section-vs-article/">Section Vs Article</Link>
    </div>
  </Layout>
);

export default IndexPage;

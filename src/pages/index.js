import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleLink from "../components/articleLink";
import "../assets/scss/main.scss";

const pageTitle = "Home";

const IndexPage = () => (
  <Layout pageId={pageTitle}>
    <SEO title={pageTitle} />

    <section>
      <h1>Hi carecs ლ(ಠ益ಠლ)</h1>
      <p>Welcome to profesor Carec Himba's FrontEnd learning blog.</p>
      <p>
        Each post will have some comment section on{" "}
        <a href="https://disqus.com/">Disqus</a>; feel free to ask questions and
        share materials there.
      </p>
    </section>
    <article className="box dark-container">
      You can propose topics for next lessons filling this form{" "}
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
    <div
      className=""
      style={{ maxWidth: `300px`, marginBottom: `1.45rem`, padding: "2.5em" }}
    >
      <h2>Site map: </h2>
      <ArticleLink />
    </div>
  </Layout>
);

export default IndexPage;

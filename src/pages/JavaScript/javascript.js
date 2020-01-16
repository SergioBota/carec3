import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../assets/scss/components/_js.scss";

const Javascript = () => (
  <Layout
    pageId="JS-home"
    headerClass="blue"
    bodyClass="blue"
    footerClass="blue-light"
  >
    <SEO title="JavaScript intro" />

    <article id="jsHome">
      <Link to="/">Go back to the homepage</Link>
      <h1>Hi here we are gonna learn about JavaScript</h1>
      <p>Did you know that JS is the most used language on web dev?</p>
      <p>
        checkout some numbers{" "}
        <a href="https://2019.stateofjs.com/demographics/">here</a>.
      </p>

      <div>
        Before we began lets take a look at the history of JavaScript.
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sh6lK57Cuk4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <article>
        <h2>Next lessons:</h2>
        <ul>
          <li>
            {" "}
            <Link to="/JavaScript/arrays/">Array functions</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/JavaScript/lesson1/" />{" "}
          </li>
        </ul>
      </article>
    </article>
  </Layout>
);

export default Javascript;

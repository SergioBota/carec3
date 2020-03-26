import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const HistoryOfCss = () => (
  <Layout
    pageId="HistoryOfCss"
    headerClass="green"
    bodyClass="green"
    footerClass="green-light"
    initialMenuColor="#004643"
  >
    <SEO title="History Of Css" />

    <article>
      <h1>Welcome to a Brief history of CSS</h1>

      <p>
        Did you know that Timb Berners -Lee created the Web (World Wide Web) in
        1989, but it was just HTML, no styling.
      </p>
      <p>
        In 1994, Håkon Wium Lie working at CERN, saw the need fot a style sheet
        language for the web, since web's electronic publishing needs.Stly
        Sheets in browsers were not a new idea, in fact the separation of
        document structure drom ducment's layout had been a goal of HTML dince
        1990. On October 13, 1994, Marc Andreessen announced to www-talk that
        the first beta release of Mozilla (which later turned into Netscape
        Navigator) was available for testing. Among the new tags the new browser
        supported was center, and more tags were to follow shortly.{" "}
      </p>
      <p>
        Three days before Netscape announced the availability of its new
        browser, Håkon published the first draft of the Cascading HTML Style
        Sheets proposal. Behind the scenes, Dave Raggett (the main architect of
        HTML 3.0) had encouraged the release of the draft to go out before the
        upcoming Mosaic and the Web conference in Chicago.
      </p>
      <p>
        "Cascading Style Sheets" was not the only proposed languafe at the time.
        thre was{" "}
        <a href="https://en.wikipedia.org/wiki/Document_Style_Semantics_and_Specification_Language">
          DSSSL{" "}
        </a>
        , RRP, PSL96 Among others; Zach Bloom wrote{" "}
        <a href="https://eager.io/blog/the-languages-which-almost-were-css/">
          an excellent deep dive into several competing proposals
        </a>
        .
      </p>

      <h2>Why did CSS win?</h2>
      <p>
        CSS is a declarative programming language. When we write CSS, we don't
        tell the browser exactly how to render a page. Instead, we describe the
        rules for our HTML document one by one and let browsers handle the
        rendering. Keep in mind that the web was mostly being built by amateur
        programmers and ambitious hobbyists.
      </p>
      <p>
        The cascade means that styles can inherit and overwrite other styles
        that had previously been declared, following a fairly complicated
        hierarchy known as specificity. The breakthrough, though, was that it
        allowed for multiple stylesheets on the same page.
      </p>
      <p>By the end of 1996, CSS had arrived.</p>

      <ul>
        <p>Checkout this two complete articles about the history of CSS.</p>
        <li>
          <a href="https://css-tricks.com/look-back-history-css/">
            A Look Back at the History of CSS{" "}
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/Style/CSS20/history.html">
            {" "}
            A brief history of CSS until 2016
          </a>
        </li>
      </ul>
      <h2>Next lessons:</h2>
      <ul>
        <li>
          {" "}
          <Link to="/Css/css4/">CSS4</Link>{" "}
        </li>
      </ul>
    </article>
  </Layout>
);

export default HistoryOfCss;

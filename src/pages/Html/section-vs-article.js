import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const SectionVsArticle = () => (
  <Layout
    pageId="SectionVsArticle"
    headerClass="cream-light"
    bodyClass="cream-light"
    footerClass="cream"
    initialMenuColor="#001858"
  >
    <SEO title="Section vs Article" />
    <h1>Hi carecs ლ(ಠ益ಠლ)</h1>
    <p>Welcome to Section vs Article</p>
    <Link to="/">Go back to the homepage</Link>

    <article>
      <section ariaLabel="section tag">
        <h2>{"<section />"}</h2>
        <p>
          Since HTML5, this tag is ment to describe document sections such as
          headers, footers, chapters, etc...
        </p>
      </section>

      <section ariaLabel="article tag">
        <h2>{"<article />"}</h2>
        <p>
          Since HTML5, this tag is ment to describe independent, self-contained
          content.
        </p>
        <p>
          think on an article not only like a blog post, but as a dicrete
          enntity that could be reused in other contexts.
        </p>
      </section>

      <section ariaLabel="section vs article tag">
        <h2>{"<section /> vs <article />"}</h2>
        <p>Now a days accesibilty has become more and more relevant.</p>
        <p>
          Section tag has problems with most screen readers, as they don't
          detect them correctly. Sections need to be used with an aria-label
          atribute to signal screen readers that a particular sub-part of the
          document begins.
        </p>
      </section>
      <section ariaLabel="section vs article tag">
        <h1>Conclusion</h1>
        <p>
          Since article it's for any self-contained thing it can be used instead
          of sections, and its well detected by screen readers , also helps
          Apple's WatchOS display primary content of the web page.
        </p>
      </section>
    </article>
  </Layout>
);

export default SectionVsArticle;

import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const StrictMode = () => (
  <Layout
    pageId="strictMode"
    headerClass="black"
    bodyClass="black-light"
    footerClass="black"
  >
    <SEO title="use strict Explained" />
    <article>
      <h1>Strict Mode </h1>
      <p>
        {" "}
        Since ECMAScript5, the literal expression, ignored by earlier versions
        of JavaScript. indicates that the code should be executed in "strict
        mode" and is declared by adding
        <code>"use strict";</code>
      </p>

      <p>
        {" "}
        Declared at the beginning of a script, it has global scope (all code in
        the script will execute in strict mode); Declared at the beginning of a
        function, will only affect the function scope; Or by default in modules.
      </p>
      <code>{`function strict() {  //strict by default  }`}</code>
      <br />
      <code> export default strict;</code>
      <br />
      <br />
      <br />
      <p>
        <code>"use strict";</code> is only recognized at the beginning of a
        script or a function.
      </p>
      <section>
        <h2>Why? </h2>

        <p>
          <b>@Here</b> It helps you to write cleaner code, like preventing you
          from using undeclared variables.
        </p>
        <p>
          Strict mode changes previously accepted "bad syntax" into real errors.
        </p>
      </section>

      <h3>What fails in Strict Mode? </h3>

      <ul>
        <li>Using a variable, without declaring it.</li>
        <li>Using an objet, without declaring it.</li>
        <li>
          Deleting an objet, function or variable. <br />
          <code>
            "use strict";
            <br />
            {`function x() {  //strict by default  };`} <br />
            delete x;
          </code>
        </li>
        <li>Duplicating a parameter name.</li>
        <li>
          Octal numeric literals and Octal escape characters are not allowed.
          <br />
          <code>
            "use strict";
            <br />
            {`
            var x = 010;
            var y = "\\010"; 
            `}{" "}
            <br />
          </code>
        </li>
        <li>Writing to a read-only and get-only properties.</li>
        <li>
          Deleting an undeletable property.
          <br />
          <code>
            "use strict";
            <br />
            {`delete Object.prototype;`}
          </code>
        </li>
        <li>
          <code>eval()</code> is not allowed to create variables in the scope
          from which it was called.
        </li>
        <li>
          The <code>with</code> statement.
        </li>
        <li>
          The <code>this</code> keyword behaves differently in functions.
          <br />
          <code>
            "use strict";
            <br />
            {`function x() { alert(this); //"undefined" };`}
          </code>
        </li>
      </ul>
    </article>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default StrictMode;

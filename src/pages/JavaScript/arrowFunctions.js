import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const ArrowFunctions = () => (
  <Layout
    pageId="ArrowFunctions"
    headerClass="black"
    bodyClass="black"
    footerClass="black-light"
    initialMenuColor="#16161a"
  >
    <SEO title="Arrow Functions Explained" />
    <article>
      <h1>Arrow Functions </h1>
      <p>
        {" "}
        One can say that poplarity on arrow functions , is due to Its syntax is
        concise, binds this lexically, fits great as a callback.
      </p>

      <p>
        {" "}
        The arrow function in JavaScript is anonymous, but ES2015 introduced
        function name inference , allowing JavaScript to determine function name
        from its syntactic position e.g varible name holiding the function
        object.
      </p>
      <code>(x => x * x).name; // => ''</code>
      <br />
      <code>const squarePow = (x => x * x); </code>
      <br />
      <code>squarePow.name; // =>'squarePow' </code>
      <br />
      <h3>So... why you should care? </h3>
      <p>
        {" "}
        If you have ever debbuged arrow functions and saw a huge pile of
        (anonymous) on your call stack, then you would be grateful to see your
        variable name on the stack!
      </p>

      <h3>Want more tips? </h3>

      <p>
        <b>@Here</b> Never define object literal inside an inline arrow function
        triggers a syntax error.
      </p>
      <code>const array = [1, 2, 3]; </code>
      <br />
      <code>// throws SyntaxError!</code>
      <br />
      <code>{` array.map(number => { 'number': number });`}</code>

      <h3>what to do? </h3>
      <p> wrap it up, add some parenthesis, and you are done!</p>
      <code>const array = [1, 2, 3]; </code>
      <br />
      <code>// Good!</code>
      <br />
      <code>{` array.map(number => ({'number': number }));`}</code>
      <br />
      <h3>One last tip</h3>
      <p> Avoid Excesive arrow function nesting! </p>
      <p>
        It takes effort and time to understand what the code does. To increase
        readability of nested functions, the first approach is to introduce
        variables that each holds an arrow function.{" "}
      </p>
      <p>
        {" "}
        Even better you could refactor the entire function to use async/await
        syntax, which is a great way to solve the nesting of functions.{" "}
      </p>

      <h3> Further readings </h3>
      <a href="https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/">
        {" "}
        When not to use arrow functions?{" "}
      </a>
    </article>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ArrowFunctions;

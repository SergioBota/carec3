import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const Destructuring = () => (
  <Layout
    pageId="ArrowFunctions"
    headerClass="black"
    bodyClass="black-light"
    footerClass="black"
    initialMenuColor="#16161a"
  >
    <SEO title="Destructuring Explained" />
    <article>
      <h1>Destructuring </h1>
      <p>
        {" "}
        Is one of the most handy features od ES6. can be applied for Arrays,
        Iterables or Objects.
      </p>

      <p>
        {" "}
        Lets say you want to access the first 3 items on an Array. now instead
        of doinng this:
      </p>
      <code>var first = someArray[0];</code>
      <br />
      <code>var second = someArray[1];</code>
      <br />
      <code>var third = someArray[2];</code>
      <br />
      <br />
      <p>You can do this: </p>
      <code>var [first, second, third] = someArray; </code>
      <br />
      <br />
      <h5>Note:</h5>
      <p> you can destructure into any variable definition:</p>
      <ul>
        <li>var</li>
        <li>let</li>
        <li>const</li>
      </ul>

      <h3>Want more tips? </h3>

      <p>
        you can capture all trailing items in an array with a “rest” pattern:
      </p>
      <code>const [head, ...tail] = [1, 2, 3, 4, 5];</code>
      <br />
      <p>you can skip and access nested items:</p>
      <code>
        const [one,,,four, [[twentyOne], eleven]] = [1, 2, 3, 4, [[21], 11]];
      </code>
      <br />
      <br />
      <h3>what about objects? </h3>
      <p>
        {" "}
        Object Destructuring is a great ally, annd as Array cann be destructured
        into variables and access nested properties
      </p>
      <p>
        {" "}
        there is syntactical shortcut for when the property and variable names
        are the same, which is the common way you will find it.
      </p>
      <code>{` const {color} = { color: 'white', number: 2 }`} </code>
      <br />
      <p>
        {" "}
        But you can bind the name you want to it, comes handy when there are to
        properties with the same name you need to destructure.
      </p>
      <code>{`const {name: dogName } = { name: 'Lazy', legs: 4 }`}</code>
      <code>{`const {name: spiderName } = { name: 'Floffy', legs: 8 }`}</code>
      <br />
      <h3>One last tip</h3>
      <p> you can use default values on the properties </p>
      <code>{` const {value = 'empty'} = {}`} </code>

      <h3> Watch this video </h3>
      <a href="https://youtu.be/_ApRMRGI-6g?list=PLbq3MgcgxWKuJexbk8v-duxeu2CHwei0p">
        {" "}
        how JavaScript's Nested Object Destructuring works{" "}
      </a>
    </article>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Destructuring;

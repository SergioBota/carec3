import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

const ArraysLessons = () => (
  <Layout pageId="Arrays">
    <SEO title="Useful Arrays methods in JS" />

    <article>
      <h1>Hi i'm Professor Carec Himba and i will be your JS guide. (°(|)°)</h1>
      <h2>Today we'll learn about some useful JS array methods:</h2>

      <ul>
        <li> map </li>
        <li> reduce </li>
        <li> indexOf </li>
        <li> sort </li>
      </ul>
      <p> And an excersice with a hidden bonus!, enjoy! </p>

      <section className="box">
        <h1>map()</h1>
        <p>
          {" "}
          array.map(), simply creates a new array with the result of calling a
          function for each array element, this means the original array stays
          untouched and the mapped array is a new one.{" "}
        </p>
        <h4> Syntax </h4>
        <code> array.map(function(currentValue, index, arr), thisValue) </code>
        <br />
        <p>
          {" "}
          Let's say we want to transforman an array of floats to a rounded
          integer one :{" "}
        </p>
        <code>
          var numbers = [4.1, 1.9, 16, 25.5]; <br />
          var x = numbers.map(Math.round)
        </code>
        <p>
          <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V6RSAOBKDT">
            {" "}
            play with yourself ( If you know what i mean)
          </a>
        </p>
      </section>

      <section className="box">
        <h1>reduce()</h1>
        <p>
          {" "}
          array.reduce(), collapses the array from left to right ( if you want
          it to be from right to left you can use reduceRight() method.)
          returning a single value.{" "}
        </p>
        <p>
          {" "}
          reduce() does not execute the function for array elements without
          values. and also this method does not change the original array.
        </p>
        <h4> Syntax </h4>
        <code>
          {" "}
          array.reduce(function(total, currentValue, currentIndex, arr),
          initialValue){" "}
        </code>
        <br />

        <p> Let's say we want to sum all values in the array : </p>
        <code>
          var numbers = [1,2,3]; <br />
          var x = numbers.reduce((total, currentValue) => total + currentValue )
        </code>
        <p>
          <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V6SQ2BC7PA">
            {" "}
            play with yourself ( If you know what i mean)
          </a>
        </p>

        <p>
          <b>Note:</b> don't worry about arrow function in the example we'll get
          there in other lesson.
        </p>
      </section>

      <section className="box">
        <h1>indexOf()</h1>
        <p>
          {" "}
          array.indexOf(), method searches the array for the specified item, and
          returns its position.{" "}
        </p>
        <p>
          {" "}
          Returns -1 if the item is not found. If you want to search from end to
          start, use the lastIndexOf() method.
        </p>
        <h4> Syntax </h4>
        <code>array.indexOf(item, start) </code>
        <br />

        <p>
          {" "}
          Let's say we want to know the position of number 100 inside the number
          array :{" "}
        </p>
        <code>
          var numbers = [1, 2, 3, 4, 100, 6, 7, 8, 9, 10]; <br />
          var x = numbers.indexOf(100)
        </code>
        <p>
          <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V6QT8KJHKZ">
            {" "}
            play with yourself ( If you know what i mean)
          </a>
        </p>
      </section>

      <section className="box">
        <h1>sort()</h1>
        <p> array.sort() method items in the array. </p>
        <p>
          {" "}
          By default, the sort() method sorts the values as strings in
          alphabetical and ascending order.
        </p>
        <h4> Syntax </h4>
        <code> array.sort(compareFunction) </code>
        <br />

        <p> Let's say we want tosort the array in descending order: </p>
        <code>
          {`
    	var numbers = [40, 100, 1, 5, 25, 10]; <br/>
      var x = numbers.sort((a, b) => {return b - a}) 
  `}
        </code>
        <p>
          <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V749AGM384">
            {" "}
            play with yourself ( If you know what i mean)
          </a>
        </p>
      </section>

      <br />

      <div class="box dark-container">
        <h2>Now an excersice! (°(|)°) </h2>
        <h5>
          {" "}
          Let's say you need to calculate the score of 3 teams and then decide
          who is the winner.
          <p> Teams are defined as follows:</p>
        </h5>

        <p>
          {`			const teams = new Array(3)
			.fill()
							.map((i, index) => { 
										return {id: index,
														scores: new Array(index + 10).fill(index + 1)
																}
									}) `}
          <br /> <br />
          this will give us an array in the shape : <br />
          {`[ {id: 0, scores: Array(10) }, {id: 1, scores: Array(11) },  {id: 2, scores: Array(12) }]`}
        </p>

        <p>
          {" "}
          now we can use map() and reduce() to get each team score and then
          sort() it:{" "}
        </p>
        <p>
          <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V84E2QFSWX">
            {" "}
            start here{" "}
          </a>
        </p>
        <br />

        <section>
          <h4>
            Can you tell what is the problem with this{" "}
            <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V88FNOV0S1">
              {" "}
              solution{" "}
            </a>
          </h4>
          <p>
            {" "}
            check this running
            <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V81CA0AD8D">
              solution
            </a>
          </p>
        </section>
      </div>
      <br />
      <br />
      <section>
        <h3>So what about fill() and [... array] ?</h3>
        <p> check this </p>

        <li>
          <a href="https://www.w3schools.com/code/tryit.asp?filename=G5V81CA0AD8D">
            {" "}
            .fill()
          </a>{" "}
        </li>

        <li>
          <a href="https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array">
            Array clone in JS
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.geeksforgeeks.org/javascript-spread-operator/">
            {" "}
            spread operator in JS
          </a>
        </li>
      </section>
      <br />
    </article>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ArraysLessons;

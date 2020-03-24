import { Link } from "gatsby";
import React from "react";
import { default as data } from "../../menu-tree.json";

const slug = (link, initialColor = "white") => {
  //console.log(link);
  const { path, title, children } = link;
  return (
    <li>
      <Link
        to={path}
        className="align-center"
        style={{
          margin: 0,
          color: `${initialColor}`,
          textDecoration: `none`
        }}
      >
        {title}
      </Link>
      {children && (
        <ul className="align-left">
          {" "}
          {children.map(link => slug(link, initialColor))}{" "}
        </ul>
      )}
    </li>
  );
};

const ArticleLink = (initialColor = "white") => {
  return (
    <ul style={{ listStyle: `none` }}>
      {data && data.root.map(link => slug(link, initialColor))}
    </ul>
  );
};

export default ArticleLink;

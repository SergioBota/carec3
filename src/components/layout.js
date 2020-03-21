/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";

import Header from "./header";
import Menu from "./menu";

const Layout = ({
  children,
  pageId = "",
  headerClass = "",
  bodyClass = "",
  footerClass = "",
  initialMenuColor,
  menuTextColor
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const disqusConfig = {
    shortname: "carec",
    config: { identifier: pageId }
  };

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        className={headerClass}
      />
      <Menu initialColor={initialMenuColor} textColor={menuTextColor} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
        className={bodyClass}
      >
        <main>{children}</main>
        <footer className={`${footerClass} box`}>
          <DiscussionEmbed {...disqusConfig} />
          {`Built with `}
          <a href="https://www.gatsbyjs.org">Gatsby </a>
          {` Themes by `}
          <a href="https://www.happyhues.co/">HappyHues</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

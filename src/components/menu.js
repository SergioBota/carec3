import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ArticleLink from "./articleLink";

const Menu = ({
  className = "",
  initialColor = "#716040",
  textColor = "white"
}) => {
  const [open, toggle] = useState(false);
  const initialProps = {
    position: "absolute",
    left: "0%",
    top: "0%",
    width: "25%",
    height: "12%",
    background: initialColor,
    color: textColor,
    borderRadius: "10%"
  };

  const transitionProps = async next => {
    /* await next({
      width: "33%",
      height: "50%",
      background: "lightblue"
    });*/
    await next({
      width: "45%",
      height: "85%",
      background: "lightblue"
    });
    await next({
      top: "0%",
      height: "100%",
      background: "lightskyblue",
      position: "fixed",
      borderRadius: "0"
    });
  };
  const props = useSpring({
    from: initialProps,
    to: open ? transitionProps : initialProps
  });

  return (
    <animated.div
      className={className}
      style={props}
      onClick={() => toggle(!open)}
    >
      <div
        style={{
          // margin: `0 auto`,
          maxWidth: 960,
          minWidth: 100,
          padding: `1.45rem 0.0875rem`
        }}
      >
        <h1
          style={{
            margin: 0,
            color: `white`,
            textDecoration: `none`,
            borderBottom: `solid 2px ${initialColor}`,
            paddingBottom: "0.45em"
          }}
        >
          {open ? "CLOSE" : `ლ(°(|)°ლ) `}
        </h1>

        <div
          style={{
            padding: "1em 0.5em"
          }}
        >
          <ul>
            <li
              style={{
                display: open ? `block` : `none`
              }}
            >
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  margin: "1em"
                }}
              >
                {`Home `}
              </Link>
            </li>
            {open && <ArticleLink initialColor={initialColor} />}
          </ul>
        </div>
      </div>
    </animated.div>
  );
};

Menu.propTypes = {
  siteTitle: PropTypes.string
};

Menu.defaultProps = {
  siteTitle: ``
};

export default Menu;

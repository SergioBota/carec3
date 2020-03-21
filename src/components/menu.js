import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { default as data } from "../../menu-tree.json";

const Menu = ({
  className = "",
  initialColor = "#716040",
  textColor = "white"
}) => {
  const slug = (path, title) => {
    console.log(path, title);
    return (
      <li>
        <Link to={path}>{title}</Link>
      </li>
    );
  };

  const [open, toggle] = useState(false);
  const initialProps = {
    position: "fixed",
    left: "0%",
    top: "0%",
    width: "25%",
    height: "15%",
    background: initialColor,
    color: textColor
  };

  const transitionProps = async next => {
    /* await next({
      width: "33%",
      height: "50%",
      background: "lightblue"
    });*/
    await next({
      width: "40%",
      height: "70%",
      background: "lightgoldenrodyellow"
    });
    await next({ top: "0%", height: "100%", background: "lightskyblue" });
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
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0, color: `white`, textDecoration: `none` }}>
          {`ლ(°(|)°ლ) `}
        </h1>

        <div>
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
                  textDecoration: `none`
                }}
              >
                {`Home `}
              </Link>
            </li>
            {open && data && data.root.map(link => slug(link.path, link.title))}
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

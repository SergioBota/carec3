import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Menu = ({ className = "" }) => {
  const [open, toggle] = useState(false);
  const initialProps = {
    left: "0%",
    top: "0%",
    width: "30%",
    height: "100%",
    background: "lightblue"
  };

  const transitionProps = async next => {
    await next({
      width: "1000px",
      height: "1000px",
      background: "lightblue"
    });
    await next({
      width: "50%",
      background: "lightgoldenrodyellow"
    });
    await next({ width: "50%", background: "lightseagreen" });
    await next({ top: "0%", height: "100%", background: "lightskyblue" });
    await next({
      width: "1000px",
      height: "1000px",
      background: "lightslategrey"
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
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>{`ლ(°(|)°ლ)`}</h1>
        <div>
          <ul>
            <li>option 1</li>
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

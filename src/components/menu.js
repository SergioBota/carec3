import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Menu = ({ className = "" }) => {
  const [open, toggle] = useState(false);
  const initialProps = {
    left: "0%",
    top: "0%",
    width: "0%",
    height: "0%",
    background: "lightgreen"
  };

  const transitionProps = async next => {
    await next({
      left: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
      background: "lightblue"
    });
    await next({ height: "50%", background: "lightgreen" });
    await next({
      width: "50%",
      left: "50%",
      background: "lightgoldenrodyellow"
    });
    await next({ top: "0%", height: "100%", background: "lightpink" });
    await next({ top: "50%", height: "50%", background: "lightsalmon" });
    await next({ width: "100%", left: "0%", background: "lightcoral" });
    await next({ width: "50%", background: "lightseagreen" });
    await next({ top: "0%", height: "100%", background: "lightskyblue" });
    await next({ width: "100%", background: "lightslategrey" });
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
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>{`ლ(°(|)°ლ)`}</h1>
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

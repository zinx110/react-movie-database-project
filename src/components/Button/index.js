import React from "react";
import PropTypes from "prop-types";

// styles
import { Wrapper } from "./Button.styles";

const Button = ({ Text, callBack }) => (
  <Wrapper type="button" onClick={callBack}>
    {Text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  callBack: PropTypes.func,
};

export default Button;

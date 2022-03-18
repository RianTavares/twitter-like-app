import React from 'react';
import variables from '../../assests/scss/exports.scss';

const Button = (props) => {
  const BG_COLORS = {
    ghost: 'transparent',
    alert: variables.alertText,
    light: variables.lightColor,
  };

  const TEXT_COLORS = {
    primary: variables.text,
    secondary: variables.secondaryText,
  };

  const {
    textColor = 'primary',
    backgroundColor = 'ghost',
    border = `1px solid ${variables.borderColor}`,
    text,
    width = '100%',
    onClick,
  } = props;

  const bgColor = BG_COLORS[backgroundColor];
  const txtColor = TEXT_COLORS[textColor];

  return (
    <button
      className="ui-button"
      style={{
        backgroundColor: bgColor,
        border,
        color: txtColor,
        width,
      }}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;

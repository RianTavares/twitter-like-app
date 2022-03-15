import React from 'react';
import Button from '../../../Button';

const RenderTypeButtons = (props) => {
  const {
    onRequestSubmit,
    onSecondarySubmit,
    danger,
    primaryButtonText,
    secondaryButtonText,
  } = props;

  if (danger) {
    return (
      <>
        <Button
          text={primaryButtonText}
          backgroundColor="alert"
          border="none"
          onClick={onRequestSubmit}
        />
        <Button
          text={secondaryButtonText}
          onClick={onSecondarySubmit}
        />
      </>
    );
  }

  return (
    <>
      <Button
        text={primaryButtonText}
        backgroundColor="alert"
        border="none"
        onClick={onRequestSubmit}
      />
      <Button
        text={secondaryButtonText}
        onClick={onSecondarySubmit}
      />
    </>
  );
};

export default RenderTypeButtons;

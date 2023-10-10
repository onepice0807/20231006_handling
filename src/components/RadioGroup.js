import React from 'react';

const RadioGroup = ({ label, children, handelChange }) => {
  console.log(children);
  console.log(handelChange);
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};

export default RadioGroup;

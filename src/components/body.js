import React from 'react';
import './body.css';
import propTypes from 'prop-types';

const Body = ({ children, name, location, hobbies }) => {
  console.log(children);
  return (
    <div className="contanier">
      <h1>Body components</h1>
      <div>{name}</div>
      <div>{children}</div>
    </div>
  );
};

// props값이 없을때 에러가 날만한 것들을
Body.defaultProps = {
  hobbies: [],
};

// prop-types (https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)
Body.propTypes = {
  name: propTypes.string.isRequired,
  location: propTypes.string,
  hobbies: propTypes.array,
};

export default Body;

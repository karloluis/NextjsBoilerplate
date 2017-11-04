import React from 'react';
import PropTypes from 'prop-types';

const Strong = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          font-weight: bold;
        }
      `}
    </style>
  </span>
);

Strong.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Strong;

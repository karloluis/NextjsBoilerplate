import React from 'react';
import PropTypes from 'prop-types';

const CoverBackground = ({ children, image, shader, style }) => (
  <div id="cover__image" style={style} >
    <div id="cover__shader">
      {children}
    </div>

    <style jsx>
      {`
        #cover__image {
          background-image: url('/static/images/${image}');
          background-position: center;
          background-size: cover;

          width: 100%;
        }

        #cover__shader {
          background-color: ${shader};
        }
      `}
    </style>
  </div>
);

CoverBackground.propTypes = {
  image: PropTypes.string.isRequired,
  shader: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

CoverBackground.defaultProps = {
  style: {},
  shader: 'rgba(255, 255, 255, 0)',
};

export default CoverBackground;

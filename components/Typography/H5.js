import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, TYPOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H5 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.light : COLORS.texts.dark;
  return (
    <h5 style={style} >
      {children}
      <style jsx>
        {`
          h5 {
            font-family: ${TYPOGRAPHY.header.title};
            font-size: ${TEXTSIZE.xl};
            color: ${color};
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 400;
          }
        `}
      </style>
    </h5>
  );
};

H5.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

H5.defaultProps = {
  light: false,
  style: {},
};

export default H5;

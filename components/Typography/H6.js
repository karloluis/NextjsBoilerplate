import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, TYPOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H6 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.light : COLORS.texts.dark;
  return (
    <h6 style={style} >
      {children}
      <style jsx>
        {`
          h6 {
            font-family: ${TYPOGRAPHY.header.subtitle};
            font-size: ${TEXTSIZE.lg};
            color: ${color};
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 300;
          }
        `}
      </style>
    </h6>
  );
};

H6.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

H6.defaultProps = {
  light: false,
  style: {},
};

export default H6;

import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, TYPOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H2 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.light : COLORS.texts.dark;
  return (
    <h2 style={style} >
      {children}
      <style jsx>
        {`
          h2 {
            font-family: ${TYPOGRAPHY.header.title};
            font-size: ${TEXTSIZE.xxl};
            color: ${color};
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 600;
          }
        `}
      </style>
    </h2>
  );
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

H2.defaultProps = {
  light: false,
  style: {},
};

export default H2;

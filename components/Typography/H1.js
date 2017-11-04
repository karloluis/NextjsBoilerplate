import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, TYPOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H1 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.light : COLORS.texts.dark;
  return (
    <h1 style={style} >
      {children}
      <style jsx>
        {`
          h1 {
            font-family: ${TYPOGRAPHY.header.title};
            font-size: ${TEXTSIZE.xxxl};
            color: ${color};
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 600;
          }
        `}
      </style>
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

H1.defaultProps = {
  light: false,
  style: {},
};

export default H1;

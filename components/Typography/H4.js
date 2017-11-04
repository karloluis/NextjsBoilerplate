import React from 'react';
import PropTypes from 'prop-types';

import { COLORS, TYPOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H4 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.light : COLORS.texts.dark;
  return (
    <h4 style={style} >
      {children}
      <style jsx>
        {`
          h4 {
            font-family: ${TYPOGRAPHY.header.title};
            font-size: ${TEXTSIZE.xl};
            color: ${color};
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 600;
          }
        `}
      </style>
    </h4>
  );
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

H4.defaultProps = {
  light: false,
  style: {},
};

export default H4;

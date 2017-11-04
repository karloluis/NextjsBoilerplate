import React from 'react';
import PropTypes from 'prop-types';

import { SPACING } from '../../lib/styles';

// Used for decorating titles with icon bullets
const TitleBlock = ({ children, image, trail }) => (
  <div>
    <img
      id="icon"
      src={`/static/images/${image}`}
      alt=""
    />
    {children}
    {
      trail ?
        <img
          id="icon"
          src={`/static/images/${image}`}
          alt=""
        /> : undefined
    }

    <style jsx>
      {`
        div {
          display: flex;
          felx-flow: row nowrap;
          align-items: center;
          justify-content: center;

        }

        #icon {
          width: 30px;
          height: 30px;

          padding: ${SPACING.sm};
        }
      `}
    </style>
  </div>
);

TitleBlock.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  trail: PropTypes.bool,
};

TitleBlock.defaultProps = {
  trail: false,
};

export default TitleBlock;

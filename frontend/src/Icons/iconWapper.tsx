import PropTypes from 'prop-types';
import React from 'react';

const IconWrapper = ({ children, className }) => (
    <div className={className}>
      {children}
    </div>
  );
  
  // Define propTypes before memoizing the component
  IconWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
  };
  
  // Memoize the component after defining propTypes
export default React.memo(IconWrapper);
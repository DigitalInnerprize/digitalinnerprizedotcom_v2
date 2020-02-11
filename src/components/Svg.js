import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ svg, className, altText }) => {
  let cssClass;
  if (className) cssClass = cssClass.concat(' ', className);

  return (
    <div className={cssClass}>
      <img src={svg} alt={altText} />
    </div>
  );
};

Svg.propTypes = {
  svg: PropTypes.string,
  className: PropTypes.string,
};


export default Svg;

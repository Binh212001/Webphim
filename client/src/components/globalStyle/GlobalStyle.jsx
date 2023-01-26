import React from 'react';
import PropTypes from 'prop-types';
import './globalStyle.scss';

function GlobalStyle({ children }) {
  return <div>{children}</div>;
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;

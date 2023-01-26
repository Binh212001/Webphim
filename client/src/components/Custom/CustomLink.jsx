import React, { Children } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

function CustomLink({ to, lable, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`item ${match ? 'active' : ''}`}>
      <Link to={to} {...props}>
        {lable}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {};

export default CustomLink;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import className from 'classnames/bind';
import style from './primaryFilm.module.scss';

const cx = className.bind(style);

function PrimaryFilm({ data }) {
  return (
    <Link to={`/film/${data.slug}`}>
      <div className={cx('card')}>
        <img src={`http://localhost:4000/img/${data.img}`} alt='phim' />
        <span className={cx('card__chapter')}>
          {data.chap.length ? `Tập ${data.chap.length}` : 'Trailer'}
        </span>
        <div className={cx('card__title')}>
          <h3 className='card__title__primary'>{data.name}</h3>
          <p className='card__title__secondary'>{data.ten}</p>
        </div>
      </div>
    </Link>
  );
}

PrimaryFilm.propTypes = {
  data: PropTypes.object,
};
export default PrimaryFilm;

import React from 'react';
import film from '../../assets/img/the-gioi-hoan-my-1.jpg';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

import className from 'classnames/bind';
import style from './secondaryFilm.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(style);
function SecondaryItem({ data }) {
  return (
    <Link to={`/film/${data.slug}`}>
      <div className={cx('card')}>
        <Row gutter={[4]}>
          <Col span={6} style={{ overflow: 'hidden' }}>
            <img
              src={`http://localhost:4000/img/${data.img}`}
              alt='film'
              className={cx('poster')}
            />
          </Col>
          <Col span={18} style={{ padding: '7px' }}>
            <h4 className='card__title__primary'>{data.ten}</h4>
            <p className='card__title__secondary'>{data.name}</p>
            <div className={cx('viewsCount')}>{data.view} lượt xem</div>
          </Col>
        </Row>
      </div>
    </Link>
  );
}
export default SecondaryItem;
SecondaryItem.propTypes = {
  data: PropTypes.object,
};

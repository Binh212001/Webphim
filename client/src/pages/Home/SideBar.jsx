import React, { useEffect } from 'react';

import className from 'classnames/bind';
import style from './sidebar.module.scss';
import SecondaryItem from '../../components/filmItem/SecondaryItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListFilm } from '../../redux/film/action';

const cx = className.bind(style);

function SideBar() {
  const dispath = useDispatch();
  const { film } = useSelector((state) => state.film);
  useEffect(() => {
    dispath(fetchListFilm());
  }, []);

  return (
    <div className={cx('sidebar')}>
      <div className={cx('headding')}>
        <h3>XẾP HẠNG</h3>
        <div className={cx('heading__date')}>
          <ul className={cx('time')}>
            <li className={cx('date')}>Ngày</li>
            <li className={cx('date')}>Tuần</li>
            <li className={cx('date')}>Tháng</li>
            <li className={cx('date')}>Tất cả</li>
          </ul>
        </div>
      </div>

      <div className={cx('list__item')}>
        {film
          .sort((a, b) => b.view - a.view)
          .slice(0, 6)
          .map((data, index) => {
            return <SecondaryItem key={index} data={data} />;
          })}
      </div>
    </div>
  );
}

export default SideBar;

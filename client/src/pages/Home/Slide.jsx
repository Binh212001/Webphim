import React, { useEffect } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
// import slide from '../../assets/img/dau-la-dai-luc-2022.jpg';
import className from 'classnames/bind';
import style from './slide.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListSlide } from '../../redux/slide/action';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const cx = className.bind(style);

function Slide() {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const ref = useRef();
  useEffect(() => {
    dispatch(fetchListSlide());
  }, [dispatch]);

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     ref.current.style = ` transform: translateX(-${756 * (index + 1)}px);`;
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [index]);

  const { slide } = useSelector((state) => state.slide);

  // const handleMove = (otp) => {
  //   // ref.current.classList.remove('right');
  //   // ref.current.classList.remove('left');

  //   if (otp === '<' && index >= 1) {
  //     // ref.current.classList.remove('right');
  //     // ref.current.classList.add('left');
  //     ref.current.style = ` transform: translateX(-${756 * (index - 1)}px);`;
  //     setIndex(index - 1);
  //   } else if (otp === '>' && index < slide.length - 1) {
  //     // ref.current.classList.remove('left');
  //     // ref.current.classList.add('right');
  //     ref.current.style = ` transform: translateX(-${756 * (index + 1)}px);`;
  //     setIndex(index + 1);
  //   }
  // };

  const moveLeft = () => {
    if (index >= 1) {
      // ref.current.classList.remove('right');
      // ref.current.classList.add('left');
      ref.current.style = ` transform: translateX(-${756 * (index - 1)}px);`;
      setIndex(index - 1);
    } else {
      ref.current.style = ` transform: translateX(-${
        756 * (slide.length - 1)
      }px);`;
      setIndex(slide.length - 1);
    }
  };
  const moveRight = () => {
    if (index < slide.length - 1) {
      // ref.current.classList.remove('left');
      // ref.current.classList.add('right');
      ref.current.style = ` transform: translateX(-${756 * (index + 1)}px);`;
      setIndex(index + 1);
    } else {
      ref.current.style = ` transform: translateX(-${756 * -(index + 2)}px);`;
      setIndex(0);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      moveRight();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div className={cx('slide')}>
      <div ref={ref} className={cx('slide__list')}>
        {slide.map((data, index) => {
          return (
            <Link to={`/film/${data.slug}`} key={index}>
              <div className={cx('slide__item')}>
                <img
                  src={`http://localhost:4000/img/${data.img}`}
                  alt='slide'
                  className={cx('poster')}
                />
                <div className={cx('slide__body')}>
                  <h1 className={cx('title')}>{data.name}</h1>
                  <p className={cx('title__es')}>{data.name}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div onClick={() => moveLeft()} className={cx('arrow__left')}>
        <CaretLeftOutlined />
      </div>
      <div onClick={() => moveRight()} className={cx('arrow__right')}>
        <CaretRightOutlined />
      </div>
    </div>
  );
}

export default Slide;

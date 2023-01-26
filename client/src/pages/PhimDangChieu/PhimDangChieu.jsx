import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import PrimaryFilm from '../../components/filmItem/PrimaryFilm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListFilm } from '../../redux/film/action';

function PhimDangChieu() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListFilm());
  }, [dispatch]);

  const { film } = useSelector((state) => state.film);

  return (
    <div className='wrapper'>
      <div className='content'>
        <Row gutter={[10, 10]}>
          {film.map((data, index) => {
            return (
              <Col lg={6} md={12} sm={24}>
                <PrimaryFilm key={index} data={data} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default PhimDangChieu;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import Slide from './Slide';
import PrimaryFilm from '../../components/filmItem/PrimaryFilm';
import SideBar from './SideBar';
import { fetchListFilm } from '../../redux/film/action';
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListFilm());
  }, []);

  const { film } = useSelector((state) => state.film);

  return (
    <div className='wrapper content'>
      <Row gutter={30}>
        <Col lg={16} md={24} sm={24} xs={24}>
          <Slide />
          <Row gutter={[4, 4]}>
            {film.map((data, index) => {
              return (
                <Col key={index} lg={6} md={12} sm={24} xs={24}>
                  <PrimaryFilm data={data} />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <SideBar />
        </Col>
      </Row>
    </div>
  );
}

export default Home;

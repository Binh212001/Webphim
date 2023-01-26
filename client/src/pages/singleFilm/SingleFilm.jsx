import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import apiFilm from '../../api/apiFilm';
import { fetchSeletedFilm } from '../../redux/film/action';
import SideBar from '../Home/SideBar';
import FilmInfo from './FilmInfo';

function SingleFilm() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeletedFilm(slug));
  }, [slug]);

  const { selected } = useSelector((state) => state.film);
  return (
    <div className='wrapper content '>
      <Row gap={30}>
        <Col lg={18} md={18}>
          <FilmInfo film={selected} />
        </Col>

        <Col lg={6} md={6}>
          <SideBar />
        </Col>
      </Row>
    </div>
  );
}

export default SingleFilm;

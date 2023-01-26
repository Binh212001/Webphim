import { CaretRightOutlined } from '@ant-design/icons';
import { Col, Row, Tag, Typography } from 'antd';
import React, { useState } from 'react';
import video from '../../assets/img/video.mp4';
import apiFilm from '../../api/apiFilm';

function FilmInfo({ film }) {
  const [isDesc, setISDesc] = useState(false);
  const [watch, setWatch] = useState(false);
  // const [chap, setChap] = useState(film.chap.length);
  // const updateChap = async () => {
  //   console.log('🚀 ~ file: FilmInfo.jsx ~ line 11 ~ updateChap ~ tap', tap);
  //   const newFim = {
  //     ...film,
  //     chap: tap,
  //   };
  //   setChap(chap + 1);
  //   console.log(
  //     '🚀 ~ file: FilmInfo.jsx ~ line 13 ~ updateChap ~ newFim',
  //     newFim,
  //   );
  //   await apiFilm.update(newFim);
  // };
  return (
    <div>
      <Row gutter={20}>
        <Col span={6}>
          <img
            src={`http://localhost:4000/img/${film.img}`}
            alt=''
            style={{
              width: '100%',
              borderRadius: '2px',
            }}
          />
        </Col>
        <Col span={18}>
          <Typography.Title
            style={{
              color: '#cacaca',
            }}
            level={3}>
            {film.ten}
          </Typography.Title>
          <Typography.Text
            style={{
              color: '#cacaca',
            }}>
            {film.name}
          </Typography.Text>
          <br />
          <Typography.Text
            style={{
              color: '#cacaca',
            }}>
            Đang phát: <Tag color='#3b5999'>{film.chap.length}</Tag>
          </Typography.Text>
          <br />
          <Typography.Text
            style={{
              color: '#cacaca',
            }}>
            Tập mới nhất: <Tag color='#3b5999'>{film.chap.length}</Tag>
          </Typography.Text>
          <br />
          <Typography.Text
            style={{
              color: '#cacaca',
            }}>
            Quốc gia: {film.country}
          </Typography.Text>
          <br />
          <Typography.Text
            style={{
              color: '#cacaca',
            }}>
            Thể loại:{film.type}
          </Typography.Text>
          <br />
          <button
            onClick={() => setWatch(!watch)}
            style={{
              backgroundImage:
                'linear-gradient(to right,#ffbb00,#e43603,#ff6290,#ff5000)',
              padding: '4px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>
            {' '}
            <CaretRightOutlined /> Xem Phim
          </button>
          <br />
          <br />

          {/* <button
            onClick={() => updateChap()}
            style={{
              backgroundImage:
                'linear-gradient(to right,#ffbb00,#e43603,#ff6290,#ff5000)',
              padding: '4px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            type='submit'>
            Cập Nhật tập tiep theo
          </button> */}
        </Col>
      </Row>

      {watch ? (
        <Row>
          <video
            style={{
              width: '100%',
              height: '400px',
            }}
            src={video}
            autoPlay
            controls></video>
        </Row>
      ) : null}

      <Row>
        <Typography.Title
          style={{
            color: '#cacaca',
          }}
          level={4}>
          {' '}
          Xem Phim {film.ten}{' '}
        </Typography.Title>
        <Typography.Text
          style={{
            color: '#cacaca',
            height: ` ${isDesc ? '100%' : '100px'}`,
            overflow: 'hidden',
            transition: 'all 0.5',
          }}>
          {film.desc}
        </Typography.Text>
        <span
          onClick={() => setISDesc(!isDesc)}
          style={{
            color: 'blue',
            cursor: 'pointer',
          }}>
          Xem Them
        </span>
      </Row>
    </div>
  );
}

export default FilmInfo;

import { SearchOutlined } from '@ant-design/icons';
import { Avatar, Col, Popover, Row } from 'antd';
import className from 'classnames/bind';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/img/logo1.png';
import { handleLogoutAction } from '../../redux/auth/action';
import CustomLink from '../Custom/CustomLink';
import style from './header.module.scss';

const cx = className.bind(style);
function Header({ showForm }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const nagitive = useNavigate();

  const hide = () => {
    setOpen(false);
    dispatch(handleLogoutAction());

    nagitive('/');
  };

  const { user } = useSelector((state) => state.auth);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const showAuth = () => {
    showForm();
  };

  return (
    <div className={cx('header')}>
      <div className={cx('top')}>
        <div className='wrapper'>
          <Row align='middle'>
            <Col lg={8}>
              <img src={logo1} alt='logo1' />
            </Col>
            <Col lg={8}>
              <div className={cx('search')}>
                <SearchOutlined />
                <input
                  type='text'
                  placeholder='Search with Tìm kiếm movie ....'
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className={cx('account')}>
                {user ? (
                  <Popover
                    content={<a onClick={hide}>Log Out</a>}
                    title='Title'
                    trigger='click'
                    open={open}
                    onOpenChange={handleOpenChange}>
                    <Avatar />
                  </Popover>
                ) : (
                  <button className='btn' onClick={() => showAuth()}>
                    Đăng nhập
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('bottom')}>
        <nav className='wrapper'>
          <ul className={cx('list')}>
            <CustomLink lable='Trang chủ' to='/' />
            <CustomLink lable='Phim lẻ' to='/phimle' />
            <CustomLink lable='Thêm Phim' to='/themphim' />
            <CustomLink lable='Thêm slide' to='/themslide' />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

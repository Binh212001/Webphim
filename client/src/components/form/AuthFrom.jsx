import React from 'react';
import { useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import style from './authForm.module.scss';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../redux/auth/action';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);
function AuthFrom({ showForm }) {
  const { register, handleSubmit } = useForm();

  const nagitive = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(handleLogin(data));
    showForm();
    nagitive('/');
  };

  return (
    <form className={cx('auth')} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={cx('auth__input')}
        placeholder='Uername'
        {...register('username', {
          require: true,
          maxLength: 20,
        })}
      />
      <input
        className={cx('auth__input')}
        placeholder='password'
        type='password'
        {...register('password', {
          require: true,
          maxLength: 20,
        })}
      />
      <button type='submit' className={cx('auth__btn-in')}>
        LogIn
      </button>
      <button className={cx('auth__btn-out')} onClick={() => showForm()}>
        Cancle
      </button>
    </form>
  );
}

export default AuthFrom;

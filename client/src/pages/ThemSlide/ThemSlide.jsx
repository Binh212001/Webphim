import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import apiConfig from '../../api/apiConfig';
import apiSlide from '../../api/apiSlide';

function ThemSlide() {
  const [file, setFile] = useState();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const { user } = useSelector((state) => state.auth);
  const onSubmit = async (data) => {
    const fileName = Date.now() + file.name;
    const formData = new FormData();
    formData.append('name', fileName);
    formData.append('img', file);

    if (file) {
      const newSlide = {
        ...data,
        img: fileName,
      };

      await apiSlide.addSlide(newSlide);
      await apiConfig.post('/upload', formData, {
        headers: {
          'Content-Type': 'Multipart/formData',
        },
      });
      navigate('/');
    }
  };
  return (
    <div className='wrapper content'>
      {user ? (
        <form
          style={{
            color: 'black',
          }}
          onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='Ten' {...register('ten', { required: true })} />

          <input placeholder='Name' {...register('name', { required: true })} />

          <input placeholder='slug' {...register('slug', { required: true })} />
          <br />

          <input
            type='file'
            required={true}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <input type='submit' />
        </form>
      ) : (
        <Navigate to='/' />
      )}
    </div>
  );
}

export default ThemSlide;

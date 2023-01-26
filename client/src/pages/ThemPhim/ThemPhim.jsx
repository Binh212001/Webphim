import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import apiConfig from '../../api/apiConfig';
import apiFilm from '../../api/apiFilm';
function ThemPhim() {
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
      const newFilm = {
        ...data,
        year: parseInt(data.year),
        view: parseInt(data.view),
        img: fileName,
      };

      await apiFilm.addFilm(newFilm);
      await apiConfig.post('/upload', formData, {
        headers: {
          'Content-Type': 'Multipart/formData',
        },
      });
      navigate('/');
    }
  };

  return (
    <div>
      {user ? (
        <div className='wrapper content'>
          <form
            style={{
              color: 'black',
            }}
            onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Ten' {...register('ten', { required: true })} />
            <input
              placeholder='Name'
              {...register('name', { required: true })}
            />

            <input
              placeholder='slug'
              {...register('slug', { required: true })}
            />

            <input
              placeholder='year'
              {...register('year', { required: true })}
            />
            <input
              placeholder='country'
              {...register('country', { required: true })}
            />
            <input placeholder='view' {...register('view')} />
            <br />
            <textarea
              placeholder='Mo ta'
              style={{
                width: '100%',
                height: '200px',
              }}
              {...register('desc', { required: true })}
            />
            <br />

            <input type='file' onChange={(e) => handleChange(e)} />
            <br />

            <input type='submit' />
          </form>
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </div>
  );
}

export default ThemPhim;

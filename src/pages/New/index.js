import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.svg';

import './styles.scss';


export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumb, setThumb] = useState(null);

  const preview = useMemo(() => {
    return thumb ? URL.createObjectURL(thumb) : null;
  }, [thumb])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumb', thumb);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);

    await api.post('/spots', data, {
      headers: { user_id }
    });

    history.push('dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label id='thumb' style={{ backgroundImage: `url(${preview}` }} className={thumb ? 'has-thumb' : ''}>
        <input
          type='file'
          onChange={event => setThumb(event.target.files[0])}
        />
        <img src={camera} alt='icon-camera' />
      </label>
      <label htmlFor='company'>Empresa *</label>
      <input
        type='text'
        id='company'
        placeholder='Sua empresa incrível'
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

      <label htmlFor='techs'>
        Tecnologias * <small>(separadas por vírgula)</small>
      </label>
      <input
        type='text'
        id='techs'
        placeholder='Quais tecnologias usam?'
        value={techs}
        onChange={event => setTechs(event.target.value)}
      />

      <label htmlFor='price'>
        Valor da diária * <small>(em branco para GRATUITO)</small>
      </label>
      <input
        type='text'
        id='price'
        placeholder='Valor cobrado por dia'
        value={price}
        onChange={event => setPrice(event.target.value)}
      />

      <button type='submit' className='btn'>
        Cadastrar
      </button>
    </form>
  );
}

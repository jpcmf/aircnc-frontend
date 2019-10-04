import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    // const response = await api.post('/sessions', {
    //   email
    // });

    // const { _id } = response.data;

    // localStorage.setItem('user', _id);

    history.push('/panel');
  }

  return (
    <>
      <h1>
        Rapidez, simplicidade e flexibilidade na hora de solicitar cópias
        processuais?
      </h1>
      <div className='content'>
        <p>
          <strong>Minhas audiências</strong> oferece o melhor serviço e veja
          como é simples.
          <small>Começe digitando seu e-mail abaixo:</small>
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>E-mail *</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Seu melhor e-mail'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button className='btn' type='submit'>
            Prosseguir
          </button>
        </form>
      </div>
    </>
  );
}

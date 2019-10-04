import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Tooltip from 'react-tooltip-lite';

import './styles.scss';
import iconFisico from '../../assets/process.svg';
import iconDigital from '../../assets/artificial-intelligence.svg';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });
      console.log(response.data);
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <div className='content'>
      <p>Para obter suas cópias é preciso escolher um meio:</p>
      <div className='panel'>
        <div className='panel__l'>
          <img src={iconFisico} alt='' />
          <div>
            <Link to='/new'>
              <button className='btn'>Físico</button>
              <Tooltip
                content={
                  <div className='panel__tooltip'>
                    Caso o processo jurídico seja físico, isto é, esteja
                    fisicamente localizado em um maço de papéis dentro de uma
                    sala do fórum, será necessário realizar a contratação de um
                    prestador de serviço para que realize cópias deste processo
                    jurídico deslocando-se até o local com um equipamento
                    (smartphone ou scanner de mão). Nós nos responsabilizamos
                    pela contratação deste prestador.
                  </div>
                }
                direction='down'
              >
                <small>Essa opção depende de um prestador de serviço</small>
              </Tooltip>
            </Link>
          </div>
        </div>
        <div className='panel__r'>
          <img src={iconDigital} alt='' />
          <div>
            <Link to='/new'>
              <button className='btn'>Digital</button>
              <Tooltip
                content={
                  <div className='panel__tooltip'>
                    Caso o processo seja digital, nós recebemos a solicitação pelo
                    nosso sistema e baixamos esta cópia do processo em questão
                    diretamente com nosso acesso aos sistemas dos tribunais.
                  </div>
                }
                direction='down'
              >
                <small>É a opção mais rápida</small>
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
      {/* <Link to='/new'>
        <button className='btn'>Cadastrar novo spot</button>
      </Link> */}
    </div>
  );
}

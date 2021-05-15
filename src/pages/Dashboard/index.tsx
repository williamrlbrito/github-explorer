import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Githun Explorer" />
    <Title>Explore repositories no Github</Title>

    <Form>
      <input placeholder="Digite aqui" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/19253614?v=4"
          alt="William Brito"
        />

        <div>
          <strong>Githun Explorer</strong>
          <p>Explore repositories no Github</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/19253614?v=4"
          alt="William Brito"
        />

        <div>
          <strong>Githun Explorer</strong>
          <p>Explore repositories no Github</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/19253614?v=4"
          alt="William Brito"
        />

        <div>
          <strong>Githun Explorer</strong>
          <p>Explore repositories no Github</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

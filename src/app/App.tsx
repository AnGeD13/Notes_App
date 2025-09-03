import type { JSX } from 'react';

import './styles/index.css';
import { HomePage } from '@/pages/home';

import { MainLayout } from './layouts';

function App(): JSX.Element {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;

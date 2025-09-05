import type { JSX } from 'react';
import './styles/index.css';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { NotFoundPage } from '@/pages/home/not-found';
import { NotePage } from '@/pages/note';
import { CREATE, EDIT } from '@/shared/constants';

import { MainLayout } from './layouts';

function App(): JSX.Element {
  return (
    <MainLayout>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/new' element={<NotePage mode={CREATE} />} />
        <Route path='/edit/:id' element={<NotePage mode={EDIT} />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

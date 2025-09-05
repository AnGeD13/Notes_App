import type { JSX } from 'react';

import './styles/index.css';
// import { HomePage } from '@/pages/home';

import { NotePage } from '@/pages/note';
import { CREATE } from '@/shared/constants';

import { MainLayout } from './layouts';

function App(): JSX.Element {
  return (
    <>
      <MainLayout>
        {/* <HomePage /> */}
        <NotePage mode={CREATE} />
      </MainLayout>
    </>
  );
}

export default App;

import React from 'react';

import { useFetch } from './hooks/useFetch';

import './index.css'
import { Repositories } from './components/Repositories';

type Repository = {
  name: string,
  description: string
}

function App() {
  return (
    <main className='min-h-screen bg-[black] font-[inter] text-[white]'>
      <Repositories />
    </main>
  );
}

export default App;

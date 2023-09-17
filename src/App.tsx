// tailwind
import './index.css'

// components
import { Repositories } from './components/Repositories';

function App() {
  return (
    <main className='min-h-screen bg-[black] font-[inter] text-[white]'>
      <Repositories />
    </main>
  );
}

export default App;

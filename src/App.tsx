// tailwind
import './index.css'

// components
import { Repositories } from './components/GithubData'

function App() {
  return (
    <main className='min-h-screen flex justify-center bg-[black] font-[inter] text-[white]'>
      <Repositories />
    </main>
  );
}

export default App;

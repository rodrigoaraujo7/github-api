// tailwind
import './index.css'

// components
import { Repositories, UserData } from './components/GithubData'

function App() {
  return (
    <main className='min-h-screen flex items-center flex-col bg-[black] font-[inter] text-[white]'>
      <UserData />
      <Repositories />
    </main>
  );
}

export default App;

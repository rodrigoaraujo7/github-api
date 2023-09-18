// tailwind
import './index.css'

// components
import { Repositories, UserProfile } from './components/GithubData'

function App() {
  let username = 'rodrigoaraujo7'

  return (
    <main className='min-h-screen flex justify-center items-center flex-col bg-[black] font-[inter] text-[white]'>
      <UserProfile username={username} />
      <Repositories username={username} />
    </main>
  );
}

export default App;

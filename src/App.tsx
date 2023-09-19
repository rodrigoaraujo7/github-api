// tailwind
import './index.css'

// components
import {
  Input,
  Repositories,
  SubmitButton,
  Title,
  UserProfile,
} from './components'

function App() {
  let username = 'rodrigoaraujo7'

  return (
    <main className='min-h-screen flex justify-center items-center flex-col bg-[black] font-[inter] text-[white]'>
      <section className='mt-20 w-2/4'>
        <Title center={true}>Github API</Title>
        <div className='mt-4 flex justify-center items-center gap-2'>
          <Input />
          <SubmitButton />
        </div>
      </section>

      <UserProfile username={username} />
      <Repositories username={username} />
    </main>
  );
}

export default App;

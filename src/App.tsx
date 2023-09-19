// hooks
import {
  useState,
  useRef
} from 'react'

// components
import {
  Repositories,
  Title,
  UserProfile,
} from './components'

// tailwind
import './index.css'

// utils
import doubleArrowRight from './utils/svg/double-arrow-right.svg'


function App() {
  const [username, setUsername] = useState('')

  const usernameInput = useRef<HTMLInputElement>(null);

  const submitUsername = () => {
    if (usernameInput.current != null) {
      setUsername(usernameInput.current.value);
    }
  }

  return (
    <main className='min-h-screen flex justify-center items-center flex-col bg-[black] font-[inter] text-[white]'>
      <section className='mt-20 w-2/4'>
        <Title center={true}>Github API</Title>
        <div className='mt-4 flex justify-center items-center gap-2'>
          <input
            type="text"
            placeholder="github username"
            ref={usernameInput}
            className="w-5/6 h-16 p-4 border-4 border-gray900 bg-gray900 outline-none rounded-md font-poppins font-normal text-2xl text-gray300 placeholder-gray500 transition-colors focus:border-gray700"
          />

          <button
            type="submit"
            onClick={submitUsername}
            className='w-1/6 h-16 flex justify-center items-center bg-primaryColor rounded-md shadow-submitShadow outline-none'
          >
            <img src={doubleArrowRight} alt="" />
          </button>
        </div>
      </section>

      {username !== '' && (
        <>
          <UserProfile username={username} />
          <Repositories username={username} />
        </>
      )}
    </main>
  );
}

export default App;

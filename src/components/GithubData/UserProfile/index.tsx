// utils
import locationPin from '../../../utils/svg/location-pin.svg'

// components
import { Title } from '../../Title'

// hooks
import { useFetch } from "../../../hooks/useFetch"

type UserDataProps = {
  username: string | undefined
}
interface UserData {
  name: string,
  bio: string,
  location: string,
  avatar_url?: string
}

export const UserProfile = ({ username }: UserDataProps) => {
  const {
    data: userProps,
    error,
    isFetching
  } = useFetch<UserData>(`users/${username}`)

  // transforming the userProps (object) to array to the .map can read he
  let userPropsToArray = [userProps]

  return (
    <section className='w-2/4 my-11'>
      {isFetching && <Title center={true}>Loading ...</Title>}
      {error ? (<Title center={true} className="underline">User not found! 🤕</Title>) : (
        <>
          {userPropsToArray?.map((user, index) => (
            <div key={index} className='flex gap-5'>
              <img src={user?.avatar_url} alt="" className='w-32 h-32 rounded-md grayscale shadow-whiteShadow' />
              <div>
                <Title center={false}>{user?.name}</Title>
                <h2 className="text-gray500 font-poppins text-base font-normal">{user?.bio}</h2>
                <p className="text-white font-poppins text-base font-medium flex gap-1 mt-3">
                  <img src={locationPin} alt="" />{user?.location}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </section>
  )
}
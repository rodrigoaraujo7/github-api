// utils
import doubleArrowRight from '../../utils/svg/double-arrow-right.svg'

export const SubmitButton = () => {
  return (
    <button
      type="submit"
      className='w-1/6 h-16 flex justify-center items-center bg-primaryColor rounded-md shadow-submitShadow outline-none'
    >
      <img src={doubleArrowRight} alt="" />
    </button>
  )
}
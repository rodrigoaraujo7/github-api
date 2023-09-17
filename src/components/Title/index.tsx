interface ITitle {
  children: string,
  center: boolean
}

export const Title = ({ children, center }: ITitle) => {
  return (
    <h1 className={`text-[white] font-inter text-title font-bold ${center ? 'text-center' : ''}`}>
      {children}
    </h1>
  )
}
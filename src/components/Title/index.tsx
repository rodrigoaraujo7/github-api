interface ITitle {
  children: string,
  center: boolean,
  className?: string
}

export const Title = ({ children, center, className }: ITitle) => {
  return (
    <h1 className={`text-[white] font-inter text-title font-bold ${center && 'text-center'} ${className}`}>
      {children}
    </h1>
  )
}
type Props = React.ComponentProps<"button">

export function Button({ children, ...rest }: Props){
   return (
      <button {...rest} className="bg-gray-200 text-gray-500 hover:bg-black hover:text-gray-400 h-10 rounded-md text-xs font-bold w-full cursor-pointer transition ease-linear" >{children}</button>
   )
}
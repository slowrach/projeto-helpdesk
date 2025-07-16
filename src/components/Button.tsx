import { Merge } from "../utils/merge"

type Props = React.ComponentProps<"button"> & {
   variant?: "black" | "gray"
}

const variants = {
   button: {
      black: "bg-gray-200 text-gray-500 hover:bg-black hover:text-gray-400",
      gray: "bg-gray-500 text-gray-200 hover:bg-gray-400",
   }
}

export function Button({ children, variant = "black", ...rest }: Props){
   return (
      <button {...rest} className={Merge(["h-10 rounded-md text-xs font-bold w-full cursor-pointer transition ease-linear", variants.button[variant]])} >{children}</button>
   )
}
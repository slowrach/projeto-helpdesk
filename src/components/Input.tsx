type Props = React.ComponentProps<"input"> & {
   legend?: string
}

export function Input({ legend, ...rest}: Props){
   return (
      <fieldset>
         <legend className="text-gray-40 text-xs font-bold uppercase">{legend}
         </legend>

         <input {...rest} type="text" className="border-b-2 pt-2 pb-2 border-gray-500 w-full" />
      </fieldset>
   )
}
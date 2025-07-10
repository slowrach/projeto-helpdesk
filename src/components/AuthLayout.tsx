import { Outlet } from "react-router";
import logoDark from "../assets/logoDark.svg"

export function AuthLayout(){
   return (
      <div className="bg-white w-full h-full rounded-tl-lg rounded-bl-lg mt-8 pl-6 pr-6 pb-12 md:max-w-1/2 md:mt-3">
         <header className="flex items-center gap-2 mt-12 mb-8 justify-center">
            <img src={logoDark} alt="logo"/>

            <h1 className="text-blue-dark text-2xl font-bold">HelpDesk</h1>
         </header>

         <Outlet />
      </div>
   )
}
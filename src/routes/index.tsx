import { BrowserRouter } from "react-router"
import { Auth } from "./auth"
// import { Admin } from "./admin"

export function Routes(){
   return (
      <BrowserRouter>
         <Auth />
      </BrowserRouter>
   )
}

import { Routes, Route } from "react-router";
import { Auth as AuthPage } from "../pages/Auth";

export function Auth(){
   return (
      <Routes>
         <Route path="/" element={<AuthPage />} />
      </Routes>
   )
}
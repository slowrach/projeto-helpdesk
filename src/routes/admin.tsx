import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";

export function Admin(){
   return (
      <Routes>
         <Route path="/" element={<AppLayout />}>
            <Route path="/"/>
         </Route>
      </Routes>
   )
}
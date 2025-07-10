import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn(){
   return (
      <div className="flex flex-col items-center gap-3">
         <form className="flex flex-col gap-10 border w-86 p-7 rounded-lg border-gray-500">
            <div>
               <h1 className="font-bold text-xl text-gray-200">Acesse o portal</h1>
               <p className="text-gray-300 text-xs">Entre usando seu e-mail e senha cadastrados</p>
            </div>

            <div className="flex flex-col gap-4">
               <Input legend="E-mail" placeholder="exemplo@mail.com"/>
               <Input legend="Senha" placeholder="Digite sua senha"/>
            </div>

            <Button>Entrar</Button>
         </form>

         <div className="flex flex-col w-86 border p-7 rounded-lg border-gray-500">
            <h1 className="text-sm font-bold">Ainda não tem uma conta?</h1>

            <p className="text-xs text-gray-300 mb-6">Cadastre agora mesmo</p>

            <a href="/signup" className="text-xs font-bold bg-gray-500 h-10 flex items-center justify-center rounded-md hover:bg-gray-400">Criar Conta</a>
         </div>
      </div>
   )
}
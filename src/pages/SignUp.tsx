import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp(){
   return (
      <div className="flex flex-col items-center gap-3">
         <form className="flex flex-col gap-10 border w-86 p-7 rounded-lg border-gray-500">
            <div>
               <h1 className="font-bold text-xl text-gray-200">Crie sua conta</h1>
               <p className="text-gray-300 text-xs">Informe seu nome, e-mail e senha</p>
            </div>

            <div className="flex flex-col gap-4">
               <Input legend="Nome" placeholder="Digite o nome completo"/>
               <Input legend="E-mail" placeholder="exemplo@mail.com"/>
               <Input legend="Senha" placeholder="Digite sua senha"/>
               <span className="text-xs text-gray-400 italic ">Mínimo de 6 dígitos</span>
            </div>

            <Button>Cadastrar</Button>
         </form>

         <div className="flex flex-col w-86 border p-7 rounded-lg border-gray-500">
            <h1 className="text-sm font-bold">Já tem uma conta?</h1>

            <p className="text-xs text-gray-300 mb-6">Entre agora mesmo</p>

            <a href="/" className="text-xs font-bold bg-gray-500 h-10 flex items-center justify-center rounded-md hover:bg-gray-400">Acessar Conta</a>
         </div>
      </div>
   )
}
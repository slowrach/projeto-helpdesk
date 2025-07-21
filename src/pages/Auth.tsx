import logoDark from "../assets/logoDark.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useState } from "react";

export function Auth() {
  const [signUp, setSignUp] = useState(false);
  const inputs = [
    { legend: "E-mail", placeholder: "exemplo@mail.com" },
    { legend: "Senha", placeholder: "Digite sua senha" },
  ];

  return (
    <div className="h-full w-full bg-[url(assets/bg.png)] pt-8 md:justify-end md:pt-3">
      <div className="h-full w-full flex-col rounded-t-[1.25rem] bg-white md:w-1/2 md:rounded-tr-none">
        <header className="flex items-center justify-center gap-3 p-8">
          <img className="w-10" src={logoDark} alt="logo" />
          <h1 className="text-blue-dark text-2xl font-bold">HelpDesk</h1>
        </header>
        <div className="flex flex-col items-center gap-3 overflow-auto">
          {signUp ? (
            <>
              <form className="flex w-86 flex-col gap-10 rounded-lg border border-gray-500 p-7">
                <div className="flex flex-col gap-0.5">
                  <h1 className="text-xl font-bold text-gray-200">
                    Crie sua conta
                  </h1>
                  <p className="text-xs text-gray-300">
                    Informe seu nome, e-mail e senha
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Input legend="Nome" placeholder="Digite o nome completo" />
                  <Input legend="E-mail" placeholder="exemplo@mail.com" />
                  <Input legend="Senha" placeholder="Digite sua senha" />
                  <span className="text-xs text-gray-400 italic">
                    Mínimo de 6 dígitos
                  </span>
                </div>

                <Button>Cadastrar</Button>
              </form>

              <div className="mb-12 flex w-86 flex-col rounded-lg border border-gray-500 p-7">
                <h1 className="text-sm font-bold">Já tem uma conta?</h1>

                <p className="mb-6 text-xs text-gray-300">Entre agora mesmo</p>

                <Button variant="gray" onClick={() => setSignUp(false)}>
                  Acessar Conta
                </Button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <form className="flex w-86 flex-col gap-10 rounded-lg border border-gray-500 p-7">
                <div className="flex flex-col gap-0.5">
                  <h1 className="text-xl font-bold text-gray-200">
                    Acesse o portal
                  </h1>
                  <p className="text-xs text-gray-300">
                    Entre usando seu e-mail e senha cadastrados
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {inputs.map((input) => (
                    <Input
                      legend={input.legend}
                      placeholder={input.placeholder}
                    />
                  ))}
                </div>

                <Button>Entrar</Button>
              </form>
              <div className="flex w-86 flex-col gap-0.5 rounded-lg border border-gray-500 p-7">
                <h1 className="text-sm font-bold">Ainda não tem uma conta?</h1>

                <p className="mb-6 text-xs text-gray-300">
                  Cadastre agora mesmo
                </p>

                <Button variant="gray" onClick={() => setSignUp(true)}>
                  Criar Conta
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

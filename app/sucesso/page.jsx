"use client"

import { useRouter } from "next/navigation"

export default function SucessoPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen">
      {/* Blue Header Section - Uses exact #1f3fbf */}
      <div className="bg-[#1f3fbf] px-6 py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-4xl">
          {/* GestPro Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
                <circle cx="24" cy="24" r="20" stroke="#F59E0B" strokeWidth="3" strokeDasharray="8 4" />
                <circle cx="24" cy="24" r="10" fill="#F59E0B" />
                <path d="M24 14v10l7 7" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-3xl font-bold">
              <span className="text-amber-400">Gest</span>
              <span className="text-white">Pro</span>
            </span>
          </div>
        </div>
      </div>

      {/* Light Gray Background Section */}
      <div className="bg-gray-50 px-4 pb-12 md:px-6">
        <div className="mx-auto -mt-8 max-w-lg rounded-2xl bg-white p-8 shadow-lg md:-mt-12 md:p-10">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Tudo pronto por aqui!</h1>
            <p className="mt-2 text-gray-500">
              A solicitação da empresa <span className="font-medium text-gray-900">sua empresa</span> foi recebida com sucesso.
            </p>
          </div>

          {/* Status Section */}
          <div className="mb-8 rounded-xl border border-gray-200 p-6">
            <div className="mb-4 flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-semibold text-gray-900">Status da Solicitação</h2>
            </div>

            <div className="space-y-4">
              {/* Step 1 - Completed */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Cadastro Enviado</p>
                  <p className="text-sm text-green-600">Recebido agora</p>
                </div>
              </div>

              {/* Step 2 - In Progress */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1f3fbf]">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Análise de Dados</p>
                  <p className="text-sm text-[#1f3fbf]">Em processamento...</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Verificaremos as informações da sua empresa.
                  </p>
                </div>
              </div>

              {/* Step 3 - Pending */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                </div>
                <div>
                  <p className="font-medium text-gray-400">Liberação de Acesso</p>
                  <p className="text-sm text-gray-400">Aguardando aprovação</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Info Box */}
          <div className="mb-8 flex items-start gap-3 rounded-xl border-2 border-[#1f3fbf]/20 bg-[#1f3fbf]/5 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1f3fbf] text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Fique atento ao seu e-mail</p>
              <p className="mt-1 text-sm text-gray-500">
                Assim que aprovado, enviaremos sua{" "}
                <span className="font-medium text-[#1f3fbf]">senha de acesso</span> e os{" "}
                <span className="font-medium text-[#1f3fbf]">dados de pagamento</span> para:{" "}
                <span className="font-medium text-gray-900">seuemail@dominio.com</span>
              </p>
            </div>
          </div>

          {/* Return Button */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1f3fbf] py-4 text-base font-semibold text-white transition-colors hover:bg-[#1a35a3]"
          >
            Voltar para o Início
          </button>
        </div>
      </div>
    </main>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { getResultInterpretation } from "@/lib/constants"

interface ResultCardProps {
  score: number
  maxScore: number
  name: string
}

export function ResultCard({ score, maxScore, name }: ResultCardProps) {
  const percentage = (score / maxScore) * 100
  const result = getResultInterpretation(score)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Meu nome é ${name} e acabei de fazer o Quiz de Análise de Times Comerciais.\n\n` +
      `Minha pontuação foi: ${score} de ${maxScore} pontos (${percentage.toFixed(1)}%)\n` +
      `Resultado: ${result.title}\n\n` +
      "Gostaria de mais informações sobre a consultoria gratuita."
    )
    window.open(`https://wa.me/5571991446316?text=${message}`, "_blank")
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Resultado do Quiz</h2>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-kubo-purple bg-kubo-green/20">
                Sua pontuação
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-kubo-purple">
                {score}/{maxScore} pontos ({percentage.toFixed(1)}%)
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-kubo-green/20">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kubo-green transition-all duration-1000 ease-out"
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${
            percentage >= 80 
              ? "bg-green-500" 
              : percentage >= 53 
              ? "bg-yellow-500" 
              : "bg-red-500"
          }`} />
          <h3 className="text-xl font-semibold text-kubo-purple">{result.title}</h3>
        </div>
        <p className="text-gray-600">{result.description}</p>
      </div>

      <div className="space-y-4">
        <p className="text-center text-gray-600">
          Quer saber como melhorar seus resultados? Agende uma consultoria gratuita!
        </p>
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Iniciar Conversa no WhatsApp
        </Button>
      </div>

      <div className="text-center">
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="text-kubo-purple hover:bg-kubo-purple/5"
        >
          Fazer o Quiz Novamente
        </Button>
      </div>
    </div>
  )
}

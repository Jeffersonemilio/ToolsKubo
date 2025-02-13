"use client"

import { Button } from "@/components/ui/button"

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="text-center space-y-6 max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-kubo-purple mb-2 font-poppins">
        Quiz de Análise de Times Comerciais
      </h1>
      <p className="text-gray-600">
        Avalie a maturidade do seu time comercial e descubra oportunidades de melhoria
        para impulsionar seus resultados.
      </p>
      <Button
        onClick={onStart}
        size="lg"
        className="w-full max-w-md mx-auto mt-8"
      >
        Iniciar Quiz
      </Button>
    </div>
  )
}

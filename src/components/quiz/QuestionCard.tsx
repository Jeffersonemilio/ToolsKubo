"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import * as RadioGroup from "@radix-ui/react-radio-group"

interface Option {
  label: string
  value: string
  points: number
}

interface QuestionCardProps {
  question: string
  options: Option[]
  onAnswer: (points: number) => void
  currentQuestion: number
  totalQuestions: number
}

export function QuestionCard({
  question,
  options,
  onAnswer,
  currentQuestion,
  totalQuestions,
}: QuestionCardProps) {
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    const selectedOption = options.find((opt) => opt.value === selectedValue)
    if (selectedOption) {
      setIsSubmitting(true)
      setTimeout(() => {
        onAnswer(selectedOption.points)
        setSelectedValue("")
        setIsSubmitting(false)
      }, 300)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            Questão {currentQuestion} de {totalQuestions}
          </span>
          <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 ml-4">
            <div
              className="bg-kubo-purple h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(currentQuestion / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 animate-slide-up">
          {question}
        </h2>
      </div>

      <RadioGroup.Root
        className="space-y-4"
        value={selectedValue}
        onValueChange={setSelectedValue}
      >
        {options.map((option, index) => (
          <div
            key={option.value}
            className={`
              quiz-option flex items-center space-x-3 border rounded-lg p-4
              transition-all duration-300 animate-slide-up
              hover:border-kubo-purple/50 hover:bg-kubo-purple/5
              ${selectedValue === option.value ? 'border-kubo-purple bg-kubo-purple/5' : 'border-gray-200'}
            `}
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <RadioGroup.Item
              id={option.value}
              value={option.value}
              className="w-4 h-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kubo-purple focus:ring-offset-2 data-[state=checked]:bg-kubo-purple data-[state=checked]:border-kubo-purple transition-colors"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-white" />
            </RadioGroup.Item>
            <label
              htmlFor={option.value}
              className="flex-grow text-sm font-medium text-gray-700 cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>

      <Button
        onClick={handleSubmit}
        disabled={!selectedValue || isSubmitting}
        className={`
          w-full mt-6 transition-all duration-300
          ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
        `}
        size="lg"
      >
        {currentQuestion === totalQuestions ? "Ver Resultado" : "Próxima Questão"}
      </Button>

      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>
          {Math.round((currentQuestion / totalQuestions) * 100)}% completo
        </span>
        <span>
          {totalQuestions - currentQuestion} {totalQuestions - currentQuestion === 1 ? 'questão' : 'questões'} restantes
        </span>
      </div>
    </div>
  )
}

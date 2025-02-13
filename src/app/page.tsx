"use client"

import { useState } from "react"
import { StartScreen } from "@/components/quiz/StartScreen"
import { QuizForm } from "@/components/quiz/QuizForm"
import { QuestionCard } from "@/components/quiz/QuestionCard"
import { ResultCard } from "@/components/quiz/ResultCard"
import { quizQuestions, MAX_SCORE } from "@/lib/constants"

type QuizState = "start" | "questions" | "form" | "result"

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>("start")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userData, setUserData] = useState({ name: "", whatsapp: "" })

  const handleStart = () => {
    setQuizState("questions")
  }

  const handleAnswer = (points: number) => {
    setScore((prev) => prev + points)
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setQuizState("form")
    }
  }

  const handleFormSubmit = (data: { name: string; whatsapp: string }) => {
    setUserData(data)
    setQuizState("result")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-kubo-purple/5 to-kubo-green/5">
      <div className="container mx-auto py-8">
        {quizState === "start" && (
          <StartScreen onStart={handleStart} />
        )}

        {quizState === "questions" && (
          <div className="bg-white rounded-lg shadow-lg animate-fade-in">
            <QuestionCard
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              onAnswer={handleAnswer}
              currentQuestion={currentQuestion + 1}
              totalQuestions={quizQuestions.length}
            />
          </div>
        )}

        {quizState === "form" && (
          <div className="bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="text-center p-6 border-b">
              <h2 className="text-2xl font-bold text-kubo-purple">
                Excelente! Agora vamos personalizar seu resultado
              </h2>
              <p className="text-gray-600 mt-2">
                Preencha seus dados para receber a análise completa
              </p>
            </div>
            <QuizForm onSubmit={handleFormSubmit} />
          </div>
        )}

        {quizState === "result" && (
          <div className="bg-white rounded-lg shadow-lg animate-fade-in">
            <ResultCard
              score={score}
              maxScore={MAX_SCORE}
              name={userData.name}
            />
          </div>
        )}
      </div>
    </main>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface QuizFormProps {
  onSubmit: (data: { name: string; whatsapp: string }) => void
}

export function QuizForm({ onSubmit }: QuizFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    whatsapp: "",
  })

  const validateForm = () => {
    const newErrors = {
      name: "",
      whatsapp: "",
    }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
      isValid = false
    }

    const whatsappRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/
    if (!whatsappRegex.test(formData.whatsapp)) {
      newErrors.whatsapp = "WhatsApp inválido. Use o formato (XX) XXXXX-XXXX"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 0) {
      // Format: (XX) XXXXX-XXXX
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2")
      value = value.replace(/(\d{5})(\d)/, "$1-$2")
      value = value.slice(0, 15) // Limit to 15 characters (including formatting)
    }
    setFormData({ ...formData, whatsapp: value })
    if (errors.whatsapp) {
      setErrors({ ...errors, whatsapp: "" })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto p-6 animate-fade-in">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 block"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          required
          className={`
            w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-kubo-purple focus:border-transparent
            transition-all duration-200
            ${errors.name ? 'border-red-500' : 'border-gray-300'}
          `}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value })
            if (errors.name) {
              setErrors({ ...errors, name: "" })
            }
          }}
        />
        {errors.name && (
          <p className="text-sm text-red-500 animate-slide-up">{errors.name}</p>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="whatsapp"
          className="text-sm font-medium text-gray-700 block"
        >
          WhatsApp
        </label>
        <input
          type="tel"
          id="whatsapp"
          required
          placeholder="(XX) XXXXX-XXXX"
          className={`
            w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-kubo-purple focus:border-transparent
            transition-all duration-200
            ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'}
          `}
          value={formData.whatsapp}
          onChange={handleWhatsAppChange}
        />
        {errors.whatsapp && (
          <p className="text-sm text-red-500 animate-slide-up">{errors.whatsapp}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full transition-all duration-300 hover:scale-[1.02]"
        size="lg"
      >
        Ver Resultado
      </Button>
    </form>
  )
}

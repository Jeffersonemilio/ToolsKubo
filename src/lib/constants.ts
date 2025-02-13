export const quizQuestions = [
  {
    question: "Como você avalia o nível de definição do perfil do cliente ideal?",
    options: [
      { label: "Muito claro e bem definido", value: "a", points: 5 },
      { label: "Parcialmente definido", value: "b", points: 3 },
      { label: "Pouco ou nada definido", value: "c", points: 1 },
    ],
  },
  {
    question: "O time comercial possui metas mensais claras e desafiadoras?",
    options: [
      { label: "Sim, as metas são bem definidas e acompanhadas", value: "a", points: 5 },
      { label: "Em parte, mas poderiam ser mais específicas", value: "b", points: 3 },
      { label: "Não, não há metas bem estruturadas", value: "c", points: 1 },
    ],
  },
  {
    question: "Como você avalia a estrutura de qualificação dos leads?",
    options: [
      { label: "Estruturada e eficiente", value: "a", points: 5 },
      { label: "Parcialmente estruturada, com espaço para melhorias", value: "b", points: 3 },
      { label: "Pouco estruturada ou inexistente", value: "c", points: 1 },
    ],
  },
  {
    question: "Sua empresa utiliza ferramentas de CRM e automação de forma eficaz?",
    options: [
      { label: "Sim, de maneira integrada e atualizada", value: "a", points: 5 },
      { label: "Em parte, mas com limitações", value: "b", points: 3 },
      { label: "Não utiliza ou utiliza de forma inadequada", value: "c", points: 1 },
    ],
  },
  {
    question: "Qual a frequência de treinamentos e capacitações para o time comercial?",
    options: [
      { label: "Treinamentos constantes e atualizados", value: "a", points: 5 },
      { label: "Treinamentos esporádicos", value: "b", points: 3 },
      { label: "Sem treinamentos regulares", value: "c", points: 1 },
    ],
  },
  {
    question: "Existe um processo contínuo de acompanhamento e feedback sobre o desempenho?",
    options: [
      { label: "Sim, com reuniões regulares e análise de resultados", value: "a", points: 5 },
      { label: "Parcialmente, de forma ocasional", value: "b", points: 3 },
      { label: "Não há acompanhamento sistemático", value: "c", points: 1 },
    ],
  },
  {
    question: "Como está o alinhamento entre as equipes de marketing e vendas?",
    options: [
      { label: "Totalmente integrada e colaborativa", value: "a", points: 5 },
      { label: "Existe colaboração, mas ainda há barreiras", value: "b", points: 3 },
      { label: "Pouca ou nenhuma integração", value: "c", points: 1 },
    ],
  },
  {
    question: "Seu time utiliza dados para orientar decisões e estratégias?",
    options: [
      { label: "Sim, decisões são baseadas em análises de dados", value: "a", points: 5 },
      { label: "Algumas análises são feitas, mas de forma limitada", value: "b", points: 3 },
      { label: "Não há uso efetivo de dados", value: "c", points: 1 },
    ],
  },
  {
    question: "Como você avalia a personalização do atendimento ao cliente?",
    options: [
      { label: "Altamente personalizado", value: "a", points: 5 },
      { label: "Atendimento padrão com algumas adaptações", value: "b", points: 3 },
      { label: "Atendimento genérico", value: "c", points: 1 },
    ],
  },
  {
    question: "Como está a organização do follow-up com os leads?",
    options: [
      { label: "Bem gerenciado, com processos automatizados", value: "a", points: 5 },
      { label: "Gerenciado, mas com oportunidades de melhoria", value: "b", points: 3 },
      { label: "Desorganizado e pouco sistematizado", value: "c", points: 1 },
    ],
  },
  {
    question: "A comunicação entre os membros do time comercial é eficiente?",
    options: [
      { label: "Excelente, com fluxo constante de informações", value: "a", points: 5 },
      { label: "Razoável, mas pode ser aprimorada", value: "b", points: 3 },
      { label: "Ineficiente e desorganizada", value: "c", points: 1 },
    ],
  },
  {
    question: "Existe um planejamento estratégico para a expansão das vendas?",
    options: [
      { label: "Sim, com objetivos claros e prazos definidos", value: "a", points: 5 },
      { label: "Em desenvolvimento, mas ainda incipiente", value: "b", points: 3 },
      { label: "Não há um planejamento definido", value: "c", points: 1 },
    ],
  },
  {
    question: "Como você avalia a eficácia das campanhas de prospecção dos infoprodutos?",
    options: [
      { label: "Altamente eficazes e bem segmentadas", value: "a", points: 5 },
      { label: "Eficazes, mas com espaço para otimização", value: "b", points: 3 },
      { label: "Pouco eficazes ou mal direcionadas", value: "c", points: 1 },
    ],
  },
  {
    question: "A equipe comercial demonstra proatividade na busca por novas oportunidades?",
    options: [
      { label: "Sempre proativa e inovadora", value: "a", points: 5 },
      { label: "Proativa em algumas situações", value: "b", points: 3 },
      { label: "Geralmente reativa", value: "c", points: 1 },
    ],
  },
  {
    question: "Como está o alinhamento entre as estratégias de vendas e as demandas do mercado?",
    options: [
      { label: "Totalmente alinhado e atualizado", value: "a", points: 5 },
      { label: "Parcialmente alinhado, necessitando de ajustes", value: "b", points: 3 },
      { label: "Desalinhado e desatualizado", value: "c", points: 1 },
    ],
  },
]

export const MAX_SCORE = quizQuestions.length * 5 // 15 questions * 5 points max each = 75

export const getResultInterpretation = (score: number) => {
  const percentage = (score / MAX_SCORE) * 100

  if (percentage >= 80) { // 60-75 pontos
    return {
      title: "Estrutura Robusta",
      description: "Seu time comercial apresenta uma estrutura robusta e processos bem definidos. Isso indica que a estratégia de vendas está em um patamar elevado. Continue monitorando e ajustando suas ações para manter o crescimento e, se desejar, aproveite nossa consultoria gratuita para identificar oportunidades de aprimoramento e potencializar seus resultados."
    }
  } else if (percentage >= 53) { // 40-59 pontos
    return {
      title: "Boa Base",
      description: "Você possui uma boa base, mas há áreas que podem ser otimizadas. Identifique os pontos com menor pontuação e foque em melhorias estratégicas. Nossa consultoria gratuita pode ajudar a ajustar esses aspectos e impulsionar o desempenho do seu time comercial."
    }
  } else { // Abaixo de 40 pontos
    return {
      title: "Necessita Revisão",
      description: "É necessário realizar uma revisão profunda na estrutura e nos processos do seu time comercial. Uma abordagem mais estratégica é essencial para transformar os resultados atuais. Considere nossa consultoria gratuita como um primeiro passo para diagnosticar e ajustar os pontos críticos, promovendo um crescimento consistente."
    }
  }
}

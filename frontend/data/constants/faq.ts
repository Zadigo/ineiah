export interface Question {
  question: string
  answer: string
}

export interface FAQSection {
  title: string
  questions: Question[]
}

export const faqList: FAQSection[] = [
  {
    title: 'Rendez-Vous & Réservations',
    questions: [
      {
        question: 'Comment prendre rendez-vous ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      },
      {
        question: 'Puis-je prendre rendez-vous par téléphone ou par message ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      },
      {
        question: 'Quand le planning s’ouvre-t-il ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      },
      {
        question: 'Que faire si aucune date n’est disponible ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      }
    ]
  },
  {
    title: 'Paiement & Acompte',
    questions: [
      {
        question: "Dois-je payer à l'avance ?",
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      },
      {
        question: "Proposez-vous le paiement en plusieurs fois ?",
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      },
      {
        question: "J’ai payé mon acompte, mais je dois annuler. Est-ce remboursable ?",
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      }
    ]
  },
  {
    title: 'Préparation au rendez-vous',
    questions: [
      {
        question: 'Dois-je venir les cheveux lavés ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      },
      {
        question: 'Je ne suis pas sûre de ce que je veux, puis-je venir pour un conseil ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      }
    ]
  },
  {
    title: "Conditions d'âge",
    questions: [
      {
        question: 'Prenez-vous les mineur(e)s ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus tempus velit mi tincidunt auctor mus urna. Condimentum bibendum justo malesuada nostra diam vitae proin.'
      }
    ]
  }
]

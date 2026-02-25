export interface Question {
  question: string
  answer: string
}

export interface FAQSection {
  id: string
  title: string
  questions: Question[]
}

export const faqList: FAQSection[] = [
  {
    id: 'reservations',
    title: 'Rendez-Vous & Réservations',
    questions: [
      {
        question: 'Comment prendre rendez-vous ?',
        answer: 'Vous pouvez prendre rendez-vous directement en ligne via le numéro indiqué sur notre site ou par email.'
      },
      {
        question: 'Puis-je prendre rendez-vous par téléphone ou par message ?',
        answer: 'Oui, vous pouvez également prendre rendez-vous par téléphone ou par message en utilisant les coordonnées fournies sur notre site.'
      }
    ]
  },
  {
    id: 'payment',
    title: 'Paiement & Acompte',
    questions: [
      {
        question: "Dois-je payer à l'avance ?",
        answer: "Oui. Le paiement à l'avance est requis pour confirmer votre rendez-vous. Le montant de l'acompte sera déduit du total de votre service le jour du rendez-vous et s'élève à 30€."
      },
      {
        question: "Proposez-vous le paiement en plusieurs fois ?",
        answer: 'Oui, nous proposons le paiement en 3 fois sans frais pour les services supérieurs à 150€. Veuillez nous contacter pour plus de détails.'
      },
      {
        question: "J’ai payé mon acompte, mais je dois annuler. Est-ce remboursable ?",
        answer: "L'acompte n'est généralement pas remboursable en cas d'annulation. Veuillez consulter nos conditions d'annulation pour plus de détails."
      }
    ]
  },
  {
    id: 'preparation',
    title: 'Préparation au rendez-vous',
    questions: [
      {
        question: 'Dois-je venir les cheveux lavés ?',
        answer: 'Il est préférable de venir les cheveux propres et démêlés pour votre rendez-vous afin de garantir les meilleurs résultats possibles.'
      },
      {
        question: 'Je ne suis pas sûre de ce que je veux, puis-je venir pour un conseil ?',
        answer: 'Oui, vous pouvez venir pour un conseil afin de discuter de vos besoins et de vos préférences avec moi. Le rendez-vous de conseil peut être facturé séparément. Le montant pour une séance de conseil est de 15€.'
      },
      {
        question: 'Dois-je arriver les cheveux attaché ?',
        answer: "Il est recommandé de ne pas attacher vos cheveux pour votre rendez-vous, afin de permettre une meilleure évaluation de la texture et de la condition de vos cheveux. Cependant, assurez-vous qu'ils soient bien démêlés et propres."
      }
    ]
  },
  {
    id: 'age-restrictions',
    title: "Conditions d'âge",
    questions: [
      {
        question: 'Prenez-vous les mineur(e)s ?',
        answer: 'Les mineur(e)s sont les bienvenu(e)s, mais doivent être accompagné(e)s d’un(e) parent ou tuteur(trice) légal(e) qui devra signer une autorisation parentale avant le début du rendez-vous.'
      }
    ]
  }
]

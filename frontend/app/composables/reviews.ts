import type { Nullable } from "~/types"

export type Review = {
  rating: number
  comment: string
  reviewer: {
    name: string
    givenName: string,
    familyName: string,
    title: string
    avatar: Nullable<string>
   }
}

const reviews: Review[] = [
  {
    rating: 5,
    comment: "Cela fait plus de 15 ans que Natacha prend soin de mes cheveux, et je peux dire sans hésitation que je n’ai jamais rencontré une coiffeuse aussi passionnée qu’elle. Elle aime profondément son métier et cela se ressent dans chaque détail : beaucoup d’exigence, un vrai sens du travail bien fait et surtout un immense respect pour ses clientes. Elle maîtrise toutes les textures, des cheveux raides aux plus frisés, et sait sublimer chacune d’entre elles sans jamais les dénaturer. Avant chaque prestation, elle prend le temps d’examiner le cheveu afin d’utiliser des soins parfaitement adaptés. Les produits qu’elle utilise sont de grande qualité, la plupart du temps naturels, ce qui est un vrai plus. Elle a également un côté artistique très appréciable, avec une excellente maîtrise de différentes coiffures adaptées à chaque contexte : quotidien, événement, shooting, cérémonie… Je la recommande à 1000 % !.",
    reviewer: {
      name: "Alexia Ewane",
      givenName: "Alexia",
      familyName: "Ewane",
      title: "-",
      avatar: null
    }
  },
  {
    rating: 5,
    comment: "Natacha est la meilleure coiffeuse que j'ai trouvé pour mes cheveux bouclés ! Au top !",
    reviewer: {
      name: "Nora Raya",
      givenName: "Nora",
      familyName: "Raya",
      title: "-",
      avatar: null
    }
  },
  {
    rating: 5,
    comment: "Je vous recommande vivement de passer entre les mains de Natacha. Cheveux bouclés, je n'ai jamais réussi à trouver la coupe qui allait à mes cheveux jusqu'à ce que Natacha m'encourage à faire une mèche ! Une mèche sur cheveux bouclés !!! Jamais je n'aurai imaginé ça. Je lui ai fait confiance et j'adore !!! J'ai trouvé ma coupe. Merci Natacha",
    reviewer: {
      name: "Pauline Saïdi",
      givenName: "Pauline",
      familyName: "Saïdi",
      title: "-",
      avatar: null
    }
  },
  {
    rating: 5,
    comment: "Une coiffeuse exceptionnelle ! Bien plus qu’un simple rendez-vous coiffure... Elle a des mains en or mais elle est aussi très attentive à nos envies et profondément respectueuse de notre personnalité. Elle sait conseiller avec justesse et subtilité, et son souci du détail fait toute la différence. Sa bonne humeur, son sourire et sa bienveillance rendent chaque moment au salon agréable. On s’y sent écoutée, comprise et chouchoutée… et on en ressort toujours avec le sourire. Une vraie perle 💛",
    reviewer: {
      name: "Aurélie Lo",
      givenName: "Aurélie",
      familyName: "Lo",
      title: "-",
      avatar: null
    }
  }
]

export function useReviewsComposable() {
  const selectedReview = ref<Nullable<Review>>(null)

  function selectReview(review: Nullable<Review>) {
    selectedReview.value = review
  }

  const hasSelection = computed(() => isDefined(selectedReview))

  return {
    reviews,
    selectedReview,
    hasSelection,
    selectReview
  }
}

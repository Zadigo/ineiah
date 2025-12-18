import { businessDetails } from '~/data'

export interface Policy {
  title: string
  titleEn?: string
  content: {
    type: 'paragraph' | 'list' | 'subtitle'
    text?: string
    textEn?: string
    items?: { text: string; textEn?: string }[]
  }[]
}

export async function loadPolicies(): Promise<Policy[]> {
  return [
    {
      title: 'Utilisation des données personnelles',
      titleEn: 'Use of Personal Data',
      content: [
        {
          type: 'paragraph',
          text: "Les données personnelles collectées auprès des utilisateurs ont pour objectif la mise à disposition des services du site web, leur amélioration et le maintien d'un environnement sécurisé. Plus précisément, les utilisations sont les suivantes :",
          textEn: "The personal data collected from users is intended to provide the website's services, improve them, and maintain a secure environment. More specifically, the uses are as follows:"
        },
        {
          type: 'list',
          items: [
            {
              text: "accès et utilisation du site web par l'utilisateur ;",
              textEn: "user access and use of the website;"
            },
            {
              text: "gestion du fonctionnement et optimisation du site web ;",
              textEn: "management of the operation and optimization of the website;"
            },
            {
              text: "organisation des conditions d'utilisation des Services de paiement ;",
              textEn: "organization of the terms of use of Payment Services;"
            },
            {
              text: "vérification, identification et authentification des données transmises par l'utilisateur ;",
              textEn: "verification, identification, and authentication of data transmitted by the user;"
            },
            {
              text: "proposition à l'utilisateur de la possibilité de communiquer avec d'autres utilisateurs du site web ;",
              textEn: "offering the user the possibility to communicate with other users of the website;"
            },
            {
              text: "mise en oeuvre d'une assistance utilisateurs ;",
              textEn: "implementation of user support;"
            },
            {
              text: "personnalisation des services en affichant des publicités en fonction de l'historique de navigation de l'utilisateur, selon ses préférences ;",
              textEn: "personalization of services by displaying advertisements based on the user's browsing history, according to their preferences;"
            },
            {
              text: "prévention et détection des fraudes, malwares (malicious softwares ou logiciels malveillants) et gestion des incidents de sécurité ;",
              textEn: "prevention and detection of fraud, malware (malicious software), and management of security incidents;"
            },
            {
              text: "gestion des éventuels litiges avec les utilisateurs ;",
              textEn: "management of any disputes with users;"
            },
            {
              text: "envoi d'informations commerciales et publicitaires, en fonction des préférences de l'utilisateur.",
              textEn: "sending commercial and advertising information, based on the user's preferences."
            }
          ]
        }
      ]
    },
    {
      title: 'Partage des données personnelles avec des tiers',
      titleEn: 'Sharing Personal Data with Third Parties',
      content: [
        {
          type: 'paragraph',
          text: "Les données personnelles des utilisateurs peuvent être partagées avec des tiers dans les cas suivants :"
        },
        {
          type: 'list',
          items: [
            {
              text: "quand l'utilisateur utilise les services de paiement, pour la mise en oeuvre de ces services, le site web est en relation avec des sociétés bancaires et financières tierces avec lesquelles elle a passé des contrats ; "
            },
            {
              text: "lorsque l'utilisateur publie, dans les zones de commentaires libres du site web, des informations accessibles au public ; "
            },
            {
              text: "quand l'utilisateur autorise le site web d'un tiers à accéder à ses données ;"
            },
            {
              text: "quand le site web recourt aux services de prestataires pour fournir l'assistance utilisateurs, la publicité et les services de paiement. Ces prestataires disposent d'un accès limité aux données de l'utilisateur, dans le cadre de l'exécution de ces prestations, et ont une obligation contractuelle de les utiliser en conformité avec les dispositions de la réglementation applicable en matière protection des données à caractère personnel ;"
            }
          ]
        },
        {
          type: 'paragraph',
          text: "Si la loi l'exige, le site web peut effectuer la transmission de données pour donner suite aux réclamations présentées contre le site web et se conformer aux procédures administratives et judiciaires ;"
        },
        {
          type: 'paragraph',
          text: "Si le site web est impliquée dans une opération de fusion, acquisition, cession d'actifs ou procédure de redressement judiciaire, elle pourra être amenée à céder ou partager tout ou partie de ses actifs, y compris les données à caractère personnel. Dans ce cas, les utilisateurs seraient informés, avant que les données à caractère personnel ne soient transférées à une tierce partie."
        }
      ] 
    },
    {
      title: "Sécurité et confidentialité",
      titleEn: "Security and Confidentiality",
      content: [
        {
          type: 'paragraph',
          text: "Le site web met en oeuvre des mesures organisationnelles, techniques, logicielles et physiques en matière de sécurité du numérique pour protéger les données personnelles contre les altérations, destructions et accès non autorisés. Toutefois, il est à signaler qu'internet n'est pas un environnement complètement sécurisé et le site web ne peut pas garantir la sécurité de la transmission ou du stockage des informations sur internet."
        }
      ]
    },
    {
      title: "Mise en oeuvre des droits des utilisateurs",
      titleEn: "Exercising Users' Rights",
      content: [
        {
          type: 'paragraph',
          text: `En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants, qu'ils peuvent exercer en faisant leur demande à l'adresse suivante : ${businessDetails.address}.`
        },
        {
          type: 'list',
          items: [
            {
              text: "Le droit d'accès : ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant. Dans ce cas, avant la mise en œuvre de ce droit, le site web peut demander une preuve de l'identité de l'utilisateur  afin d'en vérifier l'exactitude."
            },
            {
              text: "le droit de rectification : si les données à caractère personnel détenues par le site web sont inexactes, ils peuvent demander la mise à jour des informations."
            },
            {
              text: "le droit de suppression des données : les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matière de protection des données."  
            },
            {
              text: "le droit à la limitation du traitement : les utilisateurs peuvent de demander au site web de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD."
            },
            {
              text: "le droit de s'opposer au traitement des données : les utilisateurs peuvent s'opposer à ce que ses données soient traitées conformément aux hypothèses prévues par le RGPD."
            },
            {
              text: "le droit à la portabilité : ils peuvent réclamer que le site web leur remette les données personnelles qui lui sont fournies pour les transmettre à un nouveau site web."
            }
          ]
        }
      ]
    },
    {
      title: "Evolution de la présente clause",
      titleEn: "Changes to this Policy",
      content: [
        {
          type: 'paragraph',
          text: "Le site web se réserve le droit de modifier la présente clause de confidentialité à tout moment. Dans ce cas, la nouvelle version sera publiée sur cette même page, avec la date de la dernière mise à jour indiquée en haut de la page. Il est conseillé aux utilisateurs de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications apportées à la présente clause."
        },
        {
          type: 'paragraph',
          text: "Si une modification est apportée à la présente clause de protection des données à caractère personnel, le site web s'engage à publier la nouvelle version sur son site. Le site web informera également les utilisateurs de la modification par messagerie électronique, dans un délai minimum de 15 jours avant la date d'effet."
        },
        {
          type: 'paragraph',
          text: "Si l'utilisateur n'est pas d'accord avec les termes de la nouvelle rédaction de la clause de protection des données à caractère personnel, il a la possibilité de supprimer son compte."
        }
      ]
    }
  ]
}


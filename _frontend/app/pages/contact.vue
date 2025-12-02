<template>
  <section id="contact">
    <base-jumbotron src="/hero/hair4.jpg" lead="Contact" subtitle="Toutes nos informations de contact" />

    <div class="px-5 md:px-10 my-10">
      <div class="max-w-4xl mx-auto">
        <volt-card class="bg-surface-100 shadow-none">
          <template #content>
            <form id="form-contact-us" @submit.prevent>
              <div class="space-y-2">
                <div class="flex justify-between gap-2 mb-2">
                  <volt-input-text id="email" v-model="email" class="w-full" placeholder="Email" />
                  <volt-input-text id="telephone" v-model="telephone" class="w-full" placeholder="Téléphone" />
                </div>
              </div>
              <volt-textarea id="message" v-model="message" class="w-full" placeholder="Que souhaitez-vous me dire ?" rows="10" :auto-resize="false" :style="{ resize: 'none' }" />

              <div class="flex justify-end">
                <volt-button id="submit-contact-us" :disabled="true" class="my-10 place-self-start" rounded @click="handleSendMessage">
                  Soumettre
                </volt-button>
              </div>
            </form>
          </template>
        </volt-card>

        <div class="grid grid-rows-2 gap-2 md:grid-rows-none md:grid-cols-2 md:gap-8">
          <volt-card class="mt-5 bg-surface-100 shadow-none">
            <template #content>
              <img src="/map.jpg" class="rounded-lg" alt="">
            </template>
          </volt-card>

          <volt-card class="mt-5 bg-surface-100 shadow-none">
            <template #content>
              <p class="font-bold uppercase text-primary-500 dark:text-primary-200">Natasha Morel</p>
              <p>{{ businessDetails.address }}</p>

              <p class="font-light mt-5 italic">Du Lundi au Vendredi - Déplacement à domicile</p>

              <div class="space-x-2">
                <a href="tel:+33">
                  <volt-button id="tel-contact-us" class="mt-5" rounded>
                    <Icon name="fa-solid:phone" />
                    Téléphone
                  </volt-button>
                </a>

                <a href="mail:example@gmail.com">
                  <volt-button id="email-contact-us" class="mt-5" rounded>
                    <Icon name="fa-solid:envelope" />
                    Email
                  </volt-button>
                </a>
              </div>

              <div class="inline-flex gap-2 mt-5 shadow-none">
                <a v-for="social in footer.socials" :id="`social-${social.name.toLowerCase()}`" :key="social.name" :href="social.url" target="_blank">
                  <volt-secondary-button size="small" rounded>
                    <icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name}`" class="text-brand-500" size="20" />
                  </volt-secondary-button>
                </a>
              </div>
            </template>
          </volt-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { doc, setDoc } from 'firebase/firestore'
import { businessDetails, footer } from '~/data'

definePageMeta({
  name: 'contact'
})


const email = ref<string>('')
const telephone = ref<string>('')
const message = ref<string>('')

const fireStore = useFirestore()

// Handles sending a message to firebase database
// and eventually to N8N if configured
async function _sendMessage() {
  const contactMessage = {
    email: email.value,
    telephone: telephone.value,
    message: message.value,
    timestamp: new Date().toISOString(),
  }

  try {
    const contactRef = doc(fireStore, 'contact', email.value)
    await setDoc(contactRef, contactMessage)
  } catch (e) {
    console.error(e)
  }

  email.value = ''
  telephone.value = ''
  message.value  = ''
}

const handleSendMessage = useThrottleFn(_sendMessage, 5000)

/**
 * SEO
 */

const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Contact',
  en: 'Contact us'
}

const descriptions: Record<typeof i18n.locale.value, string> = {
  fr: 'Sublime ta singularité',
  en: 'Sublime your uniqueness'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${businessDetails.legalName}`,
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark',
})
</script>

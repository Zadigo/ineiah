<template>
  <section id="contact">
    <BaseJumbotron src="/hero/hair4.jpg" lead="Contact" subtitle="Toutes nos informations de contact" />

    <div class="px-5 md:px-10 my-10">
      <div class="max-w-4xl mx-auto">
        <ShadCard class="bg-brand-brown-500/30 shadow-none">
          <ShadCardContent>
            <form id="form-contact-us" @submit.prevent>
              <div class="space-y-2">
                <div class="flex justify-between gap-2 mb-2">
                  <ShadInput v-model="email" id="email" placeholder="Email" />
                  <ShadInput v-model="telephone" id="telephone" placeholder="Téléphone" />
                </div>
              </div>
              <ShadTextarea v-model="message" id="message" class="p-4 resize-none" placeholder="message" rows="500" />

              <div class="flex justify-end">
                <ShadButton id="submit-contact-us" :disabled="true" class="my-10 place-self-start" @click="handleSendMessage">
                  Soumettre
                </ShadButton>
              </div>
            </form>
          </ShadCardContent>
        </ShadCard>

        <div class="grid grid-rows-2 gap-2 md:grid-rows-none md:grid-cols-2 md:gap-8">
          <ShadCard class="mt-5 bg-brand-brown-500/30 shadow-none">
            <ShadCardContent>
              <img src="/map.jpg" class="rounded-lg" />
            </ShadCardContent>
          </ShadCard>

          <ShadCard class="mt-5 bg-brand-brown-500/30 shadow-none">
            <ShadCardContent>
              <p class="font-bold uppercase text-brand-500">Natasha Morel</p>
              <p>{{ businessDetails.address }}</p>

              <p class="font-light mt-5 italic">Du Lundi au Vendredi - Déplacement à domicile</p>

              <div class="space-x-2">
                <ShadButton id="tel-contact-us" class="mt-5 rounded-full" as-child>
                  <a href="tel:+33">
                    <Icon name="fa-solid:phone" />
                    Téléphone
                  </a>
                </ShadButton>

                <ShadButton id="email-contact-us" class="mt-5 rounded-full" as-child>
                  <a href="mail:example@gmail.com">
                    <Icon name="fa-solid:envelope" />
                    Email
                  </a>
                </ShadButton>
              </div>

              <div class="inline-flex gap-2 mt-5 rounded-full shadow-none">
                <ShadButton v-for="social in footer.socials" :key="social.name" :id="`social-${social.name.toLowerCase()}`" variant="link" as-child>
                  <a :href="social.url" target="_blank">
                    <Icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name}`" class="text-brand-500" size="20" />
                  </a>
                </ShadButton>
              </div>
            </ShadCardContent>
          </ShadCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { doc, setDoc } from 'firebase/firestore'
import { businessDetails, footer } from '~/data'

/**
 * Messaging
 */

const email = ref<string>('')
const telephone = ref<string>('')
const message = ref<string>('')

const fireStore = useFirestore()

/**
 * Handles sending a message to firebase database
 * and eventually to N8N if configured
 */
async function handleSendMessage() {
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

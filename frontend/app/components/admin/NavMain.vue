<template>
  <ShadSidebarGroup>
    <ShadSidebarGroupLabel>Platform</ShadSidebarGroupLabel>

    <ShadSidebarMenu>
      <ShadCollapsible v-for="item in items" :key="item.title" as-child :default-open="item.isActive" class="group/collapsible">
        <ShadSidebarMenuItem>
          <ShadCollapsibleTrigger as-child>
            <ShadSidebarMenuButton :tooltip="item.title">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
              <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </ShadSidebarMenuButton>
          </ShadCollapsibleTrigger>

          <ShadCollapsibleContent>
            <ShadSidebarMenuSub>
              <ShadSidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                <ShadSidebarMenuSubButton as-child>
                  <nuxt-link-locale :to="subItem.url">
                    <span>{{ subItem.title }}</span>
                  </nuxt-link-locale>
                </ShadSidebarMenuSubButton>
              </ShadSidebarMenuSubItem>
            </ShadSidebarMenuSub>
          </ShadCollapsibleContent>
        </ShadSidebarMenuItem>
      </ShadCollapsible>
    </ShadSidebarMenu>
  </ShadSidebarGroup>
</template>


<script setup lang="ts">
import type { LucideIcon } from "lucide-vue-next"
import { ChevronRight } from "lucide-vue-next"

defineProps<{
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}>()
</script>

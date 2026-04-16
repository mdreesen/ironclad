<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import { computed } from 'vue';
// import { useColorMode } from '#imports'; // This import works in Nuxt 3/4 setup scripts

// const colorMode = useColorMode();

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Main',
  to: '/dashboard',
  // icon: 'i-lucide-book-open',
}, {
  label: 'Finances',
  to: '/dashboard/finances',
  // icon: 'mdi-light:account',
}, {
  label: 'Invoices',
  to: '/dashboard/invoices',
  // icon: 'mdi-light:account',
},{
  label: 'Schedule',
  to: '/dashboard/schedule',
  // icon: 'mdi-light:account',
}, {
  label: 'Team',
  // icon: 'i-simple-icons-figma',
  to: '/dashboard/team',
}])
</script>

<template>
  <UHeader mode="slideover" class="border-none bg-transparent">
    <template #title>
      <!-- Logo/Brand Name -->
      <NuxtLink to="/" class="flex items-center text-2xl font-extrabold h-10">
        <!-- <span class="text-2xl font-bold">
          IRONCLAD
        </span> -->
        <NuxtImg class="h-10 w-10 relative rounded-full object-cover" alt="White Raven Logo" format="webp" width="200px"
          height="200px" src="/images/logo.webp" loading="lazy" fetch-priority="low" />
      </NuxtLink>
    </template>

    <UNavigationMenu color="neutral" :items="items" />

    <template #body>
      <UNavigationMenu color="neutral" :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

import { leads, table } from '~/utils/test';
</script>

<template>
  <div class="flex flex-col gap-20">

    <appHero title="Company" title_small="Welcome"  />

    <section class="bg-gray-700/50 p-2 rounded-lg">
      <baseHeaderSection label="OVERVIEW" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="label in ['Open Inquiries', 'Visits Scheduled', 'Active Estimates']" :key="label"
          class="rounded-sm shadow-sm transition-colors">
          <baseCard :label="label"
          description="12" 
          :style="
          `${label.includes('Open Inquiries') && 'bg-gradient-to-br from-blue-600 to-blue-700'}
          ${label.includes('Visits Scheduled') && 'bg-gradient-to-br from-yellow-600 to-yellow-700'}
          ${label.includes('Active Estimates') && 'bg-gradient-to-br from-green-600 to-green-700'}
          `" />
        </div>
      </div>
    </section>

    <section class="bg-gray-700/50 p-2 rounded-lg">
      <baseHeaderSection label="CLIENTS & LEADS" />
      <baseTable :data="table" />
    </section>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

import { leads, table } from '~/utils/test';
</script>

<template>
  <div class="font-sans">

    <header class="flex justify-between items-center mb-12 pb-8 border-b">
      <div>
        <span class="font-medium text-xs uppercase tracking-widest">Company Name</span>
        <baseHeaderSection label="First Name" />
      </div>
      <div class="flex gap-4">
        <baseButton label="New Entry" />
      </div>
    </header>

    <section>
      <baseHeaderSection label="Overview" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="label in ['Open Inquiries', 'Visits Scheduled', 'Active Estimates']" :key="label"
          class="rounded-sm shadow-sm transition-colors">
          <baseCard :label="label" description="12" />
        </div>
      </div>
    </section>

    <section>
      <baseHeaderSection label="Clients" />
      <baseTable :data="table" />
    </section>
  </div>
</template>
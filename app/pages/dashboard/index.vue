<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

import { leads, table } from '~/utils/test';
</script>

<template>
  <div class="p-8 min-h-screen font-sans">
    
    <header class="flex justify-between items-center mb-12 pb-8 border-b">
      <div>
        <span class="font-medium text-xs uppercase tracking-widest">Site Intake Command</span>
        <baseHeader label="Lead Manager" />
      </div>
      <div class="flex gap-4">
        <baseButton label="New Entry" />
        <!-- <button class="bg-zinc-900 hover:bg-zinc-800 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors text-white rounded-sm">New Entry</button> -->
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div v-for="label in ['Open Inquiries', 'Visits Scheduled', 'Active Estimates']" :key="label" class="rounded-sm shadow-sm transition-colors">
        <baseCard :label="label" text="12" />
      </div>
    </div>

    <baseTable :data="table" />
  </div>
</template>
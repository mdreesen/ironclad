<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

// Data for the pulse cards
const stats = ref([
  { label: 'Total Revenue', value: '$142,500', trend: '+12%', color: 'text-zinc-900' },
  { label: 'Net Profit', value: '$58,200', trend: '+8%', color: 'text-emerald-600' },
  { label: 'Outstanding AR', value: '$18,400', trend: '-2%', color: 'text-rose-600' },
  { label: 'Avg. Project Margin', value: '42%', trend: '+4%', color: 'text-zinc-900' }
]);

// Project category breakdown
const margins = ref([
  { name: 'Hahn Built (Structural)', margin: 38, color: 'bg-zinc-900' },
  { name: 'Alexander Homes (Painting)', margin: 52, color: 'bg-orange-600' },
  { name: 'Ironclad (Maintenance)', margin: 45, color: 'bg-zinc-400' }
]);
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto">
      
      <!-- <header class="flex justify-between items-end mb-16">
        <div>
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-2">Business Intelligence</span>
          <h1 class="text-5xl font-black uppercase italic tracking-tighter">Ironclad <span class="text-zinc-200 text-normal font-medium">Fiscal.</span></h1>
        </div>
        <div class="flex gap-4">
          <button class="bg-white border border-zinc-200 px-6 py-4 text-[10px] font-black uppercase tracking-widest rounded-sm">Monthly Report</button>
          <button class="bg-zinc-900 text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest rounded-sm">Tax Export</button>
        </div>
      </header> -->

      <appHero title="Finances" title_small="Business Intelligence" />

      <section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div v-for="stat in stats" :key="stat.label" class="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm">
          <span class="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{{ stat.label }}</span>
          <p class="text-4xl font-black italic tracking-tighter mt-2" :class="stat.color">{{ stat.value }}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-[9px] font-black bg-zinc-100 px-1.5 py-0.5 rounded-sm">{{ stat.trend }}</span>
            <span class="text-[9px] font-medium text-zinc-400 uppercase tracking-wide">vs Prev. Month</span>
          </div>
        </div>
      </section>

      <section>
        <baseChartLine />
        <baseChartBar />
        <baseChartDonut />
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});
/**
 * IRONCLAD FISCAL LEDGER v2
 * DESIGN: SWISS ARCHITECTURAL GRID
 */

const statData = [
  { label: '01 / ANNUAL VOLUME', value: '1,332,400', unit: 'USD' },
  { label: '02 / OUTSTANDING', value: '42,850', unit: 'USD' },
  { label: '03 / NET MARGIN', value: '34.2', unit: '%' }
];

// Data for the 'Flow' Graph (Revenue vs Expenses)
const flowData = [20, 45, 30, 80, 65, 90, 100]; 
</script>

<template>
  <div>

    <appHero label="Finances" />

    <main class="max-w-350 mx-auto">
      
      <section>
        <baseStats :data="statData" />
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-black mb-24">
        
        <div class="col-span-1 lg:col-span-8 p-10 border-l border-black">
          <span class="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-12 block">Trajectory // Volume Growth</span>
          <div class="h-64 w-full relative">
            <svg viewBox="0 0 700 200" class="w-full h-full overflow-visible">
              <line v-for="n in 5" :key="n" x1="0" :y1="n * 40" x2="700" :y2="n * 40" stroke="black" stroke-width="0.5" stroke-dasharray="4" opacity="0.1" />
              <path 
                d="M0 180 L 100 140 L 200 160 L 300 80 L 400 100 L 500 40 L 700 20" 
                fill="none" 
                stroke="black" 
                stroke-width="3" 
              />
              <circle cx="500" cy="40" r="4" fill="black" />
            </svg>
          </div>
        </div>

        <div class="col-span-1 lg:col-span-4 p-10 border-l border-r border-black bg-zinc-50">
          <span class="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-12 block">Allocation // By Sector</span>
          <div class="flex items-end justify-between h-64 gap-2">
            <div v-for="(h, i) in [40, 70, 90, 55]" :key="i" class="flex-1 bg-black group relative" :style="{ height: h + '%' }">
              <span class="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                {{ ['LABOR', 'MAT', 'LOG', 'TAX'][i] }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="col-span-1 lg:col-span-12">
          <div class="flex justify-between items-end mb-8">
            <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 italic-none">Remittance Feed</h2>
            <span class="text-[9px] font-mono text-zinc-400">Total verified transactions: 1,204</span>
          </div>
          <table class="w-full border-t border-black">
            <tbody class="divide-y divide-black/10">
              <tr v-for="n in 4" :key="n" class="hover:bg-zinc-50 transition-colors cursor-pointer group">
                <td class="py-8 text-[10px] font-mono text-zinc-400 w-24">#460{{n}}</td>
                <td class="py-8">
                  <span class="text-xl font-black uppercase tracking-tighter block">Flathead Valley Site {{n}}</span>
                  <span class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">March 2026</span>
                </td>
                <td class="py-8 text-right text-3xl font-black tracking-tighter tabular-nums">
                  $12,500.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
.tabular-nums { font-variant-numeric: tabular-nums; }
</style>
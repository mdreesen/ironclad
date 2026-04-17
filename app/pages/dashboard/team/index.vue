<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});
/**
 * IRONCLAD WORKFORCE HUB
 * DESIGN: DANISH/SWISS STRUCTURALISM
 */

const teams = ref([
      { id: 'T01', name: 'THORNE', role: 'Lead Carpenter', phone: '4065550101', email: 'thorne@ironclad.com', status: 'ON-SITE', site: 'Whitefish' },
      { id: 'V02', name: 'VANE', role: 'Slab Foreman', phone: '4065550102', email: 'vane@ironclad.com', status: 'LOGISTICS', site: 'Kalispell' },
      { id: '3', name: 'Greg', role: 'Slab Foreman', phone: '4065550102', email: 'vane@ironclad.com', status: 'LOGISTICS', site: 'Kalispell' },
      { id: '4', name: 'Brian', role: 'Slab Foreman', phone: '4065550102', email: 'vane@ironclad.com', status: 'LOGISTICS', site: 'Kalispell' },
      { id: '5', name: 'Bill', role: 'Slab Foreman', phone: '4065550102', email: 'vane@ironclad.com', status: 'LOGISTICS', site: 'Kalispell' },
      { id: '6', name: 'Jan', role: 'Slab Foreman', phone: '4065550102', email: 'vane@ironclad.com', status: 'LOGISTICS', site: 'Kalispell' },
      { id: '7', name: 'Frank', role: 'Slab Foreman', phone: '4065550102', email: 'vane@ironclad.com', status: 'LOGISTICS', site: 'Kalispell' },

]);

// Mechanical Dispatch Logic
const dispatchSMS = (phone: string) => window.open(`sms:${phone}`);
const dispatchEmail = (email: string) => window.open(`mailto:${email}`);
</script>

<template>
  <div>
    
    <!-- <header class="max-w-[1400px] mx-auto grid grid-cols-12 border-t-[12px] border-black pt-8 mb-24">
      <div class="col-span-12 md:col-span-8">
        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]">FORCE<br>LOGISTICS</h1>
      </div>
      <div class="col-span-12 md:col-span-4 text-left md:text-right mt-8 md:mt-0 flex flex-col md:justify-end">
        <span class="text-[10px] font-black tracking-[0.3em] uppercase block mb-4 text-zinc-400 italic-none">Active Personnel</span>
        <p class="text-4xl font-black tracking-tighter tabular-nums">04 <span class="text-zinc-200">/ UNITS</span></p>
      </div>
    </header> -->

    <appHero label="Team" />

    <main class="max-w-350 mx-auto flex flex-wrap gap-10">
      
      <div v-for="item in teams" :key="item.name">
            <baseCardTeam :label="item.name" :role="item.role" :phone_number="item.phone" :email="item.email" />
            <!-- <div class="p-10 flex-1">
              <div class="flex justify-between items-start mb-12">
                <span class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest italic-none">{{ member.role }}</span>
                <div class="w-2 h-2 rounded-none" 
                     :class="member.status === 'ON-SITE' ? 'bg-black animate-pulse' : 'bg-zinc-200'"></div>
              </div>
              
              <h3 class="text-5xl font-black uppercase tracking-tighter mb-4">{{ member.name }}</h3>
              <p class="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
                Sector: {{ member.site }} // ID: {{ member.id }}
              </p>
            </div>

            <div class="grid grid-cols-2 border-t border-black bg-zinc-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out no-print">
              <button @click="dispatchSMS(member.phone)" 
                class="p-6 border-r border-black font-black uppercase tracking-[0.2em] text-[9px] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">
                <span>SMS DISPATCH</span>
              </button>
              <button @click="dispatchEmail(member.email)" 
                class="p-6 font-black uppercase tracking-[0.2em] text-[9px] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">
                <span>EMAIL LOG</span>
              </button>
            </div>

            <div class="absolute bottom-4 right-4 text-xs font-light group-hover:opacity-0 transition-opacity">
              COMMAND [+]
            </div> -->

      </div>

    </main>
  </div>
</template>

<style scoped>
.grid { margin-left: -1px; }
.tabular-nums { font-variant-numeric: tabular-nums; }
</style>
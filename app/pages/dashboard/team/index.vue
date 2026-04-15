<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});
const team = ref([
  { 
    id: 1, 
    name: 'Marcus Thorne', 
    role: 'Lead Estimator', 
    specialty: 'Foundations & Steel',
    workload: 85, 
    status: 'On Site',
    email: 'marcus@hahnbuilt.com'
  },
  { 
    id: 2, 
    name: 'Elena Rodriguez', 
    role: 'Project Manager', 
    specialty: 'High-End Finishes',
    workload: 40, 
    status: 'Remote',
    email: 'elena@alexanderhomes.com'
  },
  { 
    id: 3, 
    name: 'Silas Vane', 
    role: 'Site Supervisor', 
    specialty: 'Logistics',
    workload: 95, 
    status: 'Busy',
    email: 'silas@ironclad.io'
  }
]);
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto">
      
      <header class="flex justify-between items-end mb-16">
        <div>
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-2">Personnel Directory</span>
          <baseHeader label="Team" />

        </div>
        <baseButton label="+ Add Member" />
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div v-for="member in team" :key="member.id" class="bg-gray-700/50">
          <baseCardTeam :label="member.name" :description="member.role" :status="member.status" />
          
          <!-- <div class="flex justify-between items-start mb-6">
            <div class="w-16 h-16 bg-zinc-100 rounded-sm border border-zinc-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
              <div class="w-full h-full flex items-center justify-center text-zinc-300 font-black italic text-xl">
                {{ member.name.charAt(0) }}
              </div>
            </div>
            <span :class="getStatusColor(member.status)" class="px-2 py-1 text-[9px] font-black uppercase tracking-widest rounded-sm">
              {{ member.status }}
            </span>
          </div> -->

          <!-- <div class="mb-8">
            <h2 class="text-2xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none">
              {{ member.name }}
            </h2>
            <p class="text-[10px] font-bold text-orange-600 uppercase tracking-widest mt-2">
              {{ member.role }}
            </p>
            <p class="text-xs text-zinc-500 mt-1 italic">{{ member.specialty }}</p>
          </div> -->

          <!-- <div class="mb-8">
            <div class="flex justify-between items-end mb-2">
              <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Workload</span>
              <span class="text-xs font-mono font-bold">{{ member.workload }}%</span>
            </div>
            <div class="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
              <div 
                class="h-full bg-zinc-950 transition-all duration-1000" 
                :style="{ width: member.workload + '%' }"
                :class="member.workload > 90 ? 'bg-rose-600' : 'bg-zinc-950'"
              ></div>
            </div>
          </div> -->

          <!-- <div class="flex gap-4 border-t border-zinc-100 pt-6">
            <button class="flex-1 text-[10px] font-black uppercase tracking-widest py-3 border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all">
              Profile
            </button>
            <button class="flex-1 text-[10px] font-black uppercase tracking-widest py-3 border border-zinc-200 hover:bg-zinc-950 hover:text-white transition-all">
              Message
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { downloadExcel } from '~/utils/export';

definePageMeta({
    layout: 'authenticated',
});

// Mock data for the archive
const invoices = ref([
  { id: 'INV-8821', client: 'James Miller', project: 'Lakeside Estate', amount: 4500, status: 'Paid', date: '2026-04-01' },
  { id: 'INV-9044', client: 'Sarah Chen', project: 'Cabinetry Refinish', amount: 2200, status: 'Overdue', date: '2026-03-25' },
  { id: 'INV-9120', client: 'North Valley Comm.', project: 'Slab Foundation', amount: 12500, status: 'Pending', date: '2026-04-10' },
  { id: 'INV-9201', client: 'Big Sky Bricks', project: 'Showroom Epoxy', amount: 3800, status: 'Paid', date: '2026-04-12' },
]);

const getStatusStyle = (status: string) => {
  switch(status) {
    case 'Paid': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    case 'Overdue': return 'bg-rose-50 text-rose-700 border-rose-100';
    case 'Pending': return 'bg-amber-50 text-amber-700 border-amber-100';
    default: return 'bg-zinc-50 text-zinc-500 border-zinc-100';
  }
};

const totalRevenue = computed(() => invoices.value.reduce((acc, inv) => acc + inv.amount, 0));
const outstanding = computed(() => 
  invoices.value.filter(i => i.status !== 'Paid').reduce((acc, inv) => acc + inv.amount, 0)
);
</script>

<template>
  <div>
    
    <header class="max-w-7xl mx-auto mb-16">
      <div class="flex justify-between items-end mb-12">
        <div>
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-2">Financial Records</span>
          <baseHeader label="INVOICES" />
        </div>
        <baseLink label="Create Invoice" path="/dashboard/invoices/create" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <baseCard label="Total Volume" :description="totalRevenue.toLocaleString()" />

        <baseCard label="Outstanding" :description="`$${outstanding.toLocaleString()}`" />
      </div>
    </header>

    <main class="max-w-7xl mx-auto">
      <div class="border border-zinc-200 rounded-sm shadow-sm overflow-hidden">
        <div class="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/30">
          <input type="text" placeholder="Search by client or project..." class="bg-transparent border-none outline-none text-sm font-medium w-full max-w-md placeholder:text-zinc-300" />
          <div class="flex gap-4">
            <button class="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">Filters</button>
            <baseButton  @click="downloadExcel" label="Export" />
          </div>
        </div>

        <baseTable :data="invoices" />
      </div>
    </main>
  </div>
</template>
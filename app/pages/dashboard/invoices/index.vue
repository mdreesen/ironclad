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

    <main class="max-w-7xl mx-auto bg-gray-700/50">

        <baseTable :data="invoices" />
    </main>
  </div>
</template>
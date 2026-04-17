<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

const invoices = ref([
  {id: '12345', invoice_id: '1234321', date: 'MAR 11', status: 'paid', email: 'james.anderson@example.com', amount: 12594},
  {id: '12344', invoice_id: '1234322', date: 'MAR 11', status: 'failed', email: 'greg.anderson@example.com', amount: 11594},
  {id: '12343', invoice_id: '1234333', date: 'MAR 11', status: 'refunded', email: 'bill.anderson@example.com', amount: 1113594},
  {id: '12342', invoice_id: '1234324', date: 'MAR 11', status: 'paid', email: 'paul.anderson@example.com', amount: 12594},
  {id: '12341', invoice_id: '1234325', date: 'MAR 11', status: 'failed', email: 'tony.anderson@example.com', amount: 2594},
]);
</script>

<template>
  <div>
    
    <!-- <header class="max-w-350 mx-auto grid grid-cols-12 border-t-[12px] border-black pt-8 mb-24">
      <div class="col-span-12 md:col-span-8">
        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]">INVOICE<br>LOGS</h1>
      </div>
      <div class="col-span-12 md:col-span-4 text-left md:text-right mt-8 md:mt-0 flex flex-col md:justify-end">
        <NuxtLink to="/admin/invoices/create" class="inline-block bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] px-8 py-4 hover:bg-zinc-800 transition-colors ml-auto">
          + Initialize New Entry
        </NuxtLink>
      </div>
    </header> -->
    <appHero label="Invoices" actions label_action="+ Create Invoice" path="/dashboard/invoices/create" />
    

    <main class="max-w-350 mx-auto">
      
      <section class="grid grid-cols-1 md:grid-cols-3 border-y border-black mb-16">
        <div class="p-8 border-r border-black last:border-r-0">
          <span class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Total Outstanding</span>
          <p class="text-4xl font-black tracking-tighter tabular-nums">$42,850.00</p>
        </div>
        <div class="p-8 border-r border-black last:border-r-0 bg-zinc-50">
          <span class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Avg. Remit Time</span>
          <p class="text-4xl font-black tracking-tighter tabular-nums">12.4 DAYS</p>
        </div>
        <div class="p-8 border-r border-black last:border-r-0">
          <span class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4">Settled Q1</span>
          <p class="text-4xl font-black tracking-tighter tabular-nums">$184.2k</p>
        </div>
      </section>

      <section>
        <baseTable :data="invoices"/>
      </section>
    </main>
  </div>
</template>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
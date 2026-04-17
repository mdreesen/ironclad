<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

const statData = [
  { label: '01 / ANNUAL VOLUME', value: '1,332,400', unit: 'USD' },
  { label: '02 / OUTSTANDING', value: '42,850', unit: 'USD' },
  { label: '03 / NET MARGIN', value: '34.2', unit: '%' }
];

const profits = [
  { month: 'January', profit: 186 },
  { month: 'February', profit: 305 },
  { month: 'March', profit: 237 },
  { month: 'April', profit: 260 },
  { month: 'May', profit: 209 },
  { month: 'June', profit: 250 }
];

const paidInvoices = [
  {id: 1234, invoice_id: 1234534, company: 'Flathead Valley Site', date: '01/02/2026', amount: '4,200'},
  {id: 1233, invoice_id: 1234534, company: 'Flathead Valley Site', date: '01/02/2026', amount: '84,200'},
  {id: 1232, invoice_id: 1234534, company: 'Flathead Valley Site', date: '01/02/2026', amount: '1,200'},
  {id: 1231, invoice_id: 1234534, company: 'Flathead Valley Site', date: '01/02/2026', amount: '200'}

]
</script>

<template>
  <div>

    <appHero label="Finances" />

    <main class="max-w-350 mx-auto flex flex-col gap-16">

      <section>
        <baseStats :data="statData" />
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-black">

        <div class="col-span-1 lg:col-span-8 p-10 border-l border-black">
          <baseChartLine :data="profits" label="Profits" category_name="profit" name_y="Profits" />
        </div>

        <div class="col-span-1 lg:col-span-4 p-10 border-l border-r border-black bg-zinc-50">
          <baseChartDonut />
        </div>
      </section>

      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12">
<baseLogs :data="paidInvoices" />
      </section>

    </main>
  </div>
</template>

<style scoped>
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
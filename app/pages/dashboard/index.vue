<script setup lang="ts">
import type { Stat } from '~/types/stat'
definePageMeta({
  layout: 'authenticated',
});

const chartData = [
  { month: 'January', clients: 186 },
  { month: 'February', clients: 305 },
  { month: 'March', clients: 237 },
  { month: 'April', clients: 260 },
  { month: 'May', clients: 209 },
  { month: 'June', clients: 250 }
];

const statData: Stat[] = [
  { label: '01 / REVENUE', value: '184,200', unit: 'USD' },
  { label: '02 / PIPELINE', value: '24', unit: 'LEADS' },
  { label: '03 / MARGIN', value: '38.4', unit: '%' }
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

    <appHero label="Welcome<br>name" />

    <main class="max-w-350 mx-auto flex flex-col gap-16">

      <section>
        <baseStats :data="statData" />
      </section>

      <section>
        <baseChartLine :data="chartData" label="Clients" category_name="clients" name_y="Clients" />
      </section>

      <section>
        <baseLogs :data="paidInvoices" />
      </section>

    </main>
  </div>
</template>
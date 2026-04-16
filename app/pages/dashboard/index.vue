<script setup lang="ts">
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
]
</script>

<template>
  <div>

    <appHero />

    <main class="max-w-350 mx-auto">

      <section>
        <baseStats />
      </section>

      <section>
        <baseChartLine :data="chartData" label="Clients" category_name="clients" name_y="Clients" />
      </section>

      <section>
        <baseLogs />
      </section>

    </main>
  </div>
</template>
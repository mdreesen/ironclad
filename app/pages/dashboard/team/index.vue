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

</script>

<template>
  <div>

    <appHero label="Team" />

    <section class="max-w-350 mx-auto flex flex-wrap justify-center gap-10">
      <div v-for="item in teams" :key="item.name">
            <baseCardTeam :label="item.name" :role="item.role" :phone_number="item.phone" :email="item.email" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid { margin-left: -1px; }
.tabular-nums { font-variant-numeric: tabular-nums; }
</style>
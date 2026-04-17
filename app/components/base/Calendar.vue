<script setup lang="ts">
/**
 * IRONCLAD LOGISTICAL CALENDAR
 * DESIGN: DANISH/SWISS STRUCTURALISM
 */

const currentDate = new Date();
const monthName = currentDate.toLocaleString('default', { month: 'long' }).toUpperCase();
const year = currentDate.getFullYear();

// Professional Deployment Data
const deployments = ref([
  { date: 15, client: 'WHITEFISH LAKE', task: 'Slab Pour', team: 'THORNE', status: 'ACTIVE' },
  { date: 16, client: 'KALISPELL COMM.', task: 'Framing', team: 'VANE', status: 'PENDING' },
  { date: 18, client: 'BIGFORK CABIN', task: 'Finishing', team: 'RODRIGUEZ', status: 'DISPATCHED' },
]);

const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
</script>

<template>
    <UCalendar :number-of-months="3" />
</template>

<style scoped>
/* Remove margin gaps for perfect grid alignment */
.grid {
  margin-left: -1px;
}
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
</style>
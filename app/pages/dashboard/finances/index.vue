<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

// Data for the pulse cards
const stats = ref([
    { label: 'Total Revenue', value: '$142,500', trend: '+12%', color: 'text-zinc-900' },
    { label: 'Net Profit', value: '$58,200', trend: '+8%', color: 'text-emerald-600' },
    { label: 'Outstanding AR', value: '$18,400', trend: '-2%', color: 'text-rose-600' },
    { label: 'Avg. Project Margin', value: '42%', trend: '+4%', color: 'text-zinc-900' }
]);
</script>

<template>
    <div class="flex flex-col gap-20">

        <appHero title="Finances" title_small="Business Intelligence" />

        <section class="bg-gray-700/50 p-2 rounded-lg">
            <baseHeaderSection label="OVERVIEW" />
            <div class="flex flex-wrap justify-around">
                <div v-for="stat in stats" :key="stat.label" class="my-8 shadow-sm w-full max-w-lg">
                    <baseCardFinances :label="stat.label" :value="stat.value" :trend="stat.trend" />
                </div>
            </div>
        </section>

        <section>
            <baseChartLine />
            <baseChartBar />
            <baseChartDonut />
        </section>
    </div>
</template>
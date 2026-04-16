<script setup lang="ts">
const metrics = [
    { label: '01 / REVENUE', value: '184,200', unit: 'USD' },
    { label: '02 / PIPELINE', value: '24', unit: 'LEADS' },
    { label: '03 / MARGIN', value: '38.4', unit: '%' }
];
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-12 border-b border-black mb-12">
        <div v-for="(stat, i) in metrics" :key="i"
            class="col-span-1 md:col-span-4 border-t md:border-t-0 border-l border-r border-black md:last:border-r-0 p-6 md:p-8 first:border-t-0 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair">
            <span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-8 md:mb-12">{{ stat.label }}</span>
            <div class="flex items-baseline gap-2">
                <span class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter tabular-nums">{{ stat.value
                    }}</span>
                <span class="text-[10px] font-bold uppercase">{{ stat.unit }}</span>
            </div>
        </div>
    </div>
</template>
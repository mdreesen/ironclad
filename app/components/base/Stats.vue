<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },
});
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-12 border-b border-black">
        <div v-for="(item, i) in data" :key="i"
            class="col-span-1 md:col-span-4 border-t md:border-t-0 border-l border-r border-black md:last:border-r-0 p-6 md:p-8 first:border-t-0 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair">
            <span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-8 md:mb-12">{{ item.label }}</span>
            <div class="flex items-baseline gap-2">
                <span class="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter tabular-nums">{{ item.value
                    }}</span>
                <span class="text-[10px] font-bold uppercase">{{ item.unit }}</span>
            </div>
        </div>
    </div>
</template>
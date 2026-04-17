<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    title_small: {
        type: String,
        default: ''
    }
})
</script>
<template>
    <header class="mx-auto flex justify-between flex-wrap w-full gap-0 border-t-8 md:border-t-12 border-black pt-6 mb-16 md:mb-24">
        <div class="col-span-1 md:col-span-6 mb-8 md:mb-0">
            <h1 class="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]" v-html="label" />
        </div>
        <div
            class="col-span-1 md:col-span-3 text-[10px] font-bold tracking-widest leading-relaxed uppercase mb-4 md:mb-0">
            <p>Flathead Valley Operations</p>
            <p class="text-zinc-400 italic-none">Evergreen // Montana</p>
        </div>
        <div class="col-span-1 md:col-span-3 text-left md:text-right">
            <span class="text-[10px] font-mono border border-black px-2 py-1 inline-block">v.2.0.26</span>
        </div>
    </header>
</template>
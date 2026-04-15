<script setup lang="ts">
const props = defineProps({
    title: {
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
    <header class="max-w-7xl mx-auto">
        <div class="flex justify-between items-end mb-12">
            <div>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                    {{ title_small }}
                </span>
                <baseHeader :label="title" />
            </div>
        </div>
    </header>
</template>
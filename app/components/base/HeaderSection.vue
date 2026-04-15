<script setup lang="ts">
    const props = defineProps({
        label: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h2 class="text-4xl py-4 tracking-tighter font-bold text-normal flex justify-center mb-2" v-html="label"></h2>
</template>
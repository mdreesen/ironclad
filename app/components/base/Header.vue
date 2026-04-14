<script setup lang="ts">
    const props = defineProps({
        label: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h1 class="font-sans text-4xl tracking-tighter font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400 flex justify-center mb-2" v-html="label" />
</template>
<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        // i-lucide-rocket
    },
    style: {
        type: String
    }
})
</script>

<template>
    <UButton :class="`${style}`" :icon="icon" size="md" color="neutral" variant="subtle">{{ label }}</UButton>
</template>
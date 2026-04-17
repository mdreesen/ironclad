<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    },
    style: {
        type: String,
    }
})
</script>

<template>
    <NuxtLink :to="path">
        <UButton :icon="icon" :class="`${style}`" size="md" color="neutral" variant="subtle">{{ label }}</UButton>
    </NuxtLink>
</template>
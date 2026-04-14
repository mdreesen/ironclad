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
    }
})
</script>

<template>
    <NuxtLink :to="path">
        <UButton :icon="icon" size="md" color="neutral" variant="solid">{{ label }}</UButton>
    </NuxtLink>
</template>
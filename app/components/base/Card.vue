<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <UCard>
        <template #header>
            {{ label }}
        </template>

        {{ description }}
    </UCard>
</template>
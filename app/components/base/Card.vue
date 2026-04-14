<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    text: {
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

        {{ text }}
    </UCard>
</template>
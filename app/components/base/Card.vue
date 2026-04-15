<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <UCard class="bg-gray-700/50 text-center">
        <template #header>
            {{ label }}
        </template>

        <div>
            <div>{{ description }}</div>
            <span>{{ status }}</span>
        </div>
    </UCard>
</template>
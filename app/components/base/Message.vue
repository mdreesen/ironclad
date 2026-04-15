<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    message_type: {
        type: String,
        default: 'sms',
        required: true
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <a :href="`${message_type}:${phone_number}`">
        <UButton :icon="icon" size="md" color="neutral" variant="subtle">{{ label }}</UButton>
    </a>

</template>
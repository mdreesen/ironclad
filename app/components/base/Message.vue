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
        <UButton :icon="icon" size="md" color="neutral" variant="subtle" class="p-6 font-black uppercase tracking-[0.2em] text-[9px] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">{{ label }}</UButton>
    </a>

</template>
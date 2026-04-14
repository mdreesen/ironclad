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
    },
    message: {
        type: String,
        default: ''
    },
    phone_number: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <UCard class="bg-gray-700/50">
        <template #header>
            {{ label }}
        </template>

        <div>
            <div>{{ description }}</div>
            <span>{{ status }}</span>
        </div>

        <template #footer>
            <div class="flex justify-around">
                <baseMessage label="message" message_type="sms" :phone_number="phone_number" />
                <baseMessage label="Call" message_type="tel" :phone_number="phone_number" />
            </div>
        </template>
    </UCard>
</template>
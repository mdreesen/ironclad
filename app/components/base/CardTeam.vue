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
    <UCard class="bg-gray-700/50 divide-none">
        <template #header>
            <spn class="text-xl">{{ label }}</spn>
        </template>

        <div>
            <div>{{ description }}</div>
            <!-- <span class="text-sm italic text-blue-500 bg-blue-700/50 p-2 rounded">{{ status }}</span> -->
        </div>

        <template #footer>
            <div class="flex justify-around">
                <baseMessage icon="lucide:smartphone" label="Call" message_type="tel" :phone_number="phone_number" />
                <baseMessage icon="lucide:message-circle" label="message" message_type="sms" :phone_number="phone_number" />
            </div>
        </template>
    </UCard>
</template>
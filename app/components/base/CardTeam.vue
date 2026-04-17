<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: ''
    },
    phone_number: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    }
})
</script>

<template>
  <UPageCard
    :title="label"
    :description="role"
    orientation="vertical"
    spotlight
    spotlight-color="primary"
  >
     <div class="flex gap-4">
        <baseMessage label="Text" message_type="sms" :phone_number="phone_number" />
        <baseMessage label="Call" message_type="tel" :phone_number="phone_number" />
        <baseMessage label="Email" message_type="mailto" :phone_number="email" />
     </div>
  </UPageCard>
</template>
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
})
</script>

<template>
    <a 
    :href="`${message_type}:${phone_number}`"
    class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-2.5 py-1.5 text-sm gap-1.5 text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted"
  >
    {{ label }}
  </a>
</template>
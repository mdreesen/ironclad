<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        default: ''
    },
    trend: {
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
    <UCard class="bg-gray-700/50 text-center">
        <template #header>
            <span class="text-lg font-bold">{{ label }}</span>
        </template>

        <div>
            <div class="text-4xl tracking-tighter">{{ value }}</div>
        </div>

        <template #footer>
            <div class="flex justify-around">
                <span class="text-[9px]">{{ trend ? `${trend} from last month` : '' }}</span>
            </div>
        </template>
    </UCard>
</template>
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
    icon: {
        type: String,
        default: '',
    },
    style: {
        type: String,
    }
})
</script>

<template>
    <UCard :class="`${style} text-center divide-none`">
        <template #header>
            <baseIcon v-if="props.icon" :iconName="props.icon" />

            {{ label }}
        </template>

        <div class="justify-center items-center text-2xl font-extrabold text-white">
            <div>{{ description }}</div>
            <span>{{ status }}</span>
        </div>

        <template #footer></template>
    </UCard>
</template>
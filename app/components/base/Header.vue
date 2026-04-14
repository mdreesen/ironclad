<script setup lang="ts">
    const props = defineProps({
        label: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h1 class="text-5xl font-black uppercase italic tracking-tighter" v-html="label" />
</template>
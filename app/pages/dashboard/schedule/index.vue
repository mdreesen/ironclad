<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});
</script>

<template>
    <appHero label="Calendar" />
    <section>
        <baseCalendar />
    </section>
</template>
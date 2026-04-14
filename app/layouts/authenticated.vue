<script setup lang="ts">
const route = useRoute();

useHead({
    meta: [{ property: 'og:title', content: `Ascend - ${route.meta.title}` }],
})

</script>

<template>
    <main class="p-8 min-h-screen">
        <baseNavigation />
        <slot />
    </main>
</template>
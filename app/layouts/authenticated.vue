<script setup lang="ts">
const route = useRoute();

useHead({
    meta: [{ property: 'og:title', content: `Ascend - ${route.meta.title}` }],
})

</script>

<template>
    <div class="flex w-full">
        <baseNavigation />
        <main class="w-full">
            <slot />
        </main>
    </div>
</template>
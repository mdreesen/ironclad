<script setup lang="ts">
const route = useRoute();

useHead({
    meta: [{ property: 'og:title', content: `Ascend - ${route.meta.title}` }],
})

</script>

<template>
    <div class="min-h-screen">
        <baseNavigation />
        <main>
            <slot />
        </main>
    </div>
</template>
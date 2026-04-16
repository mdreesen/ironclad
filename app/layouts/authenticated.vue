<script setup lang="ts">
const route = useRoute();

useHead({
    meta: [{ property: 'og:title', content: `Ascend - ${route.meta.title}` }],
})

</script>

<template>
    <div>
        <baseNavigation />
        <main class="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white p-4 sm:p-8 lg:p-12">
            <slot />
        </main>
    </div>
</template>
<template>
    <div>
        <span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-6">Personnel Logs</span>
        <div class="space-y-0 border-t border-black">
            <div v-for="n in 4" :key="n"
                class="py-4 border-b border-black flex justify-between items-center group cursor-pointer hover:bg-zinc-50 px-2 transition-colors">
                <span class="text-[11px] font-bold uppercase tracking-tight">Active Project 0{{ n }}</span>
                <span class="text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">→ VIEW</span>
            </div>
        </div>
    </div>
</template>
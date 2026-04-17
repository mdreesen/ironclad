<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Array,
        default: () => [],
        required: true,
    }
});
</script>

<template>
        <div class="col-span-1 lg:col-span-12">
          <div class="flex justify-between items-end mb-8">
            <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 italic-none">Recent Projects</h2>
            <span class="text-[9px] font-mono text-zinc-400">Total verified transactions: 1,204</span>
          </div>
          <table class="w-full border-t border-black">
            <tbody class="divide-y divide-black/10">
              <tr v-for="item in data" :key="item.id" class="hover:bg-zinc-50 transition-colors cursor-pointer group">
                <td class="py-8 text-[10px] font-mono text-zinc-400 w-24">#460{{ item.invoice_id }}</td>
                <td class="py-8">
                  <span class="text-xl font-black uppercase tracking-tighter block">{{ item.company }}</span>
                  <span class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{{ item.date }}</span>
                </td>
                <td class="py-8 text-right text-3xl font-black tracking-tighter tabular-nums">
                  ${{ item.amount }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
</template>
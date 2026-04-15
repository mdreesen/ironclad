<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Invoice } from '~/types/invoice';
// 1. Reactive State for Customization
const settings = ref({
  companyName: 'Company',
  accentColor: '#18181b', // Zinc-950
  showLogo: true,
  terms: 'Standard Terms: Net 15. All coating systems verified against technical specifications.',
  currency: 'USD'
});

const lineItems = ref([]);

const referenceNumber = computed(() => Math.floor(Date.now() / 100000));

const subtotal = computed(() => lineItems.value.reduce((acc, item) => acc + (item.qty * item.rate), 0));

// 2. Methods
const addItem = () => lineItems.value.push({ description: '', qty: 1, rate: 0 });
const removeItem = (index: number) => lineItems.value.splice(index, 1);
const printInvoice = () => window.print();
</script>

<template>
  <div class="flex flex-col gap-20 lg:flex-row min-h-screen text-zinc-800">
    <section class="p-2 overflow-y-auto">
      <div class="lg:w-80 bg-white border-r rounded-sm border-zinc-200 p-8 print:hidden">
        <h3 class="text-xs font-black uppercase tracking-widest text-zinc-800 mb-8">Branding Controls</h3>

        <div class="space-y-6">
          <div>
            <label class="text-[10px] font-bold uppercase text-zinc-800 block mb-2">Company Name</label>
            <input v-model="settings.companyName" class="w-full border border-zinc-200 p-2 text-sm rounded-sm" />
          </div>

          <div>
            <label class="text-[10px] font-bold uppercase text-zinc-800 block mb-2">Accent Color</label>
            <input type="color" v-model="settings.accentColor"
              class="w-full h-10 border border-zinc-200 p-1 rounded-sm cursor-pointer" />
          </div>

          <div>
            <label class="text-[10px] font-bold uppercase text-zinc-800 block mb-2">Legal Terms</label>
            <textarea v-model="settings.terms" rows="4"
              class="w-full border border-zinc-200 p-2 text-xs rounded-sm"></textarea>
          </div>

          <button @click="printInvoice"
            class="w-full bg-zinc-950 text-white py-4 text-xs font-black uppercase tracking-widest rounded-sm shadow-lg hover:bg-zinc-800 transition-all">
            Generate PDF
          </button>


          <baseLink label="Cancel" path="/dashboard/invoices" />

        </div>
      </div>
    </section>

    <section class="flex-1 p-2 md:p-12 lg:p-20 overflow-y-auto">
      <div
        class="max-w-4xl mx-auto bg-white shadow-2xl p-4 print:shadow-none md:p-16 rounded-sm min-h-264 flex flex-col">

        <header class="flex justify-between items-start mb-20">
          <div class="h-16"></div>

          <div class="text-right">
            <h2 class="text-xl font-black uppercase italic tracking-tight" :style="{ color: settings.accentColor }">
              {{ settings.companyName }}
            </h2>
            <p class="text-xs text-zinc-800 uppercase font-medium mt-1">Flathead Valley, MT</p>
          </div>
        </header>

        <div class="mb-16">
          <h1 class="text-6xl font-black uppercase italic tracking-tighter text-zinc-950">
            Invoice<span class="text-zinc-800">.</span>
          </h1>
          <p class="text-[10px] text-zinc-800 mt-2 uppercase tracking-[0.3em]">Ref: #{{ referenceNumber }}</p>
        </div>

        <div class="grow">
          <table class="w-full text-left">
            <thead class="border-b-2 border-zinc-900">
              <tr>
                <th class="py-4 text-[10px] font-black uppercase tracking-widest">Description</th>
                <th class="py-4 text-[10px] font-black uppercase tracking-widest text-right w-32">Amount</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-100">
              <tr v-for="(item, index) in lineItems" :key="index" class="group">
                <td class="py-6 pr-4">
                  <input v-model="item.description" placeholder="Project milestone..."
                    class="w-full bg-transparent outline-none font-bold uppercase italic tracking-tight text-zinc-900" />
                </td>
                <td class="py-6 text-right">
                  <div class="flex items-center justify-end gap-2">
                    <span class="text-sm">$</span>
                    <input v-model.number="item.rate" type="number"
                      class="w-24 text-right bg-transparent outline-none text-sm font-bold" />
                    <button @click="removeItem(index)"
                      class="print:hidden text-zinc-800 hover:text-red-500 ml-4">×</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <button @click="addItem"
            class="print:hidden mt-8 text-[10px] font-black uppercase tracking-widest text-zinc-800 hover:text-zinc-950 transition-colors">
            + Add Line Item
          </button>
        </div>

        <footer class="mt-20 border-t border-zinc-200 pt-12">
          <div class="flex justify-between items-end">
            <div class="max-w-xs">
              <span class="text-[10px] font-bold uppercase text-zinc-800 tracking-widest block mb-4">Terms &
                Conditions</span>
              <p class="text-[10px] text-zinc-800 leading-relaxed uppercase font-medium">{{ settings.terms }}</p>
            </div>
            <div class="text-right">
              <span class="text-[10px] font-bold uppercase text-zinc-800 tracking-widest">Total Due</span>
              <p class="text-5xl font-black uppercase italic tracking-tighter mt-2"
                :style="{ color: settings.accentColor }">
                ${{ subtotal.toLocaleString() }}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<style scoped>
@media print {
  aside {
    display: none !important;
  }

  section {
    padding: 0 !important;
    background: white !important;
  }

  .max-w-4xl {
    max-width: 100% !important;
    border: none !important;
    box-shadow: none !important;
  }
}

/* Chrome/Safari fix for inputs in print */
input {
  border: none !important;
}
</style>
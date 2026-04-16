<script setup lang="ts">
/**
 * IRONCLAD INVOICE ARCHITECT
 * DESIGN: DANISH/SWISS MINIMALISM
 */

const invoice = ref({
  number: '2026-001',
  date: new Date().toISOString().split('T')[0],
  client: '',
  project: '',
  items: [{ description: '', qty: 1, rate: 0 }]
});

// CALCULATIONS
const addItem = () => invoice.value.items.push({ description: '', qty: 1, rate: 0 });
const subtotal = computed(() => invoice.value.items.reduce((acc, item) => acc + (item.qty * item.rate), 0));

// UTILITY COMMANDS
const printInvoice = () => window.print();

const emailInvoice = async () => {
  // Logic to trigger your GhostForm mailer
  console.log("Dispatching to client...");
};

const triggerPayment = async () => {
  try {
    const response = await $fetch('/api/stripe/', {
      method: 'POST',
      body: {
        amount: subtotal.value,
        invoiceNumber: invoice.value.number,
        clientName: invoice.value.client
      }
    });

    if (response.url) {
      // Redirect the user to Stripe's secure hosted page
      window.location.href = response.url;
    }
  } catch (e) {
    console.error("Payment initialization failed", e);
    alert("Could not initialize Stripe session.");
  }
};
</script>

<template>
  <div class="min-h-screen bg-white text-black font-sans p-6 lg:p-12 selection:bg-black selection:text-white">
    
    <header class="max-w-300 mx-auto grid grid-cols-12 border-t-12 border-black pt-8 mb-24">
      <div class="col-span-12 md:col-span-8">
        <h1 class="text-6xl md:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]">NEW<br>INVOICE</h1>
      </div>
      <div class="col-span-12 md:col-span-4 text-left md:text-right mt-8 md:mt-0">
        <span class="text-[10px] font-black tracking-[0.3em] uppercase block mb-4 text-zinc-400">Reference ID</span>
        <input v-model="invoice.number" class="text-4xl font-black uppercase tracking-tighter w-full md:text-right bg-transparent border-none focus:ring-0 p-0" />
      </div>
    </header>

    <main class="max-w-300 mx-auto">
      
      <section class="grid grid-cols-1 md:grid-cols-2 border-t border-black mb-24">
        <div class="p-10 border-b md:border-b-0 border-x border-black">
          <label class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-6">01 / Recipient</label>
          <input v-model="invoice.client" placeholder="CLIENT NAME" class="text-2xl font-black uppercase tracking-tighter w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-200" />
          <input v-model="invoice.project" placeholder="PROJECT SITE" class="text-sm font-bold uppercase tracking-widest w-full bg-transparent border-none focus:ring-0 p-0 mt-4 placeholder:text-zinc-300" />
        </div>
        
        <div class="p-10 border-b md:border-b-0 border-r border-black">
          <label class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-6">02 / Logistics</label>
          <input type="date" v-model="invoice.date" class="text-2xl font-black uppercase tracking-tighter w-full bg-transparent border-none focus:ring-0 p-0" />
          <p class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mt-4">Net 30 Terms Apply</p>
        </div>
      </section>

      <section class="mb-24">
        <div class="grid grid-cols-12 border-y border-black bg-zinc-50 p-4">
          <div class="col-span-6 text-[9px] font-black uppercase tracking-widest">Description</div>
          <div class="col-span-2 text-[9px] font-black uppercase tracking-widest text-center">Qty</div>
          <div class="col-span-2 text-[9px] font-black uppercase tracking-widest text-right">Rate</div>
          <div class="col-span-2 text-[9px] font-black uppercase tracking-widest text-right">Total</div>
        </div>

        <div v-for="(item, i) in invoice.items" :key="i" class="grid grid-cols-12 border-b border-black py-8 px-4 group hover:bg-zinc-50 transition-colors">
          <div class="col-span-6">
            <input v-model="item.description" placeholder="SERVICE DESCRIPTION" class="text-lg font-black uppercase tracking-tighter w-full bg-transparent border-none focus:ring-0 p-0" />
          </div>
          <div class="col-span-2 text-center">
            <input type="number" v-model="item.qty" class="text-lg font-black text-center w-full bg-transparent border-none focus:ring-0 p-0 tabular-nums" />
          </div>
          <div class="col-span-2 text-right">
            <input type="number" v-model="item.rate" class="text-lg font-black text-right w-full bg-transparent border-none focus:ring-0 p-0 tabular-nums" />
          </div>
          <div class="col-span-2 text-right text-lg font-black tabular-nums">
            {{ (item.qty * item.rate).toLocaleString() }}
          </div>
        </div>

        <button @click="addItem" class="mt-8 text-[10px] font-black uppercase tracking-[0.3em] border border-black px-6 py-3 hover:bg-black hover:text-white transition-all">
          + Add Line Item
        </button>
      </section>

      <footer class="mt-24">
        <div class="grid grid-cols-12 border-t-4 border-black pt-8 mb-16">
          <div class="col-span-12 md:col-span-8">
             <p class="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em] max-w-xs leading-relaxed">
               All payments are due within 30 days. Ironclad reserves the right to apply late fees to overdue structural and finishing accounts.
             </p>
          </div>
          <div class="col-span-12 md:col-span-4 text-left md:text-right mt-6 md:mt-0">
            <span class="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Grand Total (USD)</span>
            <p class="text-7xl font-black tracking-tighter tabular-nums leading-none mt-4">{{ subtotal.toLocaleString() }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 border border-black no-print">
          <button @click="printInvoice" 
            class="p-8 border-b md:border-b-0 md:border-r border-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black hover:text-white transition-colors flex justify-between items-center group">
            01 / Generate PDF 
            <span class="text-lg group-hover:-translate-y-1 transition-transform">↓</span>
          </button>
          
          <button @click="emailInvoice" 
            class="p-8 border-b md:border-b-0 md:border-r border-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black hover:text-white transition-colors flex justify-between items-center group">
            02 / Dispatch Lead
            <span class="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button @click="triggerPayment" 
            class="p-8 font-black uppercase tracking-[0.3em] text-[10px] bg-zinc-50 hover:bg-black hover:text-white transition-all flex justify-between items-center relative group">
            03 / Instant Remit
            <span class="text-[8px] font-mono border border-black px-2 py-1 group-hover:border-white">STRIPE</span>
          </button>
        </div>
      </footer>
    </main>
  </div>
</template>

<style scoped>
/* TABULAR NUMS ENSURE VERTICAL ALIGNMENT IN SWISS DESIGN */
.tabular-nums {
  font-variant-numeric: tabular-nums;
}

/* PRINT OPTIMIZATION */
@media print {
  .no-print, button, input::placeholder {
    display: none !important;
  }
  
  .min-h-screen {
    padding: 0 !important;
  }

  header {
    margin-bottom: 2rem !important;
  }

  main {
    max-width: 100% !important;
  }

  input {
    border: none !important;
    outline: none !important;
  }
}
</style>
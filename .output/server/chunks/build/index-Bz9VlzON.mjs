import { _ as __nuxt_component_0 } from './Hero-CEFoIgsn.mjs';
import { _ as __nuxt_component_3 } from './Table-C8GoxT2U.mjs';
import { useSSRContext, defineComponent, ref, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './Badge-iOvDsVIk.mjs';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invoices = ref([
      { id: "12345", invoice_id: "1234321", date: "MAR 11", status: "paid", email: "james.anderson@example.com", amount: 12594 },
      { id: "12344", invoice_id: "1234322", date: "MAR 11", status: "failed", email: "greg.anderson@example.com", amount: 11594 },
      { id: "12343", invoice_id: "1234333", date: "MAR 11", status: "refunded", email: "bill.anderson@example.com", amount: 1113594 },
      { id: "12342", invoice_id: "1234324", date: "MAR 11", status: "paid", email: "paul.anderson@example.com", amount: 12594 },
      { id: "12341", invoice_id: "1234325", date: "MAR 11", status: "failed", email: "tony.anderson@example.com", amount: 2594 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseTable = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3da23c6e>`);
      _push(ssrRenderComponent(_component_appHero, {
        label: "Invoices",
        actions: "",
        label_action: "+ Create Invoice",
        path: "/dashboard/invoices/create"
      }, null, _parent));
      _push(`<main class="max-w-350 mx-auto" data-v-3da23c6e><section class="grid grid-cols-1 md:grid-cols-3 border-y border-black mb-16" data-v-3da23c6e><div class="p-8 border-r border-black last:border-r-0" data-v-3da23c6e><span class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4" data-v-3da23c6e>Total Outstanding</span><p class="text-4xl font-black tracking-tighter tabular-nums" data-v-3da23c6e>$42,850.00</p></div><div class="p-8 border-r border-black last:border-r-0 bg-zinc-50" data-v-3da23c6e><span class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4" data-v-3da23c6e>Avg. Remit Time</span><p class="text-4xl font-black tracking-tighter tabular-nums" data-v-3da23c6e>12.4 DAYS</p></div><div class="p-8 border-r border-black last:border-r-0" data-v-3da23c6e><span class="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-4" data-v-3da23c6e>Settled Q1</span><p class="text-4xl font-black tracking-tighter tabular-nums" data-v-3da23c6e>$184.2k</p></div></section><section data-v-3da23c6e>`);
      _push(ssrRenderComponent(_component_baseTable, { data: unref(invoices) }, null, _parent));
      _push(`</section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/invoices/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3da23c6e"]]);

export { index as default };
//# sourceMappingURL=index-Bz9VlzON.mjs.map

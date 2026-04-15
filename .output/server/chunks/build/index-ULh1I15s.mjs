import { _ as __nuxt_component_0 } from './Card-Dw3ko20Y.mjs';
import { _ as __nuxt_component_1 } from './Link-Dm0nPHYS.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './Table-EqLVQtts.mjs';
import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './Badge-CUSlNkxB.mjs';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invoices = ref([
      { id: "INV-8821", client: "James Miller", project: "Lakeside Estate", amount: 4500, status: "Paid", date: "2026-04-01" },
      { id: "INV-9044", client: "Sarah Chen", project: "Cabinetry Refinish", amount: 2200, status: "Overdue", date: "2026-03-25" },
      { id: "INV-9120", client: "North Valley Comm.", project: "Slab Foundation", amount: 12500, status: "Pending", date: "2026-04-10" },
      { id: "INV-9201", client: "Big Sky Bricks", project: "Showroom Epoxy", amount: 3800, status: "Paid", date: "2026-04-12" }
    ]);
    const totalRevenue = computed(() => invoices.value.reduce((acc, inv) => acc + inv.amount, 0));
    const outstanding = computed(
      () => invoices.value.filter((i) => i.status !== "Paid").reduce((acc, inv) => acc + inv.amount, 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_baseLink = __nuxt_component_1;
      const _component_baseCard = __nuxt_component_2;
      const _component_baseTable = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="max-w-7xl mx-auto mb-16"><div class="flex justify-between items-end mb-12"><div><span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-2">Financial Records</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { label: "INVOICES" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_baseLink, {
        label: "Create Invoice",
        path: "/dashboard/invoices/create"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6">`);
      _push(ssrRenderComponent(_component_baseCard, {
        label: "Total Volume",
        description: unref(totalRevenue).toLocaleString()
      }, null, _parent));
      _push(ssrRenderComponent(_component_baseCard, {
        label: "Outstanding",
        description: `$${unref(outstanding).toLocaleString()}`
      }, null, _parent));
      _push(`</div></header><main class="max-w-7xl mx-auto bg-gray-700/50">`);
      _push(ssrRenderComponent(_component_baseTable, { data: unref(invoices) }, null, _parent));
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/invoices/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ULh1I15s.mjs.map

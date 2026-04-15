import { _ as __nuxt_component_1 } from './Link-Dm0nPHYS.mjs';
import { defineComponent, mergeProps, useSSRContext, ref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Invoice",
  __ssrInlineRender: true,
  setup(__props) {
    const settings = ref({
      companyName: "Company",
      accentColor: "#18181b",
      // Zinc-950
      showLogo: true,
      terms: "Standard Terms: Net 15. All coating systems verified against technical specifications.",
      currency: "USD"
    });
    const lineItems = ref([]);
    const referenceNumber = computed(() => Math.floor(Date.now() / 1e5));
    const subtotal = computed(() => lineItems.value.reduce((acc, item) => acc + item.qty * item.rate, 0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-20 lg:flex-row min-h-screen text-zinc-800" }, _attrs))} data-v-c9d331a1><section class="p-2 overflow-y-auto" data-v-c9d331a1><div class="lg:w-80 bg-white border-r rounded-sm border-zinc-200 p-8 print:hidden" data-v-c9d331a1><h3 class="text-xs font-black uppercase tracking-widest text-zinc-800 mb-8" data-v-c9d331a1>Branding Controls</h3><div class="space-y-6" data-v-c9d331a1><div data-v-c9d331a1><label class="text-[10px] font-bold uppercase text-zinc-800 block mb-2" data-v-c9d331a1>Company Name</label><input${ssrRenderAttr("value", settings.value.companyName)} class="w-full border border-zinc-200 p-2 text-sm rounded-sm" data-v-c9d331a1></div><div data-v-c9d331a1><label class="text-[10px] font-bold uppercase text-zinc-800 block mb-2" data-v-c9d331a1>Accent Color</label><input type="color"${ssrRenderAttr("value", settings.value.accentColor)} class="w-full h-10 border border-zinc-200 p-1 rounded-sm cursor-pointer" data-v-c9d331a1></div><div data-v-c9d331a1><label class="text-[10px] font-bold uppercase text-zinc-800 block mb-2" data-v-c9d331a1>Legal Terms</label><textarea rows="4" class="w-full border border-zinc-200 p-2 text-xs rounded-sm" data-v-c9d331a1>${ssrInterpolate(settings.value.terms)}</textarea></div><button class="w-full bg-zinc-950 text-white py-4 text-xs font-black uppercase tracking-widest rounded-sm shadow-lg hover:bg-zinc-800 transition-all" data-v-c9d331a1> Generate PDF </button>`);
      _push(ssrRenderComponent(_component_baseLink, {
        label: "Cancel",
        path: "/dashboard/invoices"
      }, null, _parent));
      _push(`</div></div></section><section class="flex-1 p-2 md:p-12 lg:p-20 overflow-y-auto" data-v-c9d331a1><div class="max-w-4xl mx-auto bg-white shadow-2xl p-4 print:shadow-none md:p-16 rounded-sm min-h-264 flex flex-col" data-v-c9d331a1><header class="flex justify-between items-start mb-20" data-v-c9d331a1><div class="h-16" data-v-c9d331a1></div><div class="text-right" data-v-c9d331a1><h2 class="text-xl font-black uppercase italic tracking-tight" style="${ssrRenderStyle({ color: settings.value.accentColor })}" data-v-c9d331a1>${ssrInterpolate(settings.value.companyName)}</h2><p class="text-xs text-zinc-800 uppercase font-medium mt-1" data-v-c9d331a1>Flathead Valley, MT</p></div></header><div class="mb-16" data-v-c9d331a1><h1 class="text-6xl font-black uppercase italic tracking-tighter text-zinc-950" data-v-c9d331a1> Invoice<span class="text-zinc-800" data-v-c9d331a1>.</span></h1><p class="text-[10px] text-zinc-800 mt-2 uppercase tracking-[0.3em]" data-v-c9d331a1>Ref: #${ssrInterpolate(referenceNumber.value)}</p></div><div class="grow" data-v-c9d331a1><table class="w-full text-left" data-v-c9d331a1><thead class="border-b-2 border-zinc-900" data-v-c9d331a1><tr data-v-c9d331a1><th class="py-4 text-[10px] font-black uppercase tracking-widest" data-v-c9d331a1>Description</th><th class="py-4 text-[10px] font-black uppercase tracking-widest text-right w-32" data-v-c9d331a1>Amount</th></tr></thead><tbody class="divide-y divide-zinc-100" data-v-c9d331a1><!--[-->`);
      ssrRenderList(lineItems.value, (item, index) => {
        _push(`<tr class="group" data-v-c9d331a1><td class="py-6 pr-4" data-v-c9d331a1><input${ssrRenderAttr("value", item.description)} placeholder="Project milestone..." class="w-full bg-transparent outline-none font-bold uppercase italic tracking-tight text-zinc-900" data-v-c9d331a1></td><td class="py-6 text-right" data-v-c9d331a1><div class="flex items-center justify-end gap-2" data-v-c9d331a1><span class="text-sm" data-v-c9d331a1>$</span><input${ssrRenderAttr("value", item.rate)} type="number" class="w-24 text-right bg-transparent outline-none text-sm font-bold" data-v-c9d331a1><button class="print:hidden text-zinc-800 hover:text-red-500 ml-4" data-v-c9d331a1>×</button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table><button class="print:hidden mt-8 text-[10px] font-black uppercase tracking-widest text-zinc-800 hover:text-zinc-950 transition-colors" data-v-c9d331a1> + Add Line Item </button></div><footer class="mt-20 border-t border-zinc-200 pt-12" data-v-c9d331a1><div class="flex justify-between items-end" data-v-c9d331a1><div class="max-w-xs" data-v-c9d331a1><span class="text-[10px] font-bold uppercase text-zinc-800 tracking-widest block mb-4" data-v-c9d331a1>Terms &amp; Conditions</span><p class="text-[10px] text-zinc-800 leading-relaxed uppercase font-medium" data-v-c9d331a1>${ssrInterpolate(settings.value.terms)}</p></div><div class="text-right" data-v-c9d331a1><span class="text-[10px] font-bold uppercase text-zinc-800 tracking-widest" data-v-c9d331a1>Total Due</span><p class="text-5xl font-black uppercase italic tracking-tighter mt-2" style="${ssrRenderStyle({ color: settings.value.accentColor })}" data-v-c9d331a1> $${ssrInterpolate(subtotal.value.toLocaleString())}</p></div></div></footer></div></section></div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Invoice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-c9d331a1"]]), { __name: "AppInvoice" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appInvoice = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_appInvoice, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/invoices/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-C9bzlir_.mjs.map

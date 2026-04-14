import { _ as __nuxt_component_0 } from './Header-B1r3EUpy.mjs';
import { defineComponent, useSSRContext, ref, computed, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col lg:flex-row min-h-screen" }, _attrs))} data-v-fa6c9f91><aside class="w-full lg:w-80 bg-white border-r border-zinc-200 p-8 print:hidden" data-v-fa6c9f91><h3 class="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8" data-v-fa6c9f91>Branding Controls</h3><div class="space-y-6" data-v-fa6c9f91><div data-v-fa6c9f91><label class="text-[10px] font-bold uppercase text-zinc-500 block mb-2" data-v-fa6c9f91>Company Name</label><input${ssrRenderAttr("value", settings.value.companyName)} class="w-full border border-zinc-200 p-2 text-sm rounded-sm" data-v-fa6c9f91></div><div data-v-fa6c9f91><label class="text-[10px] font-bold uppercase text-zinc-500 block mb-2" data-v-fa6c9f91>Accent Color</label><input type="color"${ssrRenderAttr("value", settings.value.accentColor)} class="w-full h-10 border border-zinc-200 p-1 rounded-sm cursor-pointer" data-v-fa6c9f91></div><div class="flex items-center justify-between" data-v-fa6c9f91><label class="text-[10px] font-bold uppercase text-zinc-500" data-v-fa6c9f91>Display Logo</label><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(settings.value.showLogo) ? ssrLooseContain(settings.value.showLogo, null) : settings.value.showLogo) ? " checked" : ""} class="accent-zinc-950" data-v-fa6c9f91></div><div data-v-fa6c9f91><label class="text-[10px] font-bold uppercase text-zinc-500 block mb-2" data-v-fa6c9f91>Legal Terms</label><textarea rows="4" class="w-full border border-zinc-200 p-2 text-xs rounded-sm" data-v-fa6c9f91>${ssrInterpolate(settings.value.terms)}</textarea></div><button class="w-full bg-zinc-950 text-white py-4 text-xs font-black uppercase tracking-widest rounded-sm shadow-lg hover:bg-zinc-800 transition-all" data-v-fa6c9f91> Generate PDF </button></div></aside><main class="flex-1 p-4 md:p-12 lg:p-20 overflow-y-auto" data-v-fa6c9f91><div class="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none p-12 md:p-16 rounded-sm min-h-264 flex flex-col" data-v-fa6c9f91><header class="flex justify-between items-start mb-20" data-v-fa6c9f91>`);
      if (settings.value.showLogo) {
        _push(`<div class="w-16 h-16 bg-zinc-900 flex items-center justify-center rounded-sm" style="${ssrRenderStyle({ backgroundColor: settings.value.accentColor })}" data-v-fa6c9f91><span class="text-white font-black italic text-2xl" data-v-fa6c9f91>HB</span></div>`);
      } else {
        _push(`<div class="h-16" data-v-fa6c9f91></div>`);
      }
      _push(`<div class="text-right" data-v-fa6c9f91><h2 class="text-xl font-black uppercase italic tracking-tight" style="${ssrRenderStyle({ color: settings.value.accentColor })}" data-v-fa6c9f91>${ssrInterpolate(settings.value.companyName)}</h2><p class="text-xs text-zinc-500 uppercase font-medium mt-1" data-v-fa6c9f91>Flathead Valley, MT</p></div></header><div class="mb-16" data-v-fa6c9f91><h1 class="text-6xl font-black uppercase italic tracking-tighter text-zinc-950" data-v-fa6c9f91> Invoice<span class="text-zinc-200" data-v-fa6c9f91>.</span></h1><p class="text-[10px] font-mono text-zinc-400 mt-2 uppercase tracking-[0.3em]" data-v-fa6c9f91>Ref: #${ssrInterpolate(referenceNumber.value)}</p></div><div class="grow" data-v-fa6c9f91><table class="w-full text-left" data-v-fa6c9f91><thead class="border-b-2 border-zinc-900" data-v-fa6c9f91><tr data-v-fa6c9f91><th class="py-4 text-[10px] font-black uppercase tracking-widest" data-v-fa6c9f91>Description</th><th class="py-4 text-[10px] font-black uppercase tracking-widest text-right w-32" data-v-fa6c9f91>Amount</th></tr></thead><tbody class="divide-y divide-zinc-100" data-v-fa6c9f91><!--[-->`);
      ssrRenderList(lineItems.value, (item, index) => {
        _push(`<tr class="group" data-v-fa6c9f91><td class="py-6 pr-4" data-v-fa6c9f91><input${ssrRenderAttr("value", item.description)} placeholder="Project milestone..." class="w-full bg-transparent outline-none font-bold uppercase italic tracking-tight text-zinc-900" data-v-fa6c9f91></td><td class="py-6 text-right" data-v-fa6c9f91><div class="flex items-center justify-end gap-2" data-v-fa6c9f91><span class="text-zinc-300 font-mono text-sm" data-v-fa6c9f91>$</span><input${ssrRenderAttr("value", item.rate)} type="number" class="w-24 text-right bg-transparent outline-none font-mono text-sm font-bold" data-v-fa6c9f91><button class="print:hidden text-zinc-200 hover:text-red-500 ml-4" data-v-fa6c9f91>×</button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table><button class="print:hidden mt-8 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors" data-v-fa6c9f91> + Add Line Item </button></div><footer class="mt-20 border-t border-zinc-200 pt-12" data-v-fa6c9f91><div class="flex justify-between items-end" data-v-fa6c9f91><div class="max-w-xs" data-v-fa6c9f91><span class="text-[10px] font-bold uppercase text-zinc-400 tracking-widest block mb-4" data-v-fa6c9f91>Terms &amp; Conditions</span><p class="text-[10px] text-zinc-500 leading-relaxed uppercase font-medium" data-v-fa6c9f91>${ssrInterpolate(settings.value.terms)}</p></div><div class="text-right" data-v-fa6c9f91><span class="text-[10px] font-bold uppercase text-zinc-400 tracking-widest" data-v-fa6c9f91>Total Due</span><p class="text-5xl font-black uppercase italic tracking-tighter mt-2" style="${ssrRenderStyle({ color: settings.value.accentColor })}" data-v-fa6c9f91> $${ssrInterpolate(subtotal.value.toLocaleString())}</p></div></div></footer></div></main></div>`);
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
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-fa6c9f91"]]), { __name: "AppInvoice" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_appInvoice = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_baseHeader, { label: "Create your invoice" }, null, _parent));
      _push(`<section class="mt-10">`);
      _push(ssrRenderComponent(_component_appInvoice, null, null, _parent));
      _push(`</section><!--]-->`);
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
//# sourceMappingURL=create-BmRl1Cl2.mjs.map

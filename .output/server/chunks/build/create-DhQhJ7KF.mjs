import { _ as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext, ref, computed, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
    const invoice = ref({
      number: "2026-001",
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      client: "",
      project: "",
      items: [{ description: "", qty: 1, rate: 0 }]
    });
    const subtotal = computed(() => invoice.value.items.reduce((acc, item) => acc + item.qty * item.rate, 0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a2b7b994><main class="max-w-300 mx-auto" data-v-a2b7b994><section class="grid grid-cols-1 md:grid-cols-2 border-t border-black mb-24" data-v-a2b7b994><div class="p-10 border-b md:border-b-0 border-x border-black" data-v-a2b7b994><label class="text-[9px] font-black uppercase tracking-[0.3em] block mb-6" data-v-a2b7b994>01 / Recipient</label><input${ssrRenderAttr("value", unref(invoice).client)} placeholder="CLIENT NAME" class="text-2xl font-black uppercase tracking-tighter w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-zinc-500" data-v-a2b7b994><input${ssrRenderAttr("value", unref(invoice).project)} placeholder="PROJECT SITE" class="text-sm font-bold uppercase tracking-widest w-full bg-transparent border-none focus:ring-0 p-0 mt-4 placeholder:text-zinc-500" data-v-a2b7b994></div><div class="p-10 border-b md:border-b-0 border-r border-black" data-v-a2b7b994><label class="text-[9px] font-black uppercase tracking-[0.3em] block mb-6" data-v-a2b7b994>02 / Logistics</label><input type="date"${ssrRenderAttr("value", unref(invoice).date)} class="text-2xl font-black uppercase tracking-tighter w-full bg-transparent border-none focus:ring-0 p-0" data-v-a2b7b994><p class="text-[9px] font-bold uppercase tracking-widest mt-4" data-v-a2b7b994>Net 30 Terms Apply</p></div></section><section class="mb-24" data-v-a2b7b994><div class="grid grid-cols-12 border-y border-black bg-zinc-50 p-4" data-v-a2b7b994><div class="col-span-6 text-[9px] font-black uppercase tracking-widest" data-v-a2b7b994>Description</div><div class="col-span-2 text-[9px] font-black uppercase tracking-widest text-center" data-v-a2b7b994>Qty</div><div class="col-span-2 text-[9px] font-black uppercase tracking-widest text-right" data-v-a2b7b994>Rate</div><div class="col-span-2 text-[9px] font-black uppercase tracking-widest text-right" data-v-a2b7b994>Total</div></div><!--[-->`);
      ssrRenderList(unref(invoice).items, (item, i) => {
        _push(`<div class="grid grid-cols-12 border-b border-black py-8 px-4 group hover:bg-zinc-50 transition-colors" data-v-a2b7b994><div class="col-span-6" data-v-a2b7b994><input${ssrRenderAttr("value", item.description)} placeholder="SERVICE" class="text-md font-black uppercase tracking-tighter w-full bg-transparent border-none focus:ring-0 p-0" data-v-a2b7b994></div><div class="col-span-2 text-center" data-v-a2b7b994><input type="number"${ssrRenderAttr("value", item.qty)} class="text-lg font-black text-center w-full bg-transparent border-none focus:ring-0 p-0 tabular-nums" data-v-a2b7b994></div><div class="col-span-2 text-right" data-v-a2b7b994><input type="number"${ssrRenderAttr("value", item.rate)} class="text-lg font-black text-right w-full bg-transparent border-none focus:ring-0 p-0 tabular-nums" data-v-a2b7b994></div><div class="col-span-2 text-right text-lg font-black tabular-nums" data-v-a2b7b994>${ssrInterpolate((item.qty * item.rate).toLocaleString())}</div></div>`);
      });
      _push(`<!--]--><button class="mt-8 text-[10px] font-black uppercase tracking-[0.3em] border border-black px-6 py-3 hover:bg-black hover:text-white transition-all" data-v-a2b7b994> + Add Line Item </button></section><footer class="mt-24" data-v-a2b7b994><div class="grid grid-cols-12 border-t-4 border-black pt-8 mb-16" data-v-a2b7b994><div class="col-span-12 md:col-span-8" data-v-a2b7b994><p class="text-[9px] font-bold uppercase tracking-[0.4em] max-w-xs leading-relaxed" data-v-a2b7b994> All payments are due within 30 days. Ironclad reserves the right to apply late fees to overdue structural and finishing accounts. </p></div><div class="col-span-12 md:col-span-4 text-left md:text-right mt-6 md:mt-0" data-v-a2b7b994><span class="text-[9px] font-black uppercase tracking-[0.4em]" data-v-a2b7b994>Grand Total (USD)</span><p class="text-7xl font-black tracking-tighter tabular-nums leading-none mt-4" data-v-a2b7b994>${ssrInterpolate(unref(subtotal).toLocaleString())}</p></div></div><div class="grid grid-cols-1 md:grid-cols-3 border border-black no-print" data-v-a2b7b994><button class="p-8 border-b md:border-b-0 md:border-r border-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black hover:text-white transition-colors flex justify-between items-center group" data-v-a2b7b994> 01 / Generate PDF <span class="text-lg group-hover:-translate-y-1 transition-transform" data-v-a2b7b994>↓</span></button><button class="p-8 font-black uppercase tracking-[0.3em] text-[10px] bg-zinc-50 hover:bg-black hover:text-white transition-all flex justify-between items-center relative group" data-v-a2b7b994> 02 / Payment <span class="text-[8px] font-mono border border-black px-2 py-1 group-hover:border-white" data-v-a2b7b994>STRIPE</span></button><button class="p-8 font-black uppercase tracking-[0.3em] text-[10px] bg-zinc-50 hover:bg-black hover:text-white transition-all flex justify-between items-center relative group border-b md:border-b-0 md:border-l border-black" data-v-a2b7b994> 03 / Email Invoice <span class="text-[8px] font-mono border border-black px-2 py-1 group-hover:border-white" data-v-a2b7b994>Email</span></button></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard/invoices",
        class: "no-print text-center justify-center p-8 border border-black font-black uppercase tracking-[0.3em] text-[15px] hover:bg-black hover:text-white transition-colors flex justify-between items-center group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button data-v-a2b7b994${_scopeId}> 03 / Cancel <span class="text-lg group-hover:translate-x-1 transition-transform" data-v-a2b7b994${_scopeId}>→</span></button>`);
          } else {
            return [
              createVNode("button", null, [
                createTextVNode(" 03 / Cancel "),
                createVNode("span", { class: "text-lg group-hover:translate-x-1 transition-transform" }, "→")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer></main></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Invoice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-a2b7b994"]]), { __name: "AppInvoice" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appInvoice = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-10 p-4" }, _attrs))}>`);
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
//# sourceMappingURL=create-DhQhJ7KF.mjs.map

import { _ as __nuxt_component_0 } from './Card-BobSkMzU.mjs';
import { _ as __nuxt_component_1 } from './Button-Ck65uHk_.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './Table-Cnq5Q4u9.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './Badge-x7MV3f3a.mjs';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';

const table = [
  {
    id: "4600",
    date: "2024-03-11T15:30:00",
    status: "paid",
    email: "james.anderson@example.com",
    amount: 594
  },
  {
    id: "4599",
    date: "2024-03-11T10:10:00",
    status: "failed",
    email: "mia.white@example.com",
    amount: 276
  },
  {
    id: "4598",
    date: "2024-03-11T08:50:00",
    status: "refunded",
    email: "william.brown@example.com",
    amount: 315
  },
  {
    id: "4597",
    date: "2024-03-10T19:45:00",
    status: "paid",
    email: "emma.davis@example.com",
    amount: 529
  },
  {
    id: "4596",
    date: "2024-03-10T15:55:00",
    status: "paid",
    email: "ethan.harris@example.com",
    amount: 639
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_baseButton = __nuxt_component_1;
      const _component_baseCard = __nuxt_component_2;
      const _component_baseTable = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 min-h-screen font-sans" }, _attrs))}><header class="flex justify-between items-center mb-12 pb-8 border-b"><div><span class="font-medium text-xs uppercase tracking-widest">Site Intake Command</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { label: "Lead Manager" }, null, _parent));
      _push(`</div><div class="flex gap-4">`);
      _push(ssrRenderComponent(_component_baseButton, { label: "New Entry" }, null, _parent));
      _push(`</div></header><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><!--[-->`);
      ssrRenderList(["Open Inquiries", "Visits Scheduled", "Active Estimates"], (label) => {
        _push(`<div class="rounded-sm shadow-sm transition-colors">`);
        _push(ssrRenderComponent(_component_baseCard, {
          label,
          text: "12"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_baseTable, { data: unref(table) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DUeIIDN-.mjs.map

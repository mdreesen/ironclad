import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { a as __nuxt_component_1, _ as __nuxt_component_2, b as __nuxt_component_3 } from './Table-C3zb5ajf.mjs';
import { t as table } from './test-DnSQ2f6Y.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderSection",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "font-sans text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400 flex justify-center mb-2" }, _attrs))}>${__props.label ?? ""}</h2>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/HeaderSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "BaseHeaderSection" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeaderSection = __nuxt_component_0;
      const _component_baseButton = __nuxt_component_1;
      const _component_baseCard = __nuxt_component_2;
      const _component_baseTable = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans" }, _attrs))}><header class="flex justify-between items-center mb-12 pb-8 border-b"><div><span class="font-medium text-xs uppercase tracking-widest">Company Name</span>`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { label: "First Name" }, null, _parent));
      _push(`</div><div class="flex gap-4">`);
      _push(ssrRenderComponent(_component_baseButton, { label: "New Entry" }, null, _parent));
      _push(`</div></header><section>`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { label: "Overview" }, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><!--[-->`);
      ssrRenderList(["Open Inquiries", "Visits Scheduled", "Active Estimates"], (label) => {
        _push(`<div class="rounded-sm shadow-sm transition-colors">`);
        _push(ssrRenderComponent(_component_baseCard, {
          label,
          description: "12"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section>`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { label: "Clients" }, null, _parent));
      _push(ssrRenderComponent(_component_baseTable, { data: unref(table) }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-pnprsc20.mjs.map

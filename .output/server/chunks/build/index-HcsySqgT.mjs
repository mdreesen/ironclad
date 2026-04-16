import { _ as __nuxt_component_0 } from './Hero-BvKEzP1K.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './ChartLine-VwdvpUt1.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Stats",
  __ssrInlineRender: true,
  setup(__props) {
    const metrics = [
      { label: "01 / REVENUE", value: "184,200", unit: "USD" },
      { label: "02 / PIPELINE", value: "24", unit: "LEADS" },
      { label: "03 / MARGIN", value: "38.4", unit: "%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-12 border-b border-black mb-12" }, _attrs))}><!--[-->`);
      ssrRenderList(metrics, (stat, i) => {
        _push(`<div class="col-span-1 md:col-span-4 border-t md:border-t-0 border-l border-r border-black md:last:border-r-0 p-6 md:p-8 first:border-t-0 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair"><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-8 md:mb-12">${ssrInterpolate(stat.label)}</span><div class="flex items-baseline gap-2"><span class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter tabular-nums">${ssrInterpolate(stat.value)}</span><span class="text-[10px] font-bold uppercase">${ssrInterpolate(stat.unit)}</span></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Stats.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "BaseStats" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-6">Personnel Logs</span><div class="space-y-0 border-t border-black"><!--[-->`);
  ssrRenderList(4, (n) => {
    _push(`<div class="py-4 border-b border-black flex justify-between items-center group cursor-pointer hover:bg-zinc-50 px-2 transition-colors"><span class="text-[11px] font-bold uppercase tracking-tight">Active Project 0${ssrInterpolate(n)}</span><span class="text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">→ VIEW</span></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Logs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "BaseLogs" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const chartData = [
      { month: "January", clients: 186 },
      { month: "February", clients: 305 },
      { month: "March", clients: 237 },
      { month: "April", clients: 260 },
      { month: "May", clients: 209 },
      { month: "June", clients: 250 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseStats = __nuxt_component_1;
      const _component_baseChartLine = __nuxt_component_2;
      const _component_baseLogs = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_appHero, null, null, _parent));
      _push(`<main class="max-w-350 mx-auto"><section>`);
      _push(ssrRenderComponent(_component_baseStats, null, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_baseChartLine, {
        data: chartData,
        label: "Clients",
        category_name: "clients",
        name_y: "Clients"
      }, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_baseLogs, null, null, _parent));
      _push(`</section></main></div>`);
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
//# sourceMappingURL=index-HcsySqgT.mjs.map

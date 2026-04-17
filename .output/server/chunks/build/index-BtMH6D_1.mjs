import { _ as __nuxt_component_0 } from './Hero-DTZ8TNud.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3$1 } from './Logs-BccXAobH.mjs';
import { _ as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
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
  ...{
    tags: ["donutcharts", "withlegend"]
  },
  __name: "ChartDonut",
  __ssrInlineRender: true,
  setup(__props) {
    const donutData = ref([35, 25, 20, 15, 5]);
    const marketShareLabels = {
      "Product A": {
        name: "Product A",
        color: "var(--ui-primary)"
      },
      "Product B": {
        name: "Product B",
        color: "var(--ui-info)"
      },
      "Product C": {
        name: "Product C",
        color: "var(--ui-success)"
      },
      "Product D": {
        name: "Product D",
        color: "var(--ui-warning)"
      },
      "Other": {
        name: "Other",
        color: "var(--ui-error)"
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DonutChart = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_DonutChart, mergeProps({
        data: unref(donutData),
        categories: marketShareLabels,
        height: 200,
        radius: 80,
        "pad-angle": 0.1,
        "arc-width": 20
      }, _attrs), {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartDonut.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "BaseChartDonut" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const statData = [
      { label: "01 / ANNUAL VOLUME", value: "1,332,400", unit: "USD" },
      { label: "02 / OUTSTANDING", value: "42,850", unit: "USD" },
      { label: "03 / NET MARGIN", value: "34.2", unit: "%" }
    ];
    const profits = [
      { month: "January", profit: 186 },
      { month: "February", profit: 305 },
      { month: "March", profit: 237 },
      { month: "April", profit: 260 },
      { month: "May", profit: 209 },
      { month: "June", profit: 250 }
    ];
    const paidInvoices = [
      { id: 1234, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "4,200" },
      { id: 1233, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "84,200" },
      { id: 1232, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "1,200" },
      { id: 1231, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "200" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseStats = __nuxt_component_1;
      const _component_baseChartLine = __nuxt_component_2;
      const _component_baseChartDonut = __nuxt_component_3;
      const _component_baseLogs = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0564f73b>`);
      _push(ssrRenderComponent(_component_appHero, { label: "Finances" }, null, _parent));
      _push(`<main class="max-w-350 mx-auto flex flex-col gap-16" data-v-0564f73b><section data-v-0564f73b>`);
      _push(ssrRenderComponent(_component_baseStats, { data: statData }, null, _parent));
      _push(`</section><section class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-black" data-v-0564f73b><div class="col-span-1 lg:col-span-8 p-10 border-l border-black" data-v-0564f73b>`);
      _push(ssrRenderComponent(_component_baseChartLine, {
        data: profits,
        label: "Profits",
        category_name: "profit",
        name_y: "Profits"
      }, null, _parent));
      _push(`</div><div class="col-span-1 lg:col-span-4 p-10 border-l border-r border-black bg-zinc-50" data-v-0564f73b>`);
      _push(ssrRenderComponent(_component_baseChartDonut, null, null, _parent));
      _push(`</div></section><section class="grid grid-cols-1 lg:grid-cols-12 gap-12" data-v-0564f73b>`);
      _push(ssrRenderComponent(_component_baseLogs, { data: paidInvoices }, null, _parent));
      _push(`</section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/finances/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0564f73b"]]);

export { index as default };
//# sourceMappingURL=index-BtMH6D_1.mjs.map

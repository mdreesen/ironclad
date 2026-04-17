import { _ as __nuxt_component_0 } from './Hero-DTZ8TNud.mjs';
import { _ as __nuxt_component_1 } from './Stats-B8GQBc1F.mjs';
import { f as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

var o = /* @__PURE__ */ ((t) => (t.TopLeft = "top-left", t.TopCenter = "top-center", t.TopRight = "top-right", t.BottomLeft = "bottom-left", t.BottomCenter = "bottom-center", t.BottomRight = "bottom-right", t))(o || {}), a = /* @__PURE__ */ ((t) => (t.Basis = "basis", t.BasisClosed = "basisClosed", t.BasisOpen = "basisOpen", t.Bundle = "bundle", t.Cardinal = "cardinal", t.CardinalClosed = "cardinalClosed", t.CardinalOpen = "cardinalOpen", t.CatmullRom = "catmullRom", t.CatmullRomClosed = "catmullRomClosed", t.CatmullRomOpen = "catmullRomOpen", t.Linear = "linear", t.LinearClosed = "linearClosed", t.MonotoneX = "monotoneX", t.MonotoneY = "monotoneY", t.Natural = "natural", t.Step = "step", t.StepAfter = "stepAfter", t.StepBefore = "stepBefore", t))(a || {});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    tags: ["linecharts"]
  },
  __name: "ChartLine",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    label: {
      type: String,
      default: "Line Chart"
    },
    name_y: {
      type: String,
      required: true
    },
    category_name: {
      type: String,
      required: true
    },
    dataYears: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const categories = {
      [props.category_name]: { name: `${props.category_name}`, color: "black" }
    };
    const xFormatter = (tick, _i, _ticks) => {
      console.log(props.data);
      return props.data[tick]?.month ?? "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LineChart = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mx-auto max-w-3xl space-y-6 rounded-lg", "p-6"]
      }, _attrs))}><div class="flex items-center justify-between"><h3 class="text-lg font-semibold">${ssrInterpolate(__props.label)}</h3></div>`);
      _push(ssrRenderComponent(_component_LineChart, {
        data: __props.data,
        height: 300,
        "y-label": __props.name_y,
        "x-num-ticks": 2,
        categories,
        "x-formatter": xFormatter,
        "y-grid-line": true,
        "curve-type": ("CurveType" in _ctx ? _ctx.CurveType : unref(a)).MonotoneX,
        "legend-position": ("LegendPosition" in _ctx ? _ctx.LegendPosition : unref(o)).TopRight,
        "hide-legend": false
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartLine.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "BaseChartLine" });
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
    const statData = [
      { label: "01 / REVENUE", value: "184,200", unit: "USD" },
      { label: "02 / PIPELINE", value: "24", unit: "LEADS" },
      { label: "03 / MARGIN", value: "38.4", unit: "%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseStats = __nuxt_component_1;
      const _component_baseChartLine = __nuxt_component_2;
      const _component_baseLogs = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_appHero, { label: "Welcome<br>name" }, null, _parent));
      _push(`<main class="max-w-350 mx-auto"><section>`);
      _push(ssrRenderComponent(_component_baseStats, { data: statData }, null, _parent));
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
//# sourceMappingURL=index-7jPzDfb4.mjs.map

import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { a as __nuxt_component_0$2 } from './server.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Stats",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-12 border-b border-black" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (item, i) => {
        _push(`<div class="col-span-1 md:col-span-4 border-t md:border-t-0 border-l border-r border-black md:last:border-r-0 p-6 md:p-8 first:border-t-0 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair"><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-8 md:mb-12">${ssrInterpolate(item.label)}</span><div class="flex items-baseline gap-2"><span class="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter tabular-nums">${ssrInterpolate(item.value)}</span><span class="text-[10px] font-bold uppercase">${ssrInterpolate(item.unit)}</span></div></div>`);
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
var o = /* @__PURE__ */ ((t) => (t.TopLeft = "top-left", t.TopCenter = "top-center", t.TopRight = "top-right", t.BottomLeft = "bottom-left", t.BottomCenter = "bottom-center", t.BottomRight = "bottom-right", t))(o || {}), a = /* @__PURE__ */ ((t) => (t.Basis = "basis", t.BasisClosed = "basisClosed", t.BasisOpen = "basisOpen", t.Bundle = "bundle", t.Cardinal = "cardinal", t.CardinalClosed = "cardinalClosed", t.CardinalOpen = "cardinalOpen", t.CatmullRom = "catmullRom", t.CatmullRomClosed = "catmullRomClosed", t.CatmullRomOpen = "catmullRomOpen", t.Linear = "linear", t.LinearClosed = "linearClosed", t.MonotoneX = "monotoneX", t.MonotoneY = "monotoneY", t.Natural = "natural", t.Step = "step", t.StepAfter = "stepAfter", t.StepBefore = "stepBefore", t))(a || {});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "BaseChartLine" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Logs",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-1 lg:col-span-12" }, _attrs))}><div class="flex justify-between items-end mb-8"><h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 italic-none">Recent Projects</h2><span class="text-[9px] font-mono text-zinc-400">Total verified transactions: 1,204</span></div><table class="w-full border-t border-black"><tbody class="divide-y divide-black/10"><!--[-->`);
      ssrRenderList(__props.data, (item) => {
        _push(`<tr class="hover:bg-zinc-50 transition-colors cursor-pointer group"><td class="py-8 text-[10px] font-mono text-zinc-400 w-24">#460${ssrInterpolate(item.invoice_id)}</td><td class="py-8"><span class="text-xl font-black uppercase tracking-tighter block">${ssrInterpolate(item.company)}</span><span class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">${ssrInterpolate(item.date)}</span></td><td class="py-8 text-right text-3xl font-black tracking-tighter tabular-nums"> $${ssrInterpolate(item.amount)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Logs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main, { __name: "BaseLogs" });

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b };
//# sourceMappingURL=Logs-CWJI2owZ.mjs.map

import { _ as __nuxt_component_0$1, a as _sfc_main$7 } from './Card-BobSkMzU.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1, a as _sfc_main$8, b as __nuxt_component_0$2 } from './server.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    title_small: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "max-w-7xl mx-auto" }, _attrs))}><div class="flex justify-between items-end"><div><span class="text-[10px] font-black uppercase tracking-[0.3em] block mb-2">${ssrInterpolate(__props.title_small)}</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { label: __props.title }, null, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "AppHero" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-4xl py-4 tracking-tighter font-bold text-normal flex justify-center mb-2" }, _attrs))}>${__props.label ?? ""}</h2>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/HeaderSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "BaseHeaderSection" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CardFinances",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    trend: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    phone_number: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$7;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "bg-gray-700/50 text-center divide-none" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-lg font-bold"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-lg font-bold" }, toDisplayString(__props.label), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-around"${_scopeId}><span class="text-[9px]"${_scopeId}>${ssrInterpolate(__props.trend ? `${__props.trend} from last month` : "")}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-around" }, [
                createVNode("span", { class: "text-[9px]" }, toDisplayString(__props.trend ? `${__props.trend} from last month` : ""), 1)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="text-4xl tracking-tighter"${_scopeId}>${ssrInterpolate(__props.value)}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "text-4xl tracking-tighter" }, toDisplayString(__props.value), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/CardFinances.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "BaseCardFinances" });
var o = /* @__PURE__ */ ((t) => (t.TopLeft = "top-left", t.TopCenter = "top-center", t.TopRight = "top-right", t.BottomLeft = "bottom-left", t.BottomCenter = "bottom-center", t.BottomRight = "bottom-right", t))(o || {}), a = /* @__PURE__ */ ((t) => (t.Basis = "basis", t.BasisClosed = "basisClosed", t.BasisOpen = "basisOpen", t.Bundle = "bundle", t.Cardinal = "cardinal", t.CardinalClosed = "cardinalClosed", t.CardinalOpen = "cardinalOpen", t.CatmullRom = "catmullRom", t.CatmullRomClosed = "catmullRomClosed", t.CatmullRomOpen = "catmullRomOpen", t.Linear = "linear", t.LinearClosed = "linearClosed", t.MonotoneX = "monotoneX", t.MonotoneY = "monotoneY", t.Natural = "natural", t.Step = "step", t.StepAfter = "stepAfter", t.StepBefore = "stepBefore", t))(a || {});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    tags: ["linecharts", "multilines"]
  },
  __name: "ChartLine",
  __ssrInlineRender: true,
  props: {
    showTitle: { type: Boolean, default: false }
  },
  setup(__props) {
    const chartData = [
      { month: "January", desktop: 186, mobile: 186 },
      { month: "February", desktop: 305, mobile: 305 },
      { month: "March", desktop: 237, mobile: 237 },
      { month: "April", desktop: 260, mobile: 209 },
      { month: "May", desktop: 209, mobile: 209 },
      { month: "June", desktop: 250, mobile: 214 }
    ];
    const categories = {
      desktop: { name: "Desktop", color: "#3b82f6" },
      mobile: { name: "Mobile", color: "#22c55e" }
    };
    const xFormatter = (tick, _i, _ticks) => {
      return chartData[tick]?.month ?? "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      const _component_LineChart = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mx-auto max-w-3xl space-y-6 rounded-lg", __props.showTitle ? "p-6" : ""]
      }, _attrs))}><div class="flex items-center justify-between"><h3 class="text-lg font-semibold"> Line Chart </h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blocks/line-charts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-copy",
              size: "sm",
              variant: "soft",
              color: "neutral"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-lucide-copy",
                size: "sm",
                variant: "soft",
                color: "neutral"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LineChart, {
        data: chartData,
        height: 300,
        "y-label": "Number of visits",
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "BaseChartLine" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    tags: ["barcharts", "vertical"]
  },
  __name: "ChartBar",
  __ssrInlineRender: true,
  props: {
    showTitle: { type: Boolean, default: false }
  },
  setup(__props) {
    const RevenueData = [
      { month: "January", desktop: 186, mobile: 80 },
      { month: "February", desktop: 305, mobile: 200 },
      { month: "March", desktop: 237, mobile: 120 },
      { month: "April", desktop: 73, mobile: 190 },
      { month: "May", desktop: 209, mobile: 130 },
      { month: "June", desktop: 214, mobile: 140 }
    ];
    const RevenueCategories = computed(() => ({
      desktop: {
        name: "Desktop",
        color: "#22c55e"
      }
    }));
    const xFormatter = (i) => `${RevenueData[i]?.month}`;
    const yFormatter = (tick) => tick.toString();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      const _component_BarChart = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mx-auto max-w-3xl space-y-6 rounded-lg", __props.showTitle ? "p-6" : ""]
      }, _attrs))}><div class="flex items-center justify-between"><h3 class="text-lg font-semibold"> Bar Chart </h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blocks/bar-charts" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-copy",
              size: "sm",
              variant: "soft",
              color: "neutral"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                icon: "i-lucide-copy",
                size: "sm",
                variant: "soft",
                color: "neutral"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BarChart, {
        data: RevenueData,
        height: 300,
        categories: unref(RevenueCategories),
        "y-axis": ["desktop"],
        "x-num-ticks": 6,
        radius: 4,
        "y-grid-line": true,
        "x-formatter": xFormatter,
        "y-formatter": yFormatter,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$2, { __name: "BaseChartBar" });
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
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "BaseChartDonut" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = ref([
      { label: "Total Revenue", value: "$142,500", trend: "+12%", color: "text-zinc-900" },
      { label: "Net Profit", value: "$58,200", trend: "+8%", color: "text-emerald-600" },
      { label: "Outstanding AR", value: "$18,400", trend: "-2%", color: "text-rose-600" },
      { label: "Avg. Project Margin", value: "42%", trend: "+4%", color: "text-zinc-900" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseHeaderSection = __nuxt_component_1;
      const _component_baseCardFinances = __nuxt_component_2;
      const _component_baseChartLine = __nuxt_component_3;
      const _component_baseChartBar = __nuxt_component_4;
      const _component_baseChartDonut = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_appHero, {
        title: "Finances",
        title_small: "Business Intelligence"
      }, null, _parent));
      _push(`<section class="bg-gray-700/50 p-2 rounded-lg">`);
      _push(ssrRenderComponent(_component_baseHeaderSection, { label: "OVERVIEW" }, null, _parent));
      _push(`<div class="flex flex-wrap justify-around"><!--[-->`);
      ssrRenderList(unref(stats), (stat) => {
        _push(`<div class="my-8 shadow-sm w-full max-w-lg">`);
        _push(ssrRenderComponent(_component_baseCardFinances, {
          label: stat.label,
          value: stat.value,
          trend: stat.trend
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section>`);
      _push(ssrRenderComponent(_component_baseChartLine, null, null, _parent));
      _push(ssrRenderComponent(_component_baseChartBar, null, null, _parent));
      _push(ssrRenderComponent(_component_baseChartDonut, null, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/finances/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BJazs747.mjs.map

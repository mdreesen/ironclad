import { b as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

var o = /* @__PURE__ */ ((t) => (t.TopLeft = "top-left", t.TopCenter = "top-center", t.TopRight = "top-right", t.BottomLeft = "bottom-left", t.BottomCenter = "bottom-center", t.BottomRight = "bottom-right", t))(o || {}), a = /* @__PURE__ */ ((t) => (t.Basis = "basis", t.BasisClosed = "basisClosed", t.BasisOpen = "basisOpen", t.Bundle = "bundle", t.Cardinal = "cardinal", t.CardinalClosed = "cardinalClosed", t.CardinalOpen = "cardinalOpen", t.CatmullRom = "catmullRom", t.CatmullRomClosed = "catmullRomClosed", t.CatmullRomOpen = "catmullRomOpen", t.Linear = "linear", t.LinearClosed = "linearClosed", t.MonotoneX = "monotoneX", t.MonotoneY = "monotoneY", t.Natural = "natural", t.Step = "step", t.StepAfter = "stepAfter", t.StepBefore = "stepBefore", t))(a || {});
const _sfc_main = /* @__PURE__ */ defineComponent({
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/ChartLine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "BaseChartLine" });

export { __nuxt_component_2 as _, o };
//# sourceMappingURL=ChartLine-VwdvpUt1.mjs.map

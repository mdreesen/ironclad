import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-12 border-b border-black mb-12" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (item, i) => {
        _push(`<div class="col-span-1 md:col-span-4 border-t md:border-t-0 border-l border-r border-black md:last:border-r-0 p-6 md:p-8 first:border-t-0 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair"><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-8 md:mb-12">${ssrInterpolate(item.label)}</span><div class="flex items-baseline gap-2"><span class="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter tabular-nums">${ssrInterpolate(item.value)}</span><span class="text-[10px] font-bold uppercase">${ssrInterpolate(item.unit)}</span></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Stats.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "BaseStats" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Stats-B8GQBc1F.mjs.map

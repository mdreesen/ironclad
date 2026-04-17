import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    label: {
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
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "mx-auto flex justify-between flex-wrap w-full gap-0 border-t-8 md:border-t-12 border-black pt-6 mb-16 md:mb-24" }, _attrs))}><div class="col-span-1 md:col-span-6 mb-8 md:mb-0"><h1 class="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]">${__props.label ?? ""}</h1></div><div class="col-span-1 md:col-span-3 text-[10px] font-bold tracking-widest leading-relaxed uppercase mb-4 md:mb-0"><p>Flathead Valley Operations</p><p class="text-zinc-400 italic-none">Evergreen // Montana</p></div><div class="col-span-1 md:col-span-3 text-left md:text-right"><span class="text-[10px] font-mono border border-black px-2 py-1 inline-block">v.2.0.26</span></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "AppHero" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Hero-DTZ8TNud.mjs.map

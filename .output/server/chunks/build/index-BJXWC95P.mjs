import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const metrics = [
      { label: "01 / REVENUE", value: "184,200", unit: "USD" },
      { label: "02 / PIPELINE", value: "24", unit: "LEADS" },
      { label: "03 / MARGIN", value: "38.4", unit: "%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white p-4 sm:p-8 lg:p-12" }, _attrs))}><header class="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 border-t-8 md:border-t-12 border-black pt-6 mb-16 md:mb-24"><div class="col-span-1 md:col-span-6 mb-8 md:mb-0"><h1 class="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]">IRON<br>CLAD</h1></div><div class="col-span-1 md:col-span-3 text-[10px] font-bold tracking-widest leading-relaxed uppercase mb-4 md:mb-0"><p>Flathead Valley Operations</p><p class="text-zinc-400 italic-none">Evergreen // Montana</p></div><div class="col-span-1 md:col-span-3 text-left md:text-right"><span class="text-[10px] font-mono border border-black px-2 py-1 inline-block">v.2.0.26</span></div></header><main class="max-w-350 mx-auto"><section class="grid grid-cols-1 md:grid-cols-12 border-b border-black mb-12"><!--[-->`);
      ssrRenderList(metrics, (stat, i) => {
        _push(`<div class="col-span-1 md:col-span-4 border-t md:border-t-0 border-l border-r border-black md:last:border-r-0 p-6 md:p-8 first:border-t-0 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair"><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-8 md:mb-12">${ssrInterpolate(stat.label)}</span><div class="flex items-baseline gap-2"><span class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter tabular-nums">${ssrInterpolate(stat.value)}</span><span class="text-[10px] font-bold uppercase">${ssrInterpolate(stat.unit)}</span></div></div>`);
      });
      _push(`<!--]--></section><section class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24"><div class="col-span-1 lg:col-span-8"><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-6">Annual Growth Curve</span><div class="h-75 md:h-100 border border-black relative overflow-hidden flex items-end p-0"><div class="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5 pointer-events-none"><!--[-->`);
      ssrRenderList(36, (n) => {
        _push(`<div class="border-[0.5px] border-black"></div>`);
      });
      _push(`<!--]--></div><svg viewBox="0 0 800 200" class="w-full h-full p-0 overflow-visible" preserveAspectRatio="none"><path d="M0 200 L 200 150 L 400 180 L 600 40 L 800 20" fill="none" stroke="black" stroke-width="3"></path></svg></div></div><div class="col-span-1 lg:col-span-4"><span class="text-[9px] font-bold tracking-[0.2em] uppercase block mb-6">Personnel Logs</span><div class="space-y-0 border-t border-black"><!--[-->`);
      ssrRenderList(4, (n) => {
        _push(`<div class="py-4 border-b border-black flex justify-between items-center group cursor-pointer hover:bg-zinc-50 px-2 transition-colors"><span class="text-[11px] font-bold uppercase tracking-tight">Active Project 0${ssrInterpolate(n)}</span><span class="text-[9px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">→ VIEW</span></div>`);
      });
      _push(`<!--]--></div></div></section></main></div>`);
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
//# sourceMappingURL=index-BJXWC95P.mjs.map

import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Scheduler",
  __ssrInlineRender: true,
  setup(__props) {
    const personnel = ["Thorne", "Vane", "Rodriguez", "Sinsier"];
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const deployments = ref([
      { team: "Thorne", day: "MON", project: "Whitefish Lake Estate", role: "Foundations" },
      { team: "Thorne", day: "FRI", project: "Bigfork Finish", role: "Finishing" },
      { team: "Vane", day: "WED", project: "Kalispell Slab", role: "Slab Pour" },
      { team: "Rodriguez", day: "TUE", project: "Kalispell Slab", role: "Foundations" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-white text-black font-sans p-6 lg:p-12" }, _attrs))}><header><div class="col-span-12 md:col-span-6 mb-8 md:mb-0"> Grid <span class="text-zinc-300">Logistics.</span></div><div class="col-span-12 md:col-span-6 text-left md:text-right text-[10px] font-bold uppercase tracking-widest leading-relaxed"><p>Hahn Built // Alexander Homes Homes // Ironclad Operations</p><span class="text-zinc-400 font-mono inline-block mt-2">v.2.0.26 // Active // No Slant</span></div></header><main class="max-w-400 mx-auto"><div class="overflow-x-auto bg-white border-t border-black"><div class="grid grid-cols-8 border-b border-black"><div class="p-6 border-r border-black font-black uppercase text-[11px] tracking-wider text-zinc-500">Personnel</div><!--[-->`);
      ssrRenderList(days, (day) => {
        _push(`<div class="p-6 border-r border-black last:border-r-0 font-black uppercase text-[11px] tracking-wider text-center">${ssrInterpolate(day)}</div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-8 min-h-150 divide-x divide-black/10"><div class="col-span-1 divide-y divide-black/10 bg-white border-r border-black"><!--[-->`);
      ssrRenderList(personnel, (member) => {
        _push(`<div class="h-48 p-6 flex items-center group cursor-pointer hover:bg-black transition-colors"><span class="text-2xl font-black uppercase tracking-tighter text-black group-hover:text-white tabular-nums">${ssrInterpolate(member)}</span></div>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(days, (day) => {
        _push(`<div class="col-span-1 relative divide-y divide-black/10"><!--[-->`);
        ssrRenderList(unref(deployments), (task) => {
          _push(`<!--[-->`);
          if (task.day === day) {
            _push(`<div class="${ssrRenderClass([{
              "h-24 top-0": task.team === personnel[0],
              "h-32 top-1/4": task.team === personnel[1],
              "h-48 top-2/3": task.team === personnel[2]
            }, "absolute left-1 right-1 bg-black text-white p-6 cursor-crosshair group hover:bg-zinc-800 transition-colors"])}"><div class="flex items-center gap-2 mb-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div><span class="text-[9px] font-black uppercase tracking-tight text-white/50 group-hover:text-white">DEPLOYMENT // ${ssrInterpolate(task.role)}</span></div><h4 class="font-black uppercase tracking-tighter text-xl leading-none">${ssrInterpolate(task.project)}</h4></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></main></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Scheduler.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "AppScheduler" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appScheduler = __nuxt_component_0;
      _push(ssrRenderComponent(_component_appScheduler, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/schedule/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BjXI2xHS.mjs.map

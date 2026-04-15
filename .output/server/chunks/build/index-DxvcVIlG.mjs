import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';

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
    const margins = ref([
      { name: "Hahn Built (Structural)", margin: 38, color: "bg-zinc-900" },
      { name: "Alexander Homes (Painting)", margin: 52, color: "bg-orange-600" },
      { name: "Ironclad (Maintenance)", margin: 45, color: "bg-zinc-400" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-7xl mx-auto"><header class="flex justify-between items-end mb-16"><div><span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-2">Business Intelligence</span><h1 class="text-5xl font-black uppercase italic tracking-tighter">Ironclad <span class="text-zinc-200 text-normal font-medium">Fiscal.</span></h1></div><div class="flex gap-4"><button class="bg-white border border-zinc-200 px-6 py-4 text-[10px] font-black uppercase tracking-widest rounded-sm">Monthly Report</button><button class="bg-zinc-900 text-white px-6 py-4 text-[10px] font-black uppercase tracking-widest rounded-sm">Tax Export</button></div></header><section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"><!--[-->`);
      ssrRenderList(unref(stats), (stat) => {
        _push(`<div class="bg-white p-8 border border-zinc-200 rounded-sm shadow-sm"><span class="text-[10px] font-bold uppercase tracking-widest text-zinc-400">${ssrInterpolate(stat.label)}</span><p class="${ssrRenderClass([stat.color, "text-4xl font-black italic tracking-tighter mt-2"])}">${ssrInterpolate(stat.value)}</p><div class="flex items-center gap-2 mt-2"><span class="text-[9px] font-black bg-zinc-100 px-1.5 py-0.5 rounded-sm">${ssrInterpolate(stat.trend)}</span><span class="text-[9px] font-medium text-zinc-400 uppercase tracking-wide">vs Prev. Month</span></div></div>`);
      });
      _push(`<!--]--></section><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2 bg-white p-10 border border-zinc-200 rounded-sm shadow-sm"><h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-8 italic">Profit Margin by Division</h3><div class="space-y-10"><!--[-->`);
      ssrRenderList(unref(margins), (item) => {
        _push(`<div><div class="flex justify-between items-end mb-3"><span class="text-xs font-bold uppercase tracking-tight italic">${ssrInterpolate(item.name)}</span><span class="text-xs font-mono font-bold">${ssrInterpolate(item.margin)}%</span></div><div class="h-2 w-full bg-zinc-100 rounded-full overflow-hidden"><div class="${ssrRenderClass([item.color, "h-full transition-all duration-1000"])}" style="${ssrRenderStyle({ width: item.margin + "%" })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-zinc-950 p-10 rounded-sm shadow-2xl text-white border-t-4 border-orange-600"><h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-8 italic text-center">Accounts Receivable Aging</h3><div class="space-y-6"><div class="flex justify-between items-center border-b border-zinc-800 pb-4"><span class="text-[10px] font-bold text-zinc-500 uppercase">Current (0-30)</span><span class="font-black text-emerald-500">$12,200</span></div><div class="flex justify-between items-center border-b border-zinc-800 pb-4"><span class="text-[10px] font-bold text-zinc-500 uppercase">Late (31-60)</span><span class="font-black text-amber-500">$4,500</span></div><div class="flex justify-between items-center border-b border-zinc-800 pb-4"><span class="text-[10px] font-bold text-zinc-500 uppercase">Overdue (60+)</span><span class="font-black text-rose-500">$1,700</span></div></div><button class="w-full mt-12 py-4 bg-zinc-800 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Send Reminders</button></div></div></div></div>`);
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
//# sourceMappingURL=index-DxvcVIlG.mjs.map

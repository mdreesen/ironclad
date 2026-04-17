import { _ as __nuxt_component_0 } from './Hero-DTZ8TNud.mjs';
import { _ as __nuxt_component_1 } from './Stats-B8GQBc1F.mjs';
import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const statData = [
      { label: "01 / ANNUAL VOLUME", value: "1,332,400", unit: "USD" },
      { label: "02 / OUTSTANDING", value: "42,850", unit: "USD" },
      { label: "03 / NET MARGIN", value: "34.2", unit: "%" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseStats = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fc459c80>`);
      _push(ssrRenderComponent(_component_appHero, { label: "Finances" }, null, _parent));
      _push(`<main class="max-w-350 mx-auto" data-v-fc459c80><section data-v-fc459c80>`);
      _push(ssrRenderComponent(_component_baseStats, { data: statData }, null, _parent));
      _push(`</section><section class="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-black mb-24" data-v-fc459c80><div class="col-span-1 lg:col-span-8 p-10 border-l border-black" data-v-fc459c80><span class="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-12 block" data-v-fc459c80>Trajectory // Volume Growth</span><div class="h-64 w-full relative" data-v-fc459c80><svg viewBox="0 0 700 200" class="w-full h-full overflow-visible" data-v-fc459c80><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<line x1="0"${ssrRenderAttr("y1", n * 40)} x2="700"${ssrRenderAttr("y2", n * 40)} stroke="black" stroke-width="0.5" stroke-dasharray="4" opacity="0.1" data-v-fc459c80></line>`);
      });
      _push(`<!--]--><path d="M0 180 L 100 140 L 200 160 L 300 80 L 400 100 L 500 40 L 700 20" fill="none" stroke="black" stroke-width="3" data-v-fc459c80></path><circle cx="500" cy="40" r="4" fill="black" data-v-fc459c80></circle></svg></div></div><div class="col-span-1 lg:col-span-4 p-10 border-l border-r border-black bg-zinc-50" data-v-fc459c80><span class="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-12 block" data-v-fc459c80>Allocation // By Sector</span><div class="flex items-end justify-between h-64 gap-2" data-v-fc459c80><!--[-->`);
      ssrRenderList([40, 70, 90, 55], (h, i) => {
        _push(`<div class="flex-1 bg-black group relative" style="${ssrRenderStyle({ height: h + "%" })}" data-v-fc459c80><span class="absolute -top-8 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity" data-v-fc459c80>${ssrInterpolate(["LABOR", "MAT", "LOG", "TAX"][i])}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="grid grid-cols-1 lg:grid-cols-12 gap-12" data-v-fc459c80><div class="col-span-1 lg:col-span-12" data-v-fc459c80><div class="flex justify-between items-end mb-8" data-v-fc459c80><h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 italic-none" data-v-fc459c80>Remittance Feed</h2><span class="text-[9px] font-mono text-zinc-400" data-v-fc459c80>Total verified transactions: 1,204</span></div><table class="w-full border-t border-black" data-v-fc459c80><tbody class="divide-y divide-black/10" data-v-fc459c80><!--[-->`);
      ssrRenderList(4, (n) => {
        _push(`<tr class="hover:bg-zinc-50 transition-colors cursor-pointer group" data-v-fc459c80><td class="py-8 text-[10px] font-mono text-zinc-400 w-24" data-v-fc459c80>#460${ssrInterpolate(n)}</td><td class="py-8" data-v-fc459c80><span class="text-xl font-black uppercase tracking-tighter block" data-v-fc459c80>Flathead Valley Site ${ssrInterpolate(n)}</span><span class="text-[9px] font-bold text-zinc-400 uppercase tracking-widest" data-v-fc459c80>March 2026</span></td><td class="py-8 text-right text-3xl font-black tracking-tighter tabular-nums" data-v-fc459c80> $12,500.00 </td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/finances/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fc459c80"]]);

export { index as default };
//# sourceMappingURL=index-iidnkZFl.mjs.map

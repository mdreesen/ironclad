import { _ as __nuxt_component_0 } from './Hero-DTZ8TNud.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3 } from './Logs-BccXAobH.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
    const paidInvoices = [
      { id: 1234, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "4,200" },
      { id: 1233, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "84,200" },
      { id: 1232, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "1,200" },
      { id: 1231, invoice_id: 1234534, company: "Flathead Valley Site", date: "01/02/2026", amount: "200" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseStats = __nuxt_component_1;
      const _component_baseChartLine = __nuxt_component_2;
      const _component_baseLogs = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_appHero, { label: "Welcome<br>name" }, null, _parent));
      _push(`<main class="max-w-350 mx-auto flex flex-col gap-16"><section>`);
      _push(ssrRenderComponent(_component_baseStats, { data: statData }, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_baseChartLine, {
        data: chartData,
        label: "Clients",
        category_name: "clients",
        name_y: "Clients"
      }, null, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_baseLogs, { data: paidInvoices }, null, _parent));
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
//# sourceMappingURL=index-CndmVIjj.mjs.map

import { _ as __nuxt_component_0 } from './Hero-CEFoIgsn.mjs';
import { _ as _sfc_main$1$1, a as __nuxt_component_1$1 } from './Message-C7_0LR-J.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, ref, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardTeam",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    },
    phone_number: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageCard = _sfc_main$1$1;
      const _component_baseMessage = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_UPageCard, mergeProps({
        title: __props.label,
        description: __props.role,
        orientation: "vertical",
        spotlight: "",
        "spotlight-color": "primary"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseMessage, {
              label: "Text",
              message_type: "sms",
              phone_number: __props.phone_number
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_baseMessage, {
              label: "Call",
              message_type: "tel",
              phone_number: __props.phone_number
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_baseMessage, {
              label: "Email",
              message_type: "mailto",
              phone_number: __props.email
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-4" }, [
                createVNode(_component_baseMessage, {
                  label: "Text",
                  message_type: "sms",
                  phone_number: __props.phone_number
                }, null, 8, ["phone_number"]),
                createVNode(_component_baseMessage, {
                  label: "Call",
                  message_type: "tel",
                  phone_number: __props.phone_number
                }, null, 8, ["phone_number"]),
                createVNode(_component_baseMessage, {
                  label: "Email",
                  message_type: "mailto",
                  phone_number: __props.email
                }, null, 8, ["phone_number"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/CardTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "BaseCardTeam" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const teams = ref([
      { id: "T01", name: "THORNE", role: "Lead Carpenter", phone: "4065550101", email: "thorne@ironclad.com", status: "ON-SITE", site: "Whitefish" },
      { id: "V02", name: "VANE", role: "Slab Foreman", phone: "4065550102", email: "vane@ironclad.com", status: "LOGISTICS", site: "Kalispell" },
      { id: "3", name: "Greg", role: "Slab Foreman", phone: "4065550102", email: "vane@ironclad.com", status: "LOGISTICS", site: "Kalispell" },
      { id: "4", name: "Brian", role: "Slab Foreman", phone: "4065550102", email: "vane@ironclad.com", status: "LOGISTICS", site: "Kalispell" },
      { id: "5", name: "Bill", role: "Slab Foreman", phone: "4065550102", email: "vane@ironclad.com", status: "LOGISTICS", site: "Kalispell" },
      { id: "6", name: "Jan", role: "Slab Foreman", phone: "4065550102", email: "vane@ironclad.com", status: "LOGISTICS", site: "Kalispell" },
      { id: "7", name: "Frank", role: "Slab Foreman", phone: "4065550102", email: "vane@ironclad.com", status: "LOGISTICS", site: "Kalispell" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_appHero = __nuxt_component_0;
      const _component_baseCardTeam = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-106d129f>`);
      _push(ssrRenderComponent(_component_appHero, { label: "Team" }, null, _parent));
      _push(`<section class="max-w-350 mx-auto flex flex-wrap justify-center gap-10" data-v-106d129f><!--[-->`);
      ssrRenderList(unref(teams), (item) => {
        _push(`<div data-v-106d129f>`);
        _push(ssrRenderComponent(_component_baseCardTeam, {
          label: item.name,
          role: item.role,
          phone_number: item.phone,
          email: item.email
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/team/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-106d129f"]]);

export { index as default };
//# sourceMappingURL=index-DOmFRJpB.mjs.map

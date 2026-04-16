import { _ as __nuxt_component_0 } from './Header-C9MIO1PZ.mjs';
import { _ as __nuxt_component_1$1 } from './Button-Ck65uHk_.mjs';
import { _ as _sfc_main$3 } from './Card-DcmaWrvV.mjs';
import { a as _sfc_main$8 } from './server.mjs';
import { defineComponent, ref, unref, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Message",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    phone_number: {
      type: String,
      required: true
    },
    message_type: {
      type: String,
      default: "sms",
      required: true
    },
    icon: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: `${__props.message_type}:${__props.phone_number}`
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: __props.icon,
        size: "md",
        color: "neutral",
        variant: "subtle",
        class: "w-30 justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Message.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "BaseMessage" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardTeam",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    status: {
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
      const _component_UCard = _sfc_main$3;
      const _component_spn = resolveComponent("spn");
      const _component_baseMessage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "bg-gray-700/50 divide-none" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_spn, { class: "text-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_spn, { class: "text-xl" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.label), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-around"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_baseMessage, {
              icon: "lucide:smartphone",
              label: "Call",
              message_type: "tel",
              phone_number: __props.phone_number
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_baseMessage, {
              icon: "lucide:message-circle",
              label: "message",
              message_type: "sms",
              phone_number: __props.phone_number
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-around" }, [
                createVNode(_component_baseMessage, {
                  icon: "lucide:smartphone",
                  label: "Call",
                  message_type: "tel",
                  phone_number: __props.phone_number
                }, null, 8, ["phone_number"]),
                createVNode(_component_baseMessage, {
                  icon: "lucide:message-circle",
                  label: "message",
                  message_type: "sms",
                  phone_number: __props.phone_number
                }, null, 8, ["phone_number"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div${_scopeId}>${ssrInterpolate(__props.description)}</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, toDisplayString(__props.description), 1)
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
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "BaseCardTeam" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const team = ref([
      {
        id: 1,
        name: "Marcus Thorne",
        role: "Lead Estimator",
        specialty: "Foundations & Steel",
        workload: 85,
        status: "On Site",
        email: "marcus@hahnbuilt.com"
      },
      {
        id: 2,
        name: "Elena Rodriguez",
        role: "Project Manager",
        specialty: "High-End Finishes",
        workload: 40,
        status: "Remote",
        email: "elena@alexanderhomes.com"
      },
      {
        id: 3,
        name: "Silas Vane",
        role: "Site Supervisor",
        specialty: "Logistics",
        workload: 95,
        status: "Busy",
        email: "silas@ironclad.io"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_baseButton = __nuxt_component_1$1;
      const _component_baseCardTeam = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-7xl mx-auto"><header class="flex justify-between items-end mb-16"><div><span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 block mb-2">Personnel Directory</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { label: "Team" }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_baseButton, { label: "+ Add Member" }, null, _parent));
      _push(`</header><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(team), (member) => {
        _push(`<div class="bg-gray-700/50">`);
        _push(ssrRenderComponent(_component_baseCardTeam, {
          label: member.name,
          description: member.role,
          status: member.status
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/team/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-x4PcJOE-.mjs.map

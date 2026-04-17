import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSlots, computed, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { d as _sfc_main$8, a as useAppConfig, b as useComponentUI, t as tv, P as Primitive, l as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_3 } from './Table-BjLvtzzW.mjs';
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
import './Badge-EMN5Ji9Y.mjs';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';

const table = [
  {
    id: "4600",
    date: "2024-03-11T15:30:00",
    status: "paid",
    email: "james.anderson@example.com",
    amount: 594
  },
  {
    id: "4599",
    date: "2024-03-11T10:10:00",
    status: "failed",
    email: "mia.white@example.com",
    amount: 276
  },
  {
    id: "4598",
    date: "2024-03-11T08:50:00",
    status: "refunded",
    email: "william.brown@example.com",
    amount: 315
  },
  {
    id: "4597",
    date: "2024-03-10T19:45:00",
    status: "paid",
    email: "emma.davis@example.com",
    amount: 529
  },
  {
    id: "4596",
    date: "2024-03-10T15:55:00",
    status: "paid",
    email: "ethan.harris@example.com",
    amount: 639
  }
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-5xl font-black uppercase italic tracking-tighter" }, _attrs))}>${__props.label ?? ""}</h1>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "BaseHeader" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String
      // i-lucide-rocket
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$8;
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        icon: __props.icon,
        size: "md",
        color: "neutral",
        variant: "subtle"
      }, _attrs), {
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
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Button.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$4, { __name: "BaseButton" });
const theme = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-inverted text-inverted"
      },
      "outline": {
        "root": "bg-default ring ring-default divide-y divide-default"
      },
      "soft": {
        "root": "bg-elevated/50 divide-y divide-default"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default divide-y divide-default"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$3 = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    variant: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("card", props);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.card || {} })({
      variant: props.variant
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [unref(uiProp)?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(uiProp)?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(uiProp)?.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(uiProp)?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "header",
                class: ui.value.header({ class: unref(uiProp)?.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "body",
                class: ui.value.body({ class: unref(uiProp)?.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                "data-slot": "footer",
                class: ui.value.footer({ class: unref(uiProp)?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    iconName: {
      type: String,
      default: "",
      required: false
    },
    styles: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "24"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_Icon, mergeProps({
        class: props.styles,
        name: props.iconName,
        size: props.size
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Icon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "BaseIcon" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
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
    icon: {
      type: String,
      default: ""
    },
    style: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = _sfc_main$3;
      const _component_baseIcon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UCard, mergeProps({
        class: `${__props.style} text-center divide-none`
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.icon) {
              _push2(ssrRenderComponent(_component_baseIcon, {
                iconName: props.icon
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(__props.label)}`);
          } else {
            return [
              props.icon ? (openBlock(), createBlock(_component_baseIcon, {
                key: 0,
                iconName: props.icon
              }, null, 8, ["iconName"])) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(__props.label), 1)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="justify-center items-center text-2xl font-extrabold text-white"${_scopeId}><div${_scopeId}>${ssrInterpolate(__props.description)}</div><span${_scopeId}>${ssrInterpolate(__props.status)}</span></div>`);
          } else {
            return [
              createVNode("div", { class: "justify-center items-center text-2xl font-extrabold text-white" }, [
                createVNode("div", null, toDisplayString(__props.description), 1),
                createVNode("span", null, toDisplayString(__props.status), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "BaseCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseHeader = __nuxt_component_0;
      const _component_baseButton = __nuxt_component_1$1;
      const _component_baseCard = __nuxt_component_2;
      const _component_baseTable = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 min-h-screen font-sans" }, _attrs))}><header class="flex justify-between items-center mb-12 pb-8 border-b"><div><span class="font-medium text-xs uppercase tracking-widest">Site Intake Command</span>`);
      _push(ssrRenderComponent(_component_baseHeader, { label: "Lead Manager" }, null, _parent));
      _push(`</div><div class="flex gap-4">`);
      _push(ssrRenderComponent(_component_baseButton, { label: "New Entry" }, null, _parent));
      _push(`</div></header><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><!--[-->`);
      ssrRenderList(["Open Inquiries", "Visits Scheduled", "Active Estimates"], (label) => {
        _push(`<div class="rounded-sm shadow-sm transition-colors">`);
        _push(ssrRenderComponent(_component_baseCard, {
          label,
          text: "12"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_baseTable, { data: unref(table) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DkMM7ofa.mjs.map

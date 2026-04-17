import { _ as __nuxt_component_1$1, e as _sfc_main$8 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    style: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_UButton = _sfc_main$8;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ to: __props.path }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              icon: __props.icon,
              class: `${__props.style}`,
              size: "md",
              color: "neutral",
              variant: "subtle"
            }, {
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
              createVNode(_component_UButton, {
                icon: __props.icon,
                class: `${__props.style}`,
                size: "md",
                color: "neutral",
                variant: "subtle"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.label), 1)
                ]),
                _: 1
              }, 8, ["icon", "class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Link.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$1, { __name: "BaseLink" });
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
    },
    actions: {
      type: Boolean,
      default: false
    },
    label_action: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_baseLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "mx-auto flex justify-between flex-wrap w-full gap-0 border-t-8 md:border-t-12 border-black pt-6 mb-16 md:mb-24" }, _attrs))}><div class="col-span-1 md:col-span-6 mb-8 md:mb-0"><h1 class="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.85]">${__props.label ?? ""}</h1></div><div class="col-span-1 md:col-span-3 text-[10px] font-bold tracking-widest leading-relaxed uppercase mb-4 md:mb-0"><p>Flathead Valley Operations</p><p class="text-zinc-400 italic-none">Evergreen // Montana</p></div><div class="col-span-1 md:col-span-3 text-left md:text-right">`);
      if (__props.actions) {
        _push(ssrRenderComponent(_component_baseLink, {
          label: __props.label_action,
          style: `bg-black text-white`,
          path: __props.path
        }, null, _parent));
      } else {
        _push(`<span class="text-[10px] font-mono border border-black px-2 py-1 inline-block">v.2.0.26</span>`);
      }
      _push(`</div></header>`);
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
//# sourceMappingURL=Hero-CEFoIgsn.mjs.map

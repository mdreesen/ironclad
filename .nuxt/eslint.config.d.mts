import type { FlatConfigComposer } from "../node_modules/.pnpm/eslint-flat-config-utils@3.1.0/node_modules/eslint-flat-config-utils/dist/index.mjs"
import { defineFlatConfigs } from "../node_modules/.pnpm/@nuxt+eslint-config@1.15.2_@typescript-eslint+utils@8.58.2_eslint@10.2.0_jiti@2.6.1__ty_45ad0da969c421acfbcb6d86d7998e09/node_modules/@nuxt/eslint-config/dist/flat.mjs"
import type { NuxtESLintConfigOptionsResolved } from "../node_modules/.pnpm/@nuxt+eslint-config@1.15.2_@typescript-eslint+utils@8.58.2_eslint@10.2.0_jiti@2.6.1__ty_45ad0da969c421acfbcb6d86d7998e09/node_modules/@nuxt/eslint-config/dist/flat.mjs"

declare const configs: FlatConfigComposer
declare const options: NuxtESLintConfigOptionsResolved
declare const withNuxt: typeof defineFlatConfigs
export default withNuxt
export { withNuxt, defineFlatConfigs, configs, options }
<script lang="ts" setup>
defineOptions({
  tags: ['linecharts']
});

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },

  label: {
    type: String,
    default: 'Line Chart'
  },

  name_y: {
    type: String,
    required: true
  },

  category_name: {
    type: String,
    required: true
  },

  dataYears: {
    type: Array,
    default: () => [],
  }
});

const categories: Record<string, BulletLegendItemInterface> = {
  [props.category_name]: { name: `${props.category_name}`, color: 'black' },
}

const xFormatter = (tick: number, _i?: number, _ticks?: number[]): string => {
  console.log(props.data)
  return props.data[tick]?.month ?? ''
}
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-6 rounded-lg" :class="'p-6'">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">
        {{ label }}
      </h3>
    </div>
    <LineChart :data="data" :height="300" :y-label="name_y" :x-num-ticks="2" :categories="categories"
      :x-formatter="xFormatter" :y-grid-line="true" :curve-type="CurveType.MonotoneX"
      :legend-position="LegendPosition.TopRight" :hide-legend="false" />
  </div>
</template>
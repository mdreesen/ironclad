<script setup lang="ts">
// Professional Logistics Data
const personnel = ['Thorne', 'Vane', 'Rodriguez', 'Sinsier'];
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const deployments = ref([
  { team: 'Thorne', day: 'MON', project: 'Whitefish Lake Estate', role: 'Foundations' },
  { team: 'Thorne', day: 'FRI', project: 'Bigfork Finish', role: 'Finishing' },
  { team: 'Vane', day: 'WED', project: 'Kalispell Slab', role: 'Slab Pour' },
  { team: 'Rodriguez', day: 'TUE', project: 'Kalispell Slab', role: 'Foundations' }
]);
</script>

<template>
  <div class="min-h-screen bg-white text-black font-sans p-6 lg:p-12">
     <header>
      <div class="col-span-12 md:col-span-6 mb-8 md:mb-0">
          Grid <span class="text-zinc-300">Logistics.</span>
        </div>
      <div class="col-span-12 md:col-span-6 text-left md:text-right text-[10px] font-bold uppercase tracking-widest leading-relaxed">
        <p>Hahn Built // Alexander Homes Homes // Ironclad Operations</p>
        <span class="text-zinc-400 font-mono inline-block mt-2">v.2.0.26 // Active // No Slant</span>
      </div>
     </header>

    <main class="max-w-400 mx-auto">
      
      <div class="overflow-x-auto bg-white border-t border-black">
        <div class="grid grid-cols-8 border-b border-black">
          <div class="p-6 border-r border-black font-black uppercase text-[11px] tracking-wider text-zinc-500">Personnel</div>
          <div v-for="day in days" :key="day" class="p-6 border-r border-black last:border-r-0 font-black uppercase text-[11px] tracking-wider text-center">
            {{day}}
          </div>
        </div>
        
        <div class="grid grid-cols-8 min-h-150 divide-x divide-black/10">
          
          <div class="col-span-1 divide-y divide-black/10 bg-white border-r border-black">
            <div v-for="member in personnel" :key="member" class="h-48 p-6 flex items-center group cursor-pointer hover:bg-black transition-colors">
              <span class="text-2xl font-black uppercase tracking-tighter text-black group-hover:text-white tabular-nums">{{ member }}</span>
            </div>
          </div>

          <div v-for="day in days" :key="day" class="col-span-1 relative divide-y divide-black/10">
            <template v-for="task in deployments" :key="task.project">
              <div v-if="task.day === day" 
                class="absolute left-1 right-1 bg-black text-white p-6 cursor-crosshair group hover:bg-zinc-800 transition-colors"
                :class="{
                  'h-24 top-0': task.team === personnel[0],
                  'h-32 top-1/4': task.team === personnel[1],
                  'h-48 top-2/3': task.team === personnel[2]
                }">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span class="text-[9px] font-black uppercase tracking-tight text-white/50 group-hover:text-white">DEPLOYMENT // {{task.role}}</span>
                </div>
                <h4 class="font-black uppercase tracking-tighter text-xl leading-none">{{task.project}}</h4>
              </div>
            </template>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
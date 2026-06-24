<template>
  <aside class="rounded-[28px] border border-sky-400/20 bg-sky-500/10 p-6 ring-1 ring-sky-300/20">
    <p class="text-xs uppercase tracking-[0.24em] text-sky-200">pinia child</p>
    <h2 class="mt-2 text-2xl font-bold">test con</h2>
    <p class="mt-3 leading-7 text-slate-200">
      Con khong can props/emit. Con doc truc tiep state va action tu Pinia
      store.
    </p>

    <div class="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
      <p class="text-sm text-slate-400">count trong store</p>
      <p class="mt-2 text-3xl font-bold text-sky-300">{{ store.count }}</p>
      <p class="mt-2 text-sm text-slate-400">
        lastAction: {{ store.lastAction }}
      </p>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <button
        class="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:scale-[1.02]"
        @click="store.increment('con')"
      >
        Tang tu con
      </button>
      <button
        class="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-slate-50 transition hover:bg-white/10"
        @click="store.reset('con')"
      >
        Reset tu con
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useTestCodeStore } from "~/stores/testCode";

const store = useTestCodeStore();
</script>

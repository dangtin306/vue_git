<template>
  <main class="min-h-screen bg-slate-950 px-6 py-10 text-slate-50">
    <section class="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
        <p class="text-xs uppercase tracking-[0.24em] text-sky-300">pinia parent</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight">test cha</h1>
        <p class="mt-4 max-w-2xl leading-7 text-slate-300">
          Day la demo Pinia. Cha va con cung doc chung 1 store, khong can
          props/emit nua.
        </p>

        <div class="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p class="text-sm text-slate-400">count trong store</p>
          <p class="mt-2 text-3xl font-bold text-emerald-300">{{ store.count }}</p>
          <p class="mt-2 text-sm text-slate-400">
            lastAction: {{ store.lastAction }}
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <button
            class="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:scale-[1.02]"
            @click="store.increment('cha')"
          >
            Tang tu cha
          </button>
          <button
            class="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-slate-50 transition hover:bg-white/10"
            @click="store.reset('cha')"
          >
            Reset tu cha
          </button>
        </div>
      </div>

      <TestChild />
    </section>
  </main>
</template>

<script setup>
import TestChild from "~/components/test_code/TestChild.vue";
import { useTestCodeStore } from "~/stores/testCode";

const store = useTestCodeStore();
</script>

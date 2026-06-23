<template>
  <main
    class="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_35%),linear-gradient(135deg,_#f8fafc,_#dbeafe_55%,_#e0f2fe)] px-6 py-10"
  >
    <section
      class="w-full max-w-2xl rounded-[24px] bg-white/90 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur"
    >
      <p
        class="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-700"
      >
        Nuxt App
      </p>
      <h1 class="text-4xl font-bold tracking-tight text-slate-900">
        {{ title }}
      </h1>
      <p class="mt-3 mb-5 leading-7 text-slate-600">
        Project nay da duoc chuyen sang Nuxt va style bang Tailwind, chay tren
        cong
        <strong>{{ port }}</strong>.
      </p>

      <input
        v-model="name"
        type="text"
        placeholder="Nhap ten cua ban"
        class="w-full rounded-2xl border border-sky-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-200/50"
      />
      <p v-if="name" class="mt-4 min-h-6 font-semibold text-slate-900">
        Xin chao {{ name }}
      </p>

      <div class="mt-5 flex gap-3">
        <button
          class="cursor-pointer rounded-full bg-slate-900 px-4 py-2.5 text-white transition hover:bg-slate-800"
          @click="count += 1"
        >
          Count: {{ count }}
        </button>
        <button
          class="cursor-pointer rounded-full bg-slate-200 px-4 py-2.5 text-slate-900 transition hover:bg-slate-300"
          @click="reset"
        >
          Reset
        </button>
      </div>

      <div class="mt-8 grid gap-3 md:grid-cols-3">
        <NuxtLink
          to="/about"
          class="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white"
        >
          <p class="font-semibold text-slate-900">/about</p>
          <p class="mt-1 text-sm text-slate-600">Trang giới thiệu cơ bản.</p>
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white"
        >
          <p class="font-semibold text-slate-900">/services</p>
          <p class="mt-1 text-sm text-slate-600">Danh sách dịch vụ mẫu.</p>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:bg-white"
        >
          <p class="font-semibold text-slate-900">/contact</p>
          <p class="mt-1 text-sm text-slate-600">Trang liên hệ để test route.</p>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const title = "Nuxt Test";
const port = 3004;
const name = ref("");
const count = ref(0);

function reset() {
  name.value = "";
  count.value = 0;
}
</script>

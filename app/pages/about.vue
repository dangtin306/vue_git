<template>
  <main
    class="min-h-screen bg-slate-950 px-6 py-10 text-slate-50"
  >
    <div class="mx-auto max-w-3xl">
      <div class="mb-6 flex flex-wrap gap-2">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="rounded-full border border-slate-700 px-3 py-2 text-sm transition hover:border-sky-400 hover:text-sky-300"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <p class="text-sm uppercase tracking-[0.2em] text-sky-300">About</p>
      <h1 class="mt-2 text-4xl font-bold">/about</h1>
      <p class="mt-4 max-w-2xl text-slate-300">
        Route nay dung de test page co noi dung rieng trong Nuxt. Ban co the
        tach tung URI ra thanh page rieng rat nhanh.
      </p>
    </div>
  </main>
</template>

<script setup>
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];
</script>

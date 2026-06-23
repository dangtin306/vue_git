<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div
          class="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-sm font-black text-white"
        >
          V
        </div>
        <div class="leading-tight">
          <p class="text-xs uppercase tracking-[0.22em] text-slate-500">
            Vue Git
          </p>
          <p class="text-sm font-semibold text-slate-900">Frontend</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-2 md:flex">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          active-class="bg-slate-900 text-white hover:bg-slate-900 hover:text-white"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];
</script>

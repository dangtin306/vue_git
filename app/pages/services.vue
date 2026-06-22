<template>
  <main class="min-h-screen bg-white px-6 py-10 text-slate-900">
    <div class="mx-auto max-w-4xl">
      <div class="mb-6 flex flex-wrap gap-2">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="rounded-full border border-slate-200 px-3 py-2 text-sm transition hover:border-sky-400 hover:text-sky-700"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <p class="text-sm uppercase tracking-[0.2em] text-sky-700">Services</p>
      <h1 class="mt-2 text-4xl font-bold">/services</h1>

      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <article
          v-for="card in cards"
          :key="card.title"
          class="rounded-3xl border border-slate-200 bg-slate-50 p-5"
        >
          <p class="text-sm text-sky-700">{{ card.tag }}</p>
          <h2 class="mt-2 text-xl font-semibold">{{ card.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ card.copy }}</p>
        </article>
      </div>
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

const cards = [
  {
    tag: "UI",
    title: "Landing Pages",
    copy: "Dung de test layout va routing co nhieu section noi dung.",
  },
  {
    tag: "API",
    title: "Nuxt Server",
    copy: "Sau nay co the noi them api route va middleware vao cung project.",
  },
  {
    tag: "SEO",
    title: "Content Pages",
    copy: "Hop de tao nhieu URI tinh va theo doi meta tung page.",
  },
];
</script>

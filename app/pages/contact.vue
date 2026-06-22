<template>
  <main
    class="grid min-h-screen place-items-center bg-gradient-to-br from-amber-50 via-white to-sky-50 px-6 py-10"
  >
    <section class="w-full max-w-2xl rounded-[28px] border border-amber-100 bg-white p-8 shadow-xl shadow-slate-200/60">
      <div class="mb-6 flex flex-wrap gap-2">
        <NuxtLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="rounded-full border border-slate-200 px-3 py-2 text-sm transition hover:border-amber-400 hover:text-amber-700"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <p class="text-sm uppercase tracking-[0.2em] text-amber-700">Contact</p>
      <h1 class="mt-2 text-4xl font-bold text-slate-900">/contact</h1>
      <p class="mt-3 text-slate-600">
        Day la mot URI mau cho form, lien he,okok hosss trossss, hoac feedback page.
      </p>

      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <div class="rounded-2xl bg-slate-50 p-4">
          <p class="text-sm text-slate-500">Email</p>
          <p class="mt-1 font-semibold text-slate-900">hello_9@example.com</p>
        </div>
        <div class="rounded-2xl bg-slate-50 p-4">
          <p class="text-sm text-slate-500">Support</p>
          <p class="mt-1 font-semibold text-slate-900">/contact/support</p>
        </div>
      </div>
    </section>
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

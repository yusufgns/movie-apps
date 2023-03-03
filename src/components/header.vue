<template>
  <div class="relative z-50">
    <div class="flex items-center justify-between px-32 py-5 border-b-[1px] absolute w-full">
      <div class="logo text-white">LOGO</div>
      <div class="routerLink">
        <RouterLink class="routerClass text-white" to="/">Home</RouterLink>
        <RouterLink class="routerClass text-white" to="/category">Category</RouterLink>
        <RouterLink class="routerClass text-white" to="/about">About</RouterLink>
      </div>
      <div
        class="search bg-gray-100 border-[#73C18F] border p-2 rounded-full"
      ></div>
    </div>
  </div>
  <RouterView></RouterView>
</template>

<style>
.routerClass {
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-right: 22px;
}

.router-link-active {
  color: #73c18f;
}
</style>

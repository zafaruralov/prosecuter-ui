<template>
  <thead class="[&_tr]:border-b bg-border">
    <slot />
  </thead>
</template>

<script setup>
  defineOptions({
    name: 'TableHeader',
  });
</script>

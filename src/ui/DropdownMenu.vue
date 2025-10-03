<script setup>
import { ref, provide } from 'vue'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const close = () => {
  isOpen.value = false
}

provide('dropdownOpen', isOpen)
provide('dropdownClose', close)
provide('dropdownToggle', toggle)
</script>

<template>
  <div class="relative inline-block">
    <slot />
  </div>
</template>

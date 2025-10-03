<script setup>
import { useAttrs, computed } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  }
})

const attrs = useAttrs()

const inputClasses = computed(() => {
  return cn(
    'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
    'border-input bg-background',
    props.error && 'border-destructive focus-visible:ring-destructive',
    props.readonly && 'bg-muted cursor-default',
    props.class
  )
})
</script>

<template>
  <input 
    :class="inputClasses" 
    :disabled="disabled"
    :readonly="readonly"
    v-bind="attrs"
  >
</template>


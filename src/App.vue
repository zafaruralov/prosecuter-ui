<script setup>
  import { ref } from 'vue';
  import Button from '@/ui/Button.vue';
  import Input from '@/ui/Input.vue';
  import DataTable from '@/components/DataTable.vue';
  import DataTableDraggable from '@/components/DataTableDraggable.vue';
  import { Search } from 'lucide-vue-next';

  const email = ref('');
  const password = ref('');
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-background p-4">
    <div class="w-full max-w-6xl p-8 space-y-6">
      <div class="space-y-2">
        <h1 class="text-4xl font-bold">shadcn/vue</h1>
        <p class="text-muted-foreground">shadcn/vue.</p>
      </div>

      <div class="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div class="flex flex-wrap gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>

      <div class="p-4 border rounded-md bg-muted/50">
        <p class="text-sm">shadcn/vue.</p>
      </div>

      <div class="space-y-4">
        <h2 class="text-2xl font-semibold">Inputs</h2>
        <Input v-model="email" type="email" placeholder="Email" />
        <Input v-model="password" type="password" placeholder="Password" />
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
        <div class="relative w-full max-w-sm items-center">
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            class="pl-10"
          />
          <span
            class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Search class="size-6 text-muted-foreground" />
          </span>
        </div>
      </div>

      <div class="space-y-4 w-full">
        <h2 class="text-2xl font-semibold">Advanced Data Table</h2>
        <DataTable />
      </div>
      <div class="space-y-4 w-full">
        <h2 class="text-2xl font-semibold">Advanced Data Table Draggable</h2>
        <DataTableDraggable />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

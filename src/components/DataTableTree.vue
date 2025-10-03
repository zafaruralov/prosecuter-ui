<script setup>
  import { ref } from 'vue';
  import {
    getCoreRowModel,
    getExpandedRowModel,
    useVueTable,
  } from '@tanstack/vue-table';
  import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
  } from '@/ui/tables';
  import { ChevronRight } from 'lucide-vue-next';

  const data = [
    {
      name: '07akioni',
      index: '07',
      children: [{ name: '07akioni child', index: '07' }],
    },
    { name: '08akioni', index: '08', children: [] },
    { name: '09akioni', index: '09', children: [] },
    { name: '10akioni', index: '10', children: [] },
    { name: '11akioni', index: '11', children: [] },
  ];

  const columns = [
    { accessorKey: 'name', header: 'name' },
    { accessorKey: 'index', header: 'index' },
  ];

  const expanded = ref({});

  const table = useVueTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: row => row.children ?? [],
    onExpandedChange: updater => {
      expanded.value =
        typeof updater === 'function' ? updater(expanded.value) : updater;
    },
    state: {
      get expanded() {
        return expanded.value;
      },
    },
  });
</script>

<template>
  <div class="rounded-md border">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>name</TableHead>
          <TableHead>index</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
          <TableCell>
            <div
              class="flex items-center gap-2"
              :style="{ paddingLeft: `${row.depth * 1.25}rem` }"
            >
              <span
                @click="row.getCanExpand() && row.toggleExpanded()"
                class="cursor-pointer inline-flex h-6 w-6 items-center justify-center"
              >
                <ChevronRight
                  v-if="row.getCanExpand()"
                  :class="
                    row.getIsExpanded()
                      ? 'size-4 rotate-90 transition-transform'
                      : 'size-4 transition-transform'
                  "
                />
              </span>
              <span>{{ row.getValue('name') }}</span>
            </div>
          </TableCell>
          <TableCell>{{ row.getValue('index') }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

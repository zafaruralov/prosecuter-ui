<script setup>
  import { ref, computed } from 'vue';
  import {
    getCoreRowModel,
    getPaginationRowModel,
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
  import { FlexRender } from '@tanstack/vue-table';

  function toColumnDefs(nodes) {
    return nodes.map(n =>
      n.children?.length
        ? { header: n.title, columns: toColumnDefs(n.children) }
        : { accessorKey: n.key, header: n.title }
    );
  }

  function createCols() {
    return [
      { title: 'Name', key: 'name' },
      {
        title: 'Attrs',
        key: 'attrs',
        children: [
          {
            title: 'Attack',
            key: 'attack',
            children: [
              { title: 'Physics Attack', key: 'physicsAttack' },
              { title: 'Magic Attack', key: 'magicAttack' },
            ],
          },
          { title: 'Defend', key: 'defend' },
          { title: 'Speed', key: 'speed' },
        ],
      },
    ];
  }

  function createData() {
    return Array.from({ length: 50 }).map((_, i) => ({
      key: i,
      name: `name_${i}`,
      physicsAttack: `physicsAttack_${i}`,
      magicAttack: `magicAttack_${i}`,
      defend: `defend_${i}`,
      speed: `speed_${i}`,
    }));
  }

  const rows = createData();
  const columnNodes = createCols();
  const columns = computed(() => toColumnDefs(columnNodes));

  const pageIndex = ref(0);

  const table = useVueTable({
    data: rows,
    get columns() {
      return columns.value;
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      get pagination() {
        return { pageIndex: pageIndex.value, pageSize: 10 };
      },
    },
    onPaginationChange: updater => {
      const next =
        typeof updater === 'function'
          ? updater({ pageIndex: pageIndex.value, pageSize: 10 })
          : updater;
      pageIndex.value = next.pageIndex;
    },
  });
</script>

<template>
  <div class="w-full">
    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow v-for="hg in table.getHeaderGroups()" :key="hg.id">
            <TableHead
              v-for="header in hg.headers"
              :key="header.id"
              :colspan="header.colSpan"
              :rowspan="
                header.colSpan === 1 && !header.subHeaders?.length
                  ? table.getHeaderGroups().length - header.depth
                  : 1
              "
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              {{ cell.getValue() }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="flex items-center justify-end gap-2 py-4">
      <button
        class="h-8 rounded-md border px-3 text-sm disabled:opacity-50"
        :disabled="!table.getCanPreviousPage()"
        @click="table.previousPage()"
      >
        Prev
      </button>
      <div class="text-sm">{{ table.getState().pagination.pageIndex + 1 }}</div>
      <button
        class="h-8 rounded-md border px-3 text-sm disabled:opacity-50"
        :disabled="!table.getCanNextPage()"
        @click="table.nextPage()"
      >
        Next
      </button>
    </div>
  </div>
</template>

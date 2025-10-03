<script setup>
  import { ref, h } from 'vue';
  import Draggable from 'vuedraggable';
  import {
    getCoreRowModel,
    getSortedRowModel,
    useVueTable,
    FlexRender,
  } from '@tanstack/vue-table';
  import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
  } from '@/ui/tables';
  import Button from '@/ui/Button.vue';
  import { GripVertical } from 'lucide-vue-next';

  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      jobTitle: 'Software Engineer',
      department: 'Engineering',
      dob: '1990-01-01',
      hireDate: '2020-01-15',
      salary: 80000,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      jobTitle: 'Product Manager',
      department: 'Product',
      dob: '1985-05-20',
      hireDate: '2019-03-10',
      salary: 95000,
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      jobTitle: 'UX Designer',
      department: 'Design',
      dob: '1992-07-30',
      hireDate: '2021-06-01',
      salary: 70000,
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      jobTitle: 'Data Analyst',
      department: 'Analytics',
      dob: '1988-11-15',
      hireDate: '2018-09-20',
      salary: 75000,
    },
  ];

  const columnDefs = ref([
    { id: 'lastName', header: 'Last Name', accessorKey: 'lastName' },
    { id: 'jobTitle', header: 'Job Title', accessorKey: 'jobTitle' },
    { id: 'firstName', header: 'First Name', accessorKey: 'firstName' },
    { id: 'department', header: 'Department', accessorKey: 'department' },
    { id: 'dob', header: 'Date of Birth', accessorKey: 'dob' },
    { id: 'hireDate', header: 'Hire Date', accessorKey: 'hireDate' },
    {
      id: 'salary',
      header: 'Salary',
      accessorKey: 'salary',
      cell: ({ row }) => {
        const val = Number(row.getValue('salary'));
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(val);
      },
    },
  ]);

  const sorting = ref([]);
  const columnOrder = ref(columnDefs.value.map(c => c.id));

  const table = useVueTable({
    get data() {
      return data;
    },
    get columns() {
      return columnDefs.value;
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: updater => {
      sorting.value =
        typeof updater === 'function' ? updater(sorting.value) : updater;
    },
    state: {
      get sorting() {
        return sorting.value;
      },
      get columnOrder() {
        return columnOrder.value;
      },
    },
    onColumnOrderChange: updater => {
      columnOrder.value =
        typeof updater === 'function' ? updater(columnOrder.value) : updater;
    },
  });

  function onDragEnd() {
    columnOrder.value = columnDefs.value.map(c => c.id);
    if (table && typeof table.setColumnOrder === 'function')
      table.setColumnOrder(columnOrder.value);
  }
</script>

<template>
  <div class="w-full">
    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <Draggable
            v-model="columnDefs"
            item-key="id"
            tag="tr"
            :ghost-class="'opacity-60'"
            :animation="150"
            handle=".drag-handle"
            :force-fallback="true"
            @end="onDragEnd"
          >
            <template #item="{ element }">
              <TableHead :style="{ width: 'auto' }">
                <div class="flex items-center gap-1 select-none">
                  <Button
                    size="icon"
                    variant="ghost"
                    class="-ml-2 size-7 drag-handle cursor-grab active:cursor-grabbing"
                  >
                    <GripVertical class="opacity-60" size="16" />
                  </Button>
                  <span class="grow truncate">{{ element.header }}</span>
                </div>
              </TableHead>
            </template>
          </Draggable>
        </TableHeader>
        <TableBody>
          <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="
                  cell.column.columnDef.cell ??
                  (({ row }) => row.getValue(cell.column.id))
                "
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <p class="text-muted-foreground mt-4 text-center text-sm">
      Data table with draggable columns
    </p>
  </div>
</template>

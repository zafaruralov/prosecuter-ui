import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './index.js'

export default {
  title: 'UI/Tables/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => ({
    components: { Table, TableHeader, TableBody, TableHead, TableRow, TableCell },
    template: `
      <div class="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-medium">John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Bob Johnson</TableCell>
              <TableCell>bob@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `
  })
}

export const WithCheckboxes = {
  render: () => ({
    components: { Table, TableHeader, TableBody, TableHead, TableRow, TableCell },
    template: `
      <div class="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[50px]">
                <input type="checkbox" class="rounded" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <input type="checkbox" class="rounded" />
              </TableCell>
              <TableCell class="font-medium">John Doe</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input type="checkbox" class="rounded" />
              </TableCell>
              <TableCell class="font-medium">Jane Smith</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `
  })
}

export const Empty = {
  render: () => ({
    components: { Table, TableHeader, TableBody, TableHead, TableRow, TableCell },
    template: `
      <div class="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colspan="3" class="h-24 text-center">
                No results found.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `
  })
}

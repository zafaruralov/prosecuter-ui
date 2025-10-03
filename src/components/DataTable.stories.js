import DataTable from './DataTable.vue'

export default {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export const Default = {
  render: () => ({
    components: { DataTable },
    template: '<DataTable />'
  })
}

export const FullWidth = {
  render: () => ({
    components: { DataTable },
    template: '<div class="container mx-auto"><DataTable /></div>'
  })
}

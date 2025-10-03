import Button from './Button.vue'

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  render: () => ({
    components: { Button },
    template: '<Button>Default Button</Button>'
  })
}

export const Secondary = {
  render: () => ({
    components: { Button },
    template: '<Button variant="secondary">Secondary Button</Button>'
  })
}

export const Destructive = {
  render: () => ({
    components: { Button },
    template: '<Button variant="destructive">Destructive Button</Button>'
  })
}

export const Outline = {
  render: () => ({
    components: { Button },
    template: '<Button variant="outline">Outline Button</Button>'
  })
}

export const Ghost = {
  render: () => ({
    components: { Button },
    template: '<Button variant="ghost">Ghost Button</Button>'
  })
}

export const Link = {
  render: () => ({
    components: { Button },
    template: '<Button variant="link">Link Button</Button>'
  })
}

export const Small = {
  render: () => ({
    components: { Button },
    template: '<Button size="sm">Small Button</Button>'
  })
}

export const Large = {
  render: () => ({
    components: { Button },
    template: '<Button size="lg">Large Button</Button>'
  })
}

export const Disabled = {
  render: () => ({
    components: { Button },
    template: '<Button disabled>Disabled Button</Button>'
  })
}

export const AllVariants = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button disabled>Disabled Default</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="destructive" disabled>Disabled Destructive</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button>Default Size</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🚀</Button>
        </div>
      </div>
    `
  })
}

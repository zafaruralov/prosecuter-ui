import Input from './Input.vue'

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export const Default = {
  args: {
    placeholder: 'Type something...',
  },
}

export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
}

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
}

export const Number = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
}

export const Disabled = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: 'Cannot edit this',
  },
}

export const Readonly = {
  args: {
    readonly: true,
    value: 'Read-only value',
    placeholder: 'This is readonly',
  },
}

export const Error = {
  args: {
    error: true,
    placeholder: 'This has an error',
    value: 'Invalid input',
  },
}

export const WithValue = {
  args: {
    value: 'Pre-filled value',
    placeholder: 'Type something...',
  },
}

export const AllStates = {
  render: () => ({
    components: { Input },
    template: `
      <div class="space-y-4 w-80">
        <div>
          <label class="text-sm font-medium">Default</label>
          <Input placeholder="Default input" />
        </div>
        <div>
          <label class="text-sm font-medium">With Value</label>
          <Input value="Sample text" placeholder="Type something..." />
        </div>
        <div>
          <label class="text-sm font-medium">Disabled</label>
          <Input disabled value="Disabled text" placeholder="Disabled input" />
        </div>
        <div>
          <label class="text-sm font-medium">Readonly</label>
          <Input readonly value="Readonly text" placeholder="Readonly input" />
        </div>
        <div>
          <label class="text-sm font-medium text-destructive">Error State</label>
          <Input error value="Invalid input" placeholder="Error input" />
        </div>
        <div>
          <label class="text-sm font-medium">Password</label>
          <Input type="password" placeholder="Enter password" />
        </div>
      </div>
    `
  })
}

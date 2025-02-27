import { NbosIcon } from './NbosIcon'

export default {
  title: 'Atoms/NbosIcon',
  component: NbosIcon,
}

const Template = args => <NbosIcon {...args} />

export const Error = Template.bind({})
Error.args = {
  icon: 'error',
  color: '#ff0000',
}

export const Warning = Template.bind({})
Warning.args = {
  icon: 'warning',
  color: '#e6b800',
}

export const ThumbUp = Template.bind({})
ThumbUp.args = {
  icon: 'thumb_up',
  color: '#009933',
}

export const AutoAwesomeMotion = Template.bind({})
AutoAwesomeMotion.args = {
  icon: 'auto_awesome_motion',
  color: '#9900cc',
}

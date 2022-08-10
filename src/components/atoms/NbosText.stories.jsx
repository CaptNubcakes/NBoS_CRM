import { NbosText } from './NbosText'

export default {
  title: 'Atoms/NbosText',
  component: NbosText,
}

const Template = args => <NbosText {...args} />

export const Xs = Template.bind({})
Xs.args = {
  size: 'xs',
  text: 'Steve Pietrek',
}

export const Sm = Template.bind({})
Sm.args = {
  size: 'sm',
  text: 'Josh Furr',
}

export const Base = Template.bind({})
Base.args = {
  text: 'Steve Pietrek',
}

export const BoldBase = Template.bind({})
BoldBase.args = {
  text: 'Josh Furr',
  bold: true,
}

export const Lg = Template.bind({})
Lg.args = {
  size: 'lg',
  text: 'Steve Pietrek',
}

export const LgUppercase = Template.bind({})
LgUppercase.args = {
  size: 'lg',
  text: 'Steve Pietrek',
  uppercase: true,
}

export const Xl = Template.bind({})
Xl.args = {
  size: 'xl',
  text: 'Steve Pietrek',
}

export const Xl2 = Template.bind({})
Xl2.args = {
  size: '2xl',
  text: 'Steve Pietrek',
}

export const Xl7 = Template.bind({})
Xl7.args = {
  size: '7xl',
  text: 'Josh Furr',
}

export const Xl9 = Template.bind({})
Xl9.args = {
  size: '9xl',
  text: 'Steve Pietrek',
}
